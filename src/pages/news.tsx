import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Search, Filter } from 'lucide-react';
import { news, newsCategories } from '../data/mock/news';
import { Link } from 'react-router-dom';

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // فیلتر کردن اخبار بر اساس دسته‌بندی و جستجو
  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.includes(searchQuery) || 
      item.description.includes(searchQuery);
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          اخبار و رویدادها
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          آخرین اخبار و رویدادهای مهم اتحادیه صنف فناوران رایانه کرمان
        </p>
      </motion.div>

      {/* جستجو و فیلتر */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجو در اخبار..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-lg"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="h-5 w-5 text-muted-foreground self-center" />
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-card hover:bg-accent'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* اخبار ویژه */}
      {filteredNews.some(item => item.featured) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">اخبار ویژه</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredNews
              .filter(item => item.featured)
              .map((item) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-lg"
                >
                  <Link to={`/news/${item.id}`}>
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          item.category === 'رویداد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                          item.category === 'خبر' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                          item.category === 'آموزش' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
                        }`}>
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                        {item.description}
                      </p>
                      <button className="mt-4 text-sm font-medium text-primary hover:underline">
                        ادامه مطلب
                      </button>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      )}

      {/* همه اخبار */}
      <div>
        <h2 className="text-xl font-bold mb-4">همه اخبار</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNews
            .filter(item => !item.featured || selectedCategory !== 'all')
            .map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg"
              >
                <Link to={`/news/${item.id}`}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        item.category === 'رویداد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                        item.category === 'خبر' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                        item.category === 'آموزش' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
                      }`}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <button className="mt-4 text-sm font-medium text-primary hover:underline">
                      ادامه مطلب
                    </button>
                  </div>
                </Link>
              </motion.article>
            ))}
        </div>
        
        {/* نمایش پیام در صورت عدم وجود نتیجه */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">هیچ خبری با این مشخصات یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
}