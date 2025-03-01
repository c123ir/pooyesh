import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Copy, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { news } from '../../data/mock/news';
import { useState, useEffect } from 'react';

export function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  
  // یافتن خبر مورد نظر
  const currentNews = news.find(item => item.id.toString() === id);
  
  // اسکرول به بالای صفحه هنگام تغییر خبر
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // اگر خبر یافت نشد
  if (!currentNews) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">خبر مورد نظر یافت نشد</h1>
          <Link to="/news" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowRight className="h-4 w-4" />
            <span>بازگشت به صفحه اخبار</span>
          </Link>
        </div>
      </div>
    );
  }
  
  // یافتن خبر قبلی و بعدی
  const currentIndex = news.findIndex(item => item.id.toString() === id);
  const prevNews = currentIndex > 0 ? news[currentIndex - 1] : null;
  const nextNews = currentIndex < news.length - 1 ? news[currentIndex + 1] : null;
  
  // یافتن اخبار مرتبط (با همان دسته‌بندی)
  const relatedNews = news
    .filter(item => item.category === currentNews.category && item.id !== currentNews.id)
    .slice(0, 3);
    
  // کپی کردن لینک خبر
  const copyNewsLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowCopyNotification(true);
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 3000);
    });
  };
  
  // اشتراک‌گذاری در تلگرام
  const shareOnTelegram = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(currentNews.title);
    window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank');
  };
  
  // اشتراک‌گذاری در واتساپ
  const shareOnWhatsapp = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(currentNews.title);
    window.open(`https://wa.me/?text=${title}%20${url}`, '_blank');
  };
  
  // کلیدهای میانبر برای ناوبری بین اخبار
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && prevNews) {
        navigate(`/news/${prevNews.id}`);
      } else if (e.key === 'ArrowLeft' && nextNews) {
        navigate(`/news/${nextNews.id}`);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, prevNews, nextNews]);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* هدر خبر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              currentNews.category === 'رویداد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
              currentNews.category === 'خبر' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
              currentNews.category === 'آموزش' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
              'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
            }`}>
              {currentNews.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{currentNews.date}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{currentNews.time}</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{currentNews.title}</h1>
          <p className="text-muted-foreground">{currentNews.description}</p>
        </motion.div>
        
        {/* تصویر خبر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* محتوای خبر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div 
            className="news-content"
            dangerouslySetInnerHTML={{ __html: currentNews.content || '' }}
          />
        </motion.div>
        
        {/* برچسب‌ها */}
        {currentNews.tags && currentNews.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2">
              {currentNews.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* ناوبری بین اخبار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between mb-12 border-t border-b py-4"
        >
          <div>
            {prevNews && (
              <Link 
                to={`/news/${prevNews.id}`} 
                className="flex items-center gap-2 text-primary hover:underline"
                title={prevNews.title}
              >
                <ArrowRight className="h-4 w-4" />
                <span className="hidden sm:inline">خبر قبلی</span>
                <span className="sm:hidden">قبلی</span>
              </Link>
            )}
          </div>
          <Link to="/news" className="text-primary hover:underline">
            <span className="hidden sm:inline">بازگشت به همه اخبار</span>
            <span className="sm:hidden">همه اخبار</span>
          </Link>
          <div>
            {nextNews && (
              <Link 
                to={`/news/${nextNews.id}`} 
                className="flex items-center gap-2 text-primary hover:underline"
                title={nextNews.title}
              >
                <span className="hidden sm:inline">خبر بعدی</span>
                <span className="sm:hidden">بعدی</span>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.div>
        
        {/* اشتراک‌گذاری */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12 bg-muted/50 rounded-lg p-4"
        >
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            اشتراک‌گذاری این خبر
          </h3>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={shareOnTelegram}
              className="share-button share-button-telegram flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>تلگرام</span>
            </button>
            <button 
              onClick={shareOnWhatsapp}
              className="share-button share-button-whatsapp flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>واتساپ</span>
            </button>
            <button 
              onClick={copyNewsLink}
              className="share-button share-button-copy flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              <span>کپی لینک</span>
            </button>
          </div>
        </motion.div>
        
        {/* اخبار مرتبط */}
        {relatedNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold mb-4">اخبار مرتبط</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 news-grid">
              {relatedNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
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
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          item.category === 'رویداد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                          item.category === 'خبر' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                          item.category === 'آموزش' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-card-foreground line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* ناوبری موبایل */}
        <div className="md:hidden fixed bottom-4 left-0 right-0 flex justify-center">
          <div className="flex gap-2 bg-card shadow-lg rounded-full p-2">
            {prevNews && (
              <Link 
                to={`/news/${prevNews.id}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white"
                aria-label="خبر قبلی"
              >
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
            <Link 
              to="/news"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted"
              aria-label="همه اخبار"
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
            {nextNews && (
              <Link 
                to={`/news/${nextNews.id}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white"
                aria-label="خبر بعدی"
              >
                <ChevronLeft className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* نوتیفیکیشن کپی لینک */}
      {showCopyNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg notification-enter">
          لینک خبر کپی شد!
        </div>
      )}
    </div>
  );
}