import { Heart, Users, Briefcase, Wallet, Gift, Building2, Plane, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'بیمه تکمیلی',
    description: 'پوشش کامل خدمات درمانی برای شما و خانواده',
    icon: Heart,
    color: 'bg-red-500 dark:bg-red-600',
    gradient: 'from-red-500 to-pink-500',
    link: '#'
  },
  {
    title: 'وام‌های کم‌بهره',
    description: 'تسهیلات ویژه برای توسعه کسب و کار',
    icon: Wallet,
    color: 'bg-green-500 dark:bg-green-600',
    gradient: 'from-green-500 to-emerald-500',
    link: '#'
  },
  {
    title: 'تورهای تفریحی',
    description: 'گشت و گذار خانوادگی با تخفیف ویژه',
    icon: Plane,
    color: 'bg-blue-500 dark:bg-blue-600',
    gradient: 'from-blue-500 to-cyan-500',
    link: '#'
  },
  {
    title: 'آموزش رایگان',
    description: 'دوره‌های تخصصی برای ارتقای مهارت',
    icon: GraduationCap,
    color: 'bg-purple-500 dark:bg-purple-600',
    gradient: 'from-purple-500 to-violet-500',
    link: '#'
  },
  {
    title: 'باشگاه ورزشی',
    description: 'امکانات ورزشی با تخفیف برای اعضا',
    icon: Users,
    color: 'bg-orange-500 dark:bg-orange-600',
    gradient: 'from-orange-500 to-yellow-500',
    link: '#'
  },
  {
    title: 'مشاوره حقوقی',
    description: 'راهنمایی در مسائل حقوقی کسب و کار',
    icon: Briefcase,
    color: 'bg-indigo-500 dark:bg-indigo-600',
    gradient: 'from-indigo-500 to-blue-500',
    link: '#'
  },
  {
    title: 'هدایای مناسبتی',
    description: 'جوایز و هدایای ویژه در مناسبت‌ها',
    icon: Gift,
    color: 'bg-pink-500 dark:bg-pink-600',
    gradient: 'from-pink-500 to-rose-500',
    link: '#'
  },
  {
    title: 'اقامتگاه‌های تفریحی',
    description: 'رزرو ویلا و هتل با تخفیف ویژه',
    icon: Building2,
    color: 'bg-teal-500 dark:bg-teal-600',
    gradient: 'from-teal-500 to-green-500',
    link: '#'
  }
];

export function WelfareServices() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          خدمات رفاهی اتحادیه
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          اتحادیه در کنار شماست؛ از رشد کسب‌وکار تا رفاه خانواده
        </p>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg inline-block">
          <p className="text-lg font-semibold text-primary">
            "ما به رفاه و پیشرفت اعضای خود متعهدیم؛ موفقیت شما، افتخار ماست"
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-xl bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className={cn(
              "absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20",
              `bg-gradient-to-br ${service.gradient}`
            )} />
            <div className="relative p-6">
              <div className={cn(
                "inline-flex rounded-lg p-3 ring-4 ring-opacity-20",
                service.color,
                `ring-${service.color}`
              )}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
              <button className={cn(
                "mt-4 inline-flex items-center text-sm font-medium",
                "text-primary hover:underline"
              )}>
                اطلاعات بیشتر
                <svg
                  className="mr-2 h-4 w-4 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          درخواست خدمات رفاهی
        </button>
      </div>
    </section>
  );
}