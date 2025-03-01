import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Globe, Layout, Moon, Palette, Shield, Smartphone, Sparkles, Speech as Speed, Zap } from 'lucide-react';

const features = [
  {
    title: 'معماری مدرن',
    description: 'استفاده از React 18 و TypeScript برای کد نویسی قدرتمند و type-safe',
    icon: Code2,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'طراحی واکنشگرا',
    description: 'رابط کاربری کاملاً واکنشگرا با پشتیبانی از تمامی دستگاه‌ها',
    icon: Smartphone,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'پایگاه داده قدرتمند',
    description: 'استفاده از Supabase برای مدیریت داده‌ها و احراز هویت',
    icon: Database,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    title: 'رابط کاربری زیبا',
    description: 'طراحی مدرن و زیبا با استفاده از Tailwind CSS',
    icon: Palette,
    color: 'bg-pink-500',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'انیمیشن‌های روان',
    description: 'انیمیشن‌های حرفه‌ای با استفاده از Framer Motion',
    icon: Sparkles,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'حالت تاریک',
    description: 'پشتیبانی از حالت تاریک و روشن با تم سیستمی',
    icon: Moon,
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'عملکرد بهینه',
    description: 'بهینه‌سازی عملکرد با استفاده از Vite و code splitting',
    icon: Speed,
    color: 'bg-red-500',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    title: 'امنیت بالا',
    description: 'پیاده‌سازی استانداردهای امنیتی و احراز هویت قوی',
    icon: Shield,
    color: 'bg-teal-500',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    title: 'PWA',
    description: 'قابلیت نصب روی دستگاه با Progressive Web App',
    icon: Globe,
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'UI/UX حرفه‌ای',
    description: 'طراحی تجربه کاربری مدرن و کاربرپسند',
    icon: Layout,
    color: 'bg-cyan-500',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'هوش مصنوعی',
    description: 'استفاده از AI برای بهبود تجربه کاربری و پیشنهادات هوشمند',
    icon: Cpu,
    color: 'bg-violet-500',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    title: 'عملکرد سریع',
    description: 'زمان پاسخگویی سریع و بهینه‌سازی شده',
    icon: Zap,
    color: 'bg-amber-500',
    gradient: 'from-amber-500 to-yellow-500'
  }
];

export function Features() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          تکنولوژی‌ها و امکانات
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          معرفی تکنولوژی‌ها و امکانات پیشرفته مورد استفاده در پروژه
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-card p-6 transition-all duration-300 hover:shadow-xl"
          >
            <div className={`absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20 bg-gradient-to-br ${feature.gradient}`} />
            <div className={`inline-flex rounded-xl ${feature.color} p-3`}>
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 rounded-xl bg-card p-6"
      >
        <h2 className="text-2xl font-bold mb-4">معماری پروژه</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            این پروژه با استفاده از معماری مدرن و component-based طراحی شده است. استفاده از TypeScript
            باعث افزایش امنیت کد و کاهش خطاها می‌شود. همچنین با استفاده از Tailwind CSS، طراحی
            رابط کاربری به صورت utility-first انجام شده که باعث افزایش سرعت توسعه و یکپارچگی
            استایل‌ها می‌شود.
          </p>
          <p>
            برای مدیریت state از Context API و برای مدیریت فرم‌ها از React Hook Form استفاده
            شده است. انیمیشن‌های صفحات با Framer Motion پیاده‌سازی شده‌اند که تجربه کاربری
            روان‌تری را ایجاد می‌کند.
          </p>
          <p>
            در بخش بک‌اند، از Supabase به عنوان سرویس BaaS استفاده شده که علاوه بر مدیریت
            داده‌ها، امکانات authentication و real-time updates را نیز فراهم می‌کند.
          </p>
        </div>
      </motion.div>
    </section>
  );
}