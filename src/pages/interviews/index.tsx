import { motion } from 'framer-motion';
import { Calendar, Clock, User, Briefcase, GraduationCap, MessageSquare, ArrowRight } from 'lucide-react';

export function Interviews() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          مصاحبه با نخبگان صنف
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          گفتگو با کارآفرینان و متخصصان موفق در حوزه خدمات رایانه
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Featured Interview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 rounded-2xl bg-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square md:aspect-auto relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="تصویر مصاحبه شونده"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                مصاحبه ویژه
              </div>
              <h2 className="text-2xl font-bold mb-4">گفتگو با مهندس محمدی</h2>
              <p className="text-muted-foreground mb-6">
                بنیانگذار شرکت داده‌پردازان نوین و از پیشگامان صنعت IT در استان کرمان
              </p>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>۱۵ اسفند ۱۴۰۳</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>زمان مطالعه: ۱۵ دقیقه</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
                <span>مطالعه مصاحبه</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recent Interviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1550000000000 + index}`}
                  alt="تصویر مصاحبه"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">عنوان مصاحبه {index + 1}</h3>
                <div className="space-y-3 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>نام مصاحبه شونده</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>سمت شغلی</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>۱۵ سال سابقه</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-primary hover:underline">
                  <span>ادامه مطلب</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">دسته‌بندی مصاحبه‌ها</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { title: 'کارآفرینی', count: 12 },
              { title: 'تجربیات مدیریتی', count: 8 },
              { title: 'داستان موفقیت', count: 15 },
              { title: 'مشاوره تخصصی', count: 10 }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-lg bg-card p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{category.title}</span>
                  <span className="text-sm text-muted-foreground">{category.count} مصاحبه</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Request Interview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-primary p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              پیشنهاد مصاحبه
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              اگر فردی را می‌شناسید که تجربیات ارزشمندی برای به اشتراک گذاشتن دارد، به ما معرفی کنید.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              معرفی افراد موفق
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}