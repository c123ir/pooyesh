import { motion } from 'framer-motion';
import { HelpCircle, Users, Star, Calendar, Clock, MessageSquare, ArrowRight, Phone, Mail, Video } from 'lucide-react';

export function Consulting() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          مشاوره تخصصی صنفی
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          دریافت مشاوره تخصصی از کارشناسان خبره در حوزه‌های مختلف صنفی
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Service Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            {
              title: 'مشاوره حقوقی',
              description: 'راهنمایی در مسائل حقوقی کسب و کار',
              icon: HelpCircle,
              color: 'bg-blue-500'
            },
            {
              title: 'مشاوره مالی و مالیاتی',
              description: 'مشاوره در امور مالی و مالیاتی',
              icon: HelpCircle,
              color: 'bg-green-500'
            },
            {
              title: 'مشاوره فنی و تخصصی',
              description: 'راهنمایی در مسائل فنی و تخصصی',
              icon: HelpCircle,
              color: 'bg-purple-500'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex rounded-lg ${service.color} p-3 mb-4`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <button className="flex items-center gap-2 text-primary hover:underline">
                <span>درخواست مشاوره</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Consultants */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">مشاوران برتر</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-xl bg-card overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1550000000000 + index}`}
                    alt="تصویر مشاور"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">مشاور {index + 1}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">۴.۸</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>۱۲۵ مشاوره موفق</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>۵ سال سابقه</span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
                    <span>رزرو مشاوره</span>
                    <Calendar className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Consultation Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">روش‌های مشاوره</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'مشاوره تلفنی',
                description: 'گفتگوی تلفنی با مشاور',
                icon: Phone,
                color: 'bg-blue-500'
              },
              {
                title: 'مشاوره آنلاین',
                description: 'گفتگوی تصویری آنلاین',
                icon: Video,
                color: 'bg-green-500'
              },
              {
                title: 'مشاوره متنی',
                description: 'گفتگو از طریق پیام',
                icon: MessageSquare,
                color: 'bg-purple-500'
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="rounded-xl bg-card p-6"
              >
                <div className={`inline-flex rounded-lg ${method.color} p-3 mb-4`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-12">
          <div className="rounded-xl bg-card p-6">
            <h2 className="text-xl font-bold mb-6">تماس با واحد مشاوره</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">شماره تماس</p>
                  <p className="font-medium">۰۳۴-۳۲۵۲۶۷۰۰</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ایمیل</p>
                  <p className="font-medium">consulting@example.com</p>
                </div>
              </div>
            </div>
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
              همین حالا مشاوره رایگان دریافت کنید
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">
              کارشناسان ما آماده پاسخگویی به سوالات شما هستند. اولین جلسه مشاوره رایگان است.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
              درخواست مشاوره رایگان
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] opacity-10" />
        </motion.div>
      </div>
    </div>
  );
}