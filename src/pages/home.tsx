import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileCheck, 
  AlertTriangle,
  ArrowUpRight,
  Newspaper,
  Building2,
  Heart,
  GraduationCap,
  HandHeart,
  ShoppingBag,
  Briefcase,
  UserCheck,
  AlertOctagon,
  FileQuestion
} from 'lucide-react';
import { statistics } from '../data/mock/statistics';
import { NewsSection } from '../components/news-section';
import { HeroSlider } from '../components/hero-slider';

const services = [
  {
    title: 'اخبار و رویدادها',
    description: 'آخرین اخبار و رویدادهای مهم اتحادیه',
    icon: Newspaper,
    href: '/news',
    color: 'bg-blue-500'
  },
  {
    title: 'کمیسیون‌ها',
    description: 'کمیسیون‌های تخصصی اتحادیه',
    icon: Building2,
    href: '/commissions',
    color: 'bg-purple-500'
  },
  {
    title: 'شرکت تعاونی',
    description: 'خدمات و مزایای تعاونی اتحادیه',
    icon: Users,
    href: '/cooperative',
    color: 'bg-green-500'
  },
  {
    title: 'خدمات رفاهی',
    description: 'تسهیلات و خدمات رفاهی اعضا',
    icon: Heart,
    href: '/welfare',
    color: 'bg-pink-500'
  },
  {
    title: 'آموزش',
    description: 'دوره‌های آموزشی تخصصی',
    icon: GraduationCap,
    href: '/learning',
    color: 'bg-indigo-500'
  },
  {
    title: 'خیریه دیجیتالی',
    description: 'حمایت از پروژه‌های خیریه',
    icon: HandHeart,
    href: '/charity',
    color: 'bg-yellow-500'
  },
  {
    title: 'بازارچه صنفی',
    description: 'خرید و فروش تجهیزات',
    icon: ShoppingBag,
    href: '/marketplace',
    color: 'bg-emerald-500'
  },
  {
    title: 'فرصت‌های شغلی',
    description: 'آگهی‌های استخدام',
    icon: Briefcase,
    href: '/jobs',
    color: 'bg-orange-500'
  },
  {
    title: 'مصاحبه با نخبگان',
    description: 'گفتگو با کارآفرینان موفق',
    icon: UserCheck,
    href: '/interviews',
    color: 'bg-cyan-500'
  },
  {
    title: 'گزارش تخلفات صنفی',
    description: 'ثبت و پیگیری تخلفات',
    icon: AlertTriangle,
    href: '/trade-conflict',
    color: 'bg-red-500'
  },
  {
    title: 'اشیاء مسروقه',
    description: 'گزارش و پیگیری سرقت',
    icon: AlertOctagon,
    href: '/stolen-items',
    color: 'bg-rose-500'
  },
  {
    title: 'شکایات مردمی',
    description: 'رسیدگی به شکایات',
    icon: FileQuestion,
    href: '/complaints',
    color: 'bg-violet-500'
  }
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative isolate overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-8 md:py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              اتحادیه صنف فناوران رایانه کرمان
            </motion.h1>
            <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              پیشرو در ارائه خدمات نوین و هوشمند به اعضای صنف و شهروندان
            </motion.p>
          </div>
          
          {/* Hero Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <HeroSlider />
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">داشبورد آماری</h2>
            <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-primary/10 p-6 min-w-[260px] md:min-w-0 flex-shrink-0"
              >
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">تعداد اعضا</p>
                    <h3 className="text-2xl font-bold">{statistics.totalMembers.toLocaleString('fa-IR')}</h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="mr-1 text-green-500">{statistics.growth}٪</span>
                  <span className="mr-2 text-muted-foreground">رشد نسبت به ماه قبل</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-green-500/10 p-6 min-w-[260px] md:min-w-0 flex-shrink-0"
              >
                <div className="flex items-center gap-4">
                  <FileCheck className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">پروانه‌های فعال</p>
                    <h3 className="text-2xl font-bold">{statistics.activePermits.toLocaleString('fa-IR')}</h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-muted-foreground">
                    {((statistics.activePermits / statistics.totalMembers) * 100).toFixed(1)}٪ از کل اعضا
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl bg-yellow-500/10 p-6 min-w-[260px] md:min-w-0 flex-shrink-0"
              >
                <div className="flex items-center gap-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">شکایات فعال</p>
                    <h3 className="text-2xl font-bold">{statistics.complaints.toLocaleString('fa-IR')}</h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-muted-foreground">
                    میانگین زمان رسیدگی: ۴۸ ساعت
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="rounded-xl bg-purple-500/10 p-6 min-w-[260px] md:min-w-0 flex-shrink-0"
              >
                <div className="flex items-center gap-4">
                  <BarChart3 className="h-6 w-6 text-purple-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">رضایت اعضا</p>
                    <h3 className="text-2xl font-bold">{statistics.satisfaction}٪</h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-muted-foreground">
                    بر اساس نظرسنجی ماهانه
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">خدمات اتحادیه</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`inline-flex rounded-lg ${service.color} p-3`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary">
                    <span className="text-sm">مشاهده</span>
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <NewsSection limit={3} showViewAll={true} />
        </div>
      </section>
    </div>
  );
}