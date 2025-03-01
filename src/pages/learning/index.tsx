import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users, Star, Play, ArrowRight } from 'lucide-react';

export function Learning() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          آموزش‌های تخصصی
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          دوره‌های آموزشی تخصصی برای ارتقای مهارت‌های اعضای صنف
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Featured Courses */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'تعمیرات تخصصی لپ‌تاپ',
              description: 'آموزش عیب‌یابی و تعمیر انواع لپ‌تاپ',
              instructor: 'استاد رضایی',
              duration: '۲۰ ساعت',
              students: 156,
              rating: 4.8,
              image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc'
            },
            {
              title: 'نصب و راه‌اندازی شبکه',
              description: 'آموزش کامل شبکه‌های کامپیوتری',
              instructor: 'دکتر محمدی',
              duration: '۱۵ ساعت',
              students: 89,
              rating: 4.6,
              image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8'
            },
            {
              title: 'تعمیر پرینتر و ماشین‌های اداری',
              description: 'آموزش تعمیرات تخصصی تجهیزات اداری',
              instructor: 'مهندس کریمی',
              duration: '۲۵ ساعت',
              students: 234,
              rating: 4.9,
              image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6'
            }
          ].map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">
                      ({course.students} دانشجو)
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-primary hover:underline">
                    مشاهده دوره
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">دسته‌بندی دوره‌ها</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'تعمیرات سخت‌افزار',
                count: 12,
                icon: GraduationCap,
                color: 'bg-blue-500'
              },
              {
                title: 'نرم‌افزار و برنامه‌نویسی',
                count: 8,
                icon: GraduationCap,
                color: 'bg-green-500'
              },
              {
                title: 'شبکه و امنیت',
                count: 6,
                icon: GraduationCap,
                color: 'bg-purple-500'
              },
              {
                title: 'مدیریت کسب و کار',
                count: 4,
                icon: GraduationCap,
                color: 'bg-orange-500'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex rounded-lg ${category.color} p-3 mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} دوره آموزشی
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-2xl bg-primary p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              آماده یادگیری هستید؟
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              با شرکت در دوره‌های آموزشی، مهارت‌های خود را ارتقا دهید و در کسب و کار خود موفق‌تر شوید.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              مشاهده همه دوره‌ها
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}