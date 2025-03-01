import { motion } from 'framer-motion';
import { Users, FileText, Calendar, MessageSquare, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export function Commissions() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          کمیسیون‌ها و کارگروه‌های اتحادیه
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          گروه‌های تخصصی برای بررسی و تصمیم‌گیری در حوزه‌های مختلف صنفی
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Active Commissions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            {
              title: 'کمیسیون نظارت و بازرسی',
              description: 'نظارت بر عملکرد واحدهای صنفی و رسیدگی به شکایات',
              members: 12,
              meetings: 24,
              nextMeeting: '۱۵ اسفند ۱۴۰۳'
            },
            {
              title: 'کمیسیون آموزش',
              description: 'برنامه‌ریزی و اجرای دوره‌های آموزشی تخصصی',
              members: 8,
              meetings: 18,
              nextMeeting: '۱۸ اسفند ۱۴۰۳'
            },
            {
              title: 'کمیسیون حل اختلاف',
              description: 'رسیدگی به اختلافات صنفی و ارائه راهکار',
              members: 10,
              meetings: 36,
              nextMeeting: '۲۰ اسفند ۱۴۰۳'
            }
          ].map((commission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{commission.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{commission.description}</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">تعداد اعضا</span>
                  <span className="font-medium">{commission.members} نفر</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">جلسات برگزار شده</span>
                  <span className="font-medium">{commission.meetings} جلسه</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">جلسه بعدی</span>
                  <span className="font-medium">{commission.nextMeeting}</span>
                </div>
              </div>
              <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-primary/10 hover:bg-primary/20 px-4 py-2 text-primary transition-colors">
                مشاهده جزئیات
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Recent Decisions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">آخرین مصوبات</h2>
          <div className="space-y-4">
            {[
              {
                title: 'تصویب تعرفه‌های جدید خدمات',
                commission: 'کمیسیون نظارت',
                date: '۱۰ اسفند ۱۴۰۳',
                status: 'approved'
              },
              {
                title: 'برگزاری دوره‌های آموزشی تابستان',
                commission: 'کمیسیون آموزش',
                date: '۸ اسفند ۱۴۰۳',
                status: 'pending'
              },
              {
                title: 'اصلاح آیین‌نامه داخلی اتحادیه',
                commission: 'کمیسیون حل اختلاف',
                date: '۵ اسفند ۱۴۰۳',
                status: 'approved'
              }
            ].map((decision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-lg bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg p-2 ${
                      decision.status === 'approved' 
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {decision.status === 'approved' ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{decision.title}</h4>
                      <p className="text-sm text-muted-foreground">{decision.commission}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {decision.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Working Groups */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">کارگروه‌های تخصصی</h2>
            <button className="flex items-center gap-2 text-primary hover:underline">
              <span>مشاهده همه</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'کارگروه فناوری',
                icon: FileText,
                count: 8,
                status: 'active'
              },
              {
                title: 'کارگروه آموزش مجازی',
                icon: Calendar,
                count: 6,
                status: 'active'
              },
              {
                title: 'کارگروه روابط عمومی',
                icon: MessageSquare,
                count: 5,
                status: 'active'
              }
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="rounded-xl bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <group.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{group.count} عضو فعال</span>
                  <span className="text-green-500">در حال فعالیت</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-2xl bg-primary p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              مشارکت در کمیسیون‌ها
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              با عضویت در کمیسیون‌ها و کارگروه‌های تخصصی، در تصمیم‌گیری‌های مهم صنفی مشارکت کنید.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              درخواست عضویت
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}