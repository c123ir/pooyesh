import { motion } from 'framer-motion';
import { Monitor, Printer, Book, Coffee, FileText, Pencil, BookCopy, CreditCard, Users, Star, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../../data/mock/services';

export function Services() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative isolate overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          >
            خدمات تخصصی اتحادیه
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            ارائه خدمات تخصصی و استاندارد در تمامی رسته‌های صنفی با نظارت مستمر و تضمین کیفیت
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card"
              >
                {/* Card Header */}
                <div className={`p-6 ${service.color} bg-opacity-10 dark:bg-opacity-20`}>
                  <div className="flex items-center justify-between">
                    <div className={`rounded-xl ${service.color} p-3`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold">{service.stats.satisfaction}٪</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </div>

                {/* Features */}
                <div className="p-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-4">ویژگی‌ها و خدمات</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                {service.pricing && (
                  <div className="p-6 border-t border-border">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-4">تعرفه خدمات</h4>
                    <div className="space-y-3">
                      {service.pricing.map((price, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span>{price.title}</span>
                          <div className="flex items-center gap-1">
                            <span className="font-bold">{price.price}</span>
                            <span className="text-xs text-muted-foreground">تومان</span>
                            {price.period && (
                              <span className="text-xs text-muted-foreground">/ {price.period}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="p-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">تعداد ارائه‌دهندگان</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="font-bold">{service.stats.providers.toLocaleString('fa-IR')}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">مشتریان</p>
                      <div className="mt-1 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-bold">{service.stats.customers.toLocaleString('fa-IR')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 border-t border-border">
                  <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    <span>مشاهده جزئیات</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">شرایط ارائه خدمات</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              برای تضمین کیفیت خدمات، تمامی ارائه‌دهندگان باید شرایط زیر را دارا باشند
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services[0].requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-xl bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{req}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-primary p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                همین حالا درخواست خود را ثبت کنید
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl">
                کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت و در تمام مراحل همراه شما هستند.
              </p>
              <button className="rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-sm hover:bg-white/90">
                درخواست خدمات
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-purple-600 opacity-50" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] opacity-10" />
          </div>
        </div>
      </section>
    </div>
  );
}