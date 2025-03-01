import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Building2, GraduationCap, Users, Search, Filter, ChevronDown, ArrowRight } from 'lucide-react';

export function Jobs() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          فرصت‌های شغلی صنف
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          آگهی‌های استخدام و فرصت‌های همکاری در واحدهای صنفی
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="جستجو در فرصت‌های شغلی..."
                className="w-full pl-4 pr-10 py-2 rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-input hover:bg-accent">
                <Filter className="h-5 w-5" />
                <span>فیلترها</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-input hover:bg-accent">
                <span>مرتب‌سازی</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="mb-8 flex gap-4 overflow-x-auto pb-4">
          {[
            'همه موقعیت‌ها',
            'تعمیرات',
            'فروش',
            'پشتیبانی فنی',
            'برنامه‌نویسی',
            'مدیریت',
            'آموزش'
          ].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                index === 0 
                  ? 'bg-primary text-white' 
                  : 'bg-card hover:bg-accent'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Jobs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">موقعیت‌های ویژه</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'کارشناس تعمیرات لپ‌تاپ',
                company: 'مرکز تخصصی تعمیرات رایانه',
                location: 'کرمان، خیابان شریعتی',
                type: 'تمام وقت',
                experience: '۳ سال',
                salary: '۱۵ تا ۲۵ میلیون تومان',
                urgent: true
              },
              {
                title: 'کارشناس فروش تجهیزات شبکه',
                company: 'فروشگاه تجهیزات شبکه پارس',
                location: 'کرمان، خیابان امام',
                type: 'تمام وقت',
                experience: '۲ سال',
                salary: '۱۲ تا ۲۰ میلیون تومان',
                urgent: false
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card p-6 hover:shadow-lg transition-all duration-300"
              >
                {job.urgent && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    فوری
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>حداقل {job.experience} سابقه کار</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
                  <span>ارسال رزومه</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">آخرین فرصت‌های شغلی</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="rounded-lg bg-card p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">عنوان شغلی {index + 1}</h3>
                      <p className="text-sm text-muted-foreground">نام شرکت</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>کرمان</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>۲ روز پیش</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">موقعیت‌های فعال</p>
                <p className="text-2xl font-bold">۱۲۵</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-500/10 p-3">
                <Building2 className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">شرکت‌های فعال</p>
                <p className="text-2xl font-bold">۴۵</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-500/10 p-3">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">استخدام‌های اخیر</p>
                <p className="text-2xl font-bold">۸۹</p>
              </div>
            </div>
          </motion.div>
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
              آگهی استخدام خود را ثبت کنید
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              با ثبت آگهی استخدام، به سرعت نیروی متخصص مورد نیاز خود را پیدا کنید.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              ثبت آگهی استخدام
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}