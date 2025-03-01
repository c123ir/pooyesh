import { motion } from 'framer-motion';
import { Building2, Users, Wallet, TrendingUp, Calendar, MapPin, Clock, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export function Cooperative() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          شرکت تعاونی اتحادیه
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          خدمات و مزایای ویژه برای اعضای تعاونی صنف خدمات رایانه
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
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">تعداد اعضا</p>
                <p className="text-2xl font-bold">۱,۲۵۰ نفر</p>
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
                <Wallet className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">سرمایه تعاونی</p>
                <p className="text-2xl font-bold">۱۲ میلیارد تومان</p>
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
                <TrendingUp className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">سود سالانه</p>
                <p className="text-2xl font-bold">۲۵٪</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">خدمات تعاونی</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'خرید اقساطی تجهیزات',
                description: 'امکان خرید تجهیزات مورد نیاز به صورت اقساطی',
                icon: Building2,
                color: 'bg-blue-500'
              },
              {
                title: 'وام‌های کم‌بهره',
                description: 'اعطای وام با شرایط ویژه به اعضای تعاونی',
                icon: Wallet,
                color: 'bg-green-500'
              },
              {
                title: 'خرید عمده',
                description: 'تخفیف ویژه برای خرید عمده تجهیزات',
                icon: TrendingUp,
                color: 'bg-purple-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-xl bg-card p-6"
              >
                <div className={`inline-flex rounded-lg ${service.color} p-3 mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <button className="mt-4 flex items-center gap-2 text-primary hover:underline">
                  <span>اطلاعات بیشتر</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">رویدادهای پیش رو</h2>
          <div className="space-y-4">
            {[
              {
                title: 'مجمع عمومی سالانه',
                description: 'بررسی عملکرد سال گذشته و برنامه‌های آینده',
                date: '۱۵ اسفند ۱۴۰۳',
                time: '۱۰:۰۰',
                location: 'سالن اجتماعات اتحادیه'
              },
              {
                title: 'کارگاه آموزشی سرمایه‌گذاری',
                description: 'آشنایی با روش‌های سرمایه‌گذاری در تعاونی',
                date: '۲۰ اسفند ۱۴۰۳',
                time: '۱۴:۰۰',
                location: 'سالن کنفرانس تعاونی'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="rounded-lg bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">مزایای عضویت</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'امکان خرید اقساطی تجهیزات',
              'دریافت وام با شرایط ویژه',
              'تخفیف خرید عمده',
              'سود سالانه تضمینی',
              'مشارکت در تصمیم‌گیری‌ها',
              'خدمات بیمه تکمیلی'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-card"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">اسناد و مدارک</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'اساسنامه تعاونی',
              'فرم عضویت',
              'شرایط دریافت وام',
              'آیین‌نامه معاملات'
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-card"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>{doc}</span>
                </div>
                <button className="text-primary hover:underline">دانلود</button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="rounded-2xl bg-primary p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              به جمع اعضای تعاونی بپیوندید
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              با عضویت در تعاونی از مزایای ویژه و خدمات متنوع بهره‌مند شوید.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              ثبت‌نام در تعاونی
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}