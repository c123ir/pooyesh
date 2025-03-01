import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { news } from '../data/mock/news';
import { motion } from 'framer-motion';

/**
 * کامپوننت نمایش اخبار و رویدادها
 * 
 * این کامپوننت برای نمایش اخبار و رویدادها در صفحه اصلی و سایر صفحات استفاده می‌شود
 * 
 * نحوه استفاده:
 * <NewsSection limit={3} showViewAll={true} />
 * 
 * پارامترها:
 * - limit: تعداد اخبار نمایش داده شده (اختیاری، پیش‌فرض: همه اخبار)
 * - showViewAll: نمایش دکمه "مشاهده همه اخبار" (اختیاری، پیش‌فرض: true)
 * - category: فیلتر اخبار بر اساس دسته‌بندی (اختیاری)
 */
export function NewsSection({ limit, showViewAll = true, category }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // تعداد اخبار در هر صفحه
  
  // فیلتر کردن اخبار بر اساس دسته‌بندی (اگر تعیین شده باشد)
  const filteredNews = category 
    ? news.filter(item => item.category === category)
    : news;
    
  // محدود کردن تعداد اخبار نمایش داده شده (اگر limit تعیین شده باشد)
  const displayedNews = limit 
    ? filteredNews.slice(0, limit) 
    : filteredNews;
    
  // محاسبه تعداد صفحات برای پیجینیشن
  const totalPages = Math.ceil(displayedNews.length / itemsPerPage);
  
  // اخبار صفحه فعلی
  const currentNews = displayedNews.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold">اخبار و رویدادها</h2>
        {showViewAll && (
          <Link to="/news" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            <span>مشاهده همه اخبار</span>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        )}
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentNews.map((item, index) => (
          <NewsCard key={item.id} news={item} featured={item.featured} />
        ))}
      </div>
      
      {/* پیجینیشن برای موبایل */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-primary/10 text-primary disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </button>
          
          <span className="text-sm">
            {currentPage + 1} از {totalPages}
          </span>
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full bg-primary/10 text-primary disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}

/**
 * کامپوننت کارت خبر
 * 
 * این کامپوننت برای نمایش هر خبر در قالب یک کارت استفاده می‌شود
 * 
 * نحوه استفاده:
 * <NewsCard news={newsItem} featured={true|false} />
 * 
 * پارامترها:
 * - news: اطلاعات خبر
 * - featured: آیا این خبر ویژه است؟ (اختیاری، پیش‌فرض: false)
 */
export function NewsCard({ news, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg ${featured ? 'row-span-2 md:col-span-2' : ''}`}
    >
      <Link to={`/news/${news.id}`}>
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              news.category === 'رویداد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
              news.category === 'خبر' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
              news.category === 'آموزش' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
              'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
            }`}>
              {news.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{news.time}</span>
            </div>
          </div>
          <h3 className={`font-bold text-card-foreground line-clamp-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {news.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {news.description}
          </p>
          <div className="mt-4 text-sm font-medium text-primary hover:underline inline-flex items-center">
            ادامه مطلب
            <ArrowLeft className="mr-1 h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}