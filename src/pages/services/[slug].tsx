import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  Calendar,
  FileCheck,
  AlertTriangle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { services } from '../../data/mock/services';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">خدمت مورد نظر یافت نشد</h1>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowRight className="h-4 w-4" />
            <span>بازگشت</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative isolate overflow-hidden ${service.color} bg-opacity-10 dark:bg-opacity-20`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="flex items-center gap-6">
            <div className={`rounded-2xl ${service.color} p-4`}>
              <service.icon className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-card p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">ارائه‌دهندگان فعال</p>
                  <p className="text-2xl font-bold">{service.stats.providers.toLocaleString('fa-IR')}</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-card p-6">
              <div className="flex items-center gap-4">
                <Star className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-sm text-muted-foreground">رضایت مشتریان</p>
                  <p className="text-2xl font-bold">{service.stats.satisfaction}٪</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-card p-6">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">مشتریان</p>
                  <p className="text-2xl font-bold">{service.stats.customers.toLocaleString('fa-IR')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-card p-6"
            >
              <h2 className="text-2xl font-bold mb-6">ویژگی‌ها و خدمات</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl bg-card p-6"
            >
              <h2 className="text-2xl font-bold mb-6">شرایط ارائه خدمات</h2>
              <div className="grid gap-4">
                {service.requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                    </div>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing */}
            {service.pricing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-card p-6"
              >
                <h2 className="text-2xl font-bold mb-6">تعرفه خدمات</h2>
                <div className="grid gap-4">
                  {service.pricing.map((price, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <span>{price.title}</span>
                      </div>
                      <div className="text-left">
                        <span className="font-bold text-lg">{price.price}</span>
                        <span className="text-sm text-muted-foreground mr-1">تومان</span>
                        {price.period && (
                          <span className="text-sm text-muted-foreground">/ {price.period}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl bg-card p-6"
            >
              <h3 className="text-lg font-semibold mb-4">دسترسی سریع</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-white">
                  <Phone className="h-5 w-5" />
                  <span>درخواست مشاوره</span>
                </button>
                <button className="w-full flex items-center gap-3 rounded-lg border border-input px-4 py-3 hover:bg-accent">
                  <MapPin className="h-5 w-5" />
                  <span>نزدیک‌ترین مراکز</span>
                </button>
                <button className="w-full flex items-center gap-3 rounded-lg border border-input px-4 py-3 hover:bg-accent">
                  <Calendar className="h-5 w-5" />
                  <span>رزرو آنلاین</span>
                </button>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl bg-card p-6"
            >
              <h3 className="text-lg font-semibold mb-4">پشتیبانی</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">تماس مستقیم</p>
                    <p className="font-medium">۰۳۴-۳۲۵۲۶۷۰۰</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">ایمیل پشتیبانی</p>
                    <p className="font-medium">support@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">گفتگوی آنلاین</p>
                    <p className="font-medium">۲۴/۷ در دسترس</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl bg-yellow-50 dark:bg-yellow-900/20 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400">نکات مهم</h3>
              </div>
              <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
                <li>• تمامی خدمات دارای ضمانت کیفیت هستند</li>
                <li>• قیمت‌ها مطابق تعرفه مصوب اتحادیه است</li>
                <li>• حتماً از مراکز دارای مجوز خدمات دریافت کنید</li>
                <li>• در صورت مشاهده تخلف، سریعاً گزارش دهید</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}