import { motion } from 'framer-motion';
import { HandHeart, Users, TrendingUp, Target, ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';

export function Charity() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          خیریه همگانی اتحادیه
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          مشارکت در پروژه‌های خیریه و کمک به توسعه آموزش در مناطق محروم
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <HandHeart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">کل کمک‌های جمع‌آوری شده</p>
                <p className="text-2xl font-bold">۱۲۵,۰۰۰,۰۰۰ تومان</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-500/10 p-3">
                <Target className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">پروژه‌های تکمیل شده</p>
                <p className="text-2xl font-bold">۸ پروژه</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-500/10 p-3">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">مشارکت‌کنندگان</p>
                <p className="text-2xl font-bold">۲۵۶ نفر</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Active Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">پروژه‌های فعال</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'تجهیز کارگاه کامپیوتر مدرسه روستایی',
                description: 'تهیه و نصب ۱۰ دستگاه کامپیوتر برای دانش‌آموزان روستای محروم',
                target: '۵۰,۰۰۰,۰۰۰',
                current: '۳۵,۰۰۰,۰۰۰',
                deadline: '۱۵ اسفند ۱۴۰۳',
                location: 'روستای گلباف، کرمان'
              },
              {
                title: 'راه‌اندازی کتابخانه دیجیتال',
                description: 'ایجاد کتابخانه دیجیتال برای دسترسی آسان دانش‌آموزان به منابع آموزشی',
                target: '۸۰,۰۰۰,۰۰۰',
                current: '۴۵,۰۰۰,۰۰۰',
                deadline: '۲۰ اسفند ۱۴۰۳',
                location: 'شهرستان بم، کرمان'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-xl bg-card overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">پیشرفت</span>
                        <span className="font-medium">۷۰٪</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '70%' }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-muted-foreground">هدف</p>
                          <p className="font-medium">{project.target} تومان</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <div>
                          <p className="text-muted-foreground">جمع‌آوری شده</p>
                          <p className="font-medium">{project.current} تومان</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-muted-foreground">مهلت</p>
                          <p>{project.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-muted-foreground">موقعیت</p>
                          <p>{project.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-white">
                    <HandHeart className="h-5 w-5" />
                    <span>مشارکت در پروژه</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">پروژه‌های تکمیل شده</h2>
            <button className="flex items-center gap-2 text-primary hover:underline">
              <span>مشاهده همه</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="rounded-xl bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-green-500/10 p-2">
                    <Target className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-medium">پروژه تکمیل شده {index + 1}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  توضیحات مختصر درباره پروژه تکمیل شده و نتایج آن...
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">تکمیل شده در</span>
                    <span>۱۴۰۲/۱۲/۱۵</span>
                  </div>
                  <button className="text-primary hover:underline">جزئیات</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-2xl bg-primary p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              در خیر جمعی سهیم شوید
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              با مشارکت در پروژه‌های خیریه، به توسعه آموزش و رفاه در مناطق محروم کمک کنید.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              شروع مشارکت
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}