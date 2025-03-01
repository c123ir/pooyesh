import { motion } from 'framer-motion';
import { AlertTriangle, Search, Camera, MapPin, Calendar, Clock, ArrowRight, FileText } from 'lucide-react';

export function StolenItems() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 px-4 py-2 rounded-full mb-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">سامانه گزارش اشیاء مسروقه</span>
        </div>
        <h1 className="text-4xl font-bold mt-4">ثبت و پیگیری اشیاء مسروقه</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          برای جلوگیری از خرید و فروش اموال مسروقه و کمک به یافتن آن‌ها
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="جستجو در اشیاء مسروقه (شماره سریال، مدل و...)"
                className="w-full pl-4 pr-10 py-2 rounded-lg"
              />
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
              جستجو
            </button>
          </div>
        </motion.div>

        {/* Report Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl p-6 shadow-lg mb-12"
        >
          <h2 className="text-xl font-bold mb-6">ثبت گزارش جدید</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">نوع دستگاه</label>
              <select className="w-full rounded-lg px-3 py-2">
                <option value="">انتخاب کنید</option>
                <option value="laptop">لپ‌تاپ</option>
                <option value="printer">پرینتر</option>
                <option value="pos">دستگاه کارتخوان</option>
                <option value="monitor">مانیتور</option>
                <option value="other">سایر</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">مشخصات دستگاه</label>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="برند و مدل"
                  className="rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="شماره سریال"
                  className="rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">محل و زمان سرقت</label>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="آدرس محل سرقت"
                  className="rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="تاریخ سرقت"
                  className="rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">توضیحات تکمیلی</label>
              <textarea
                rows={4}
                className="w-full rounded-lg px-3 py-2"
                placeholder="هرگونه مشخصه خاص یا توضیح اضافی..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">تصاویر دستگاه</label>
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  تصاویر دستگاه را اینجا بارگذاری کنید
                </p>
                <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm">
                  انتخاب تصاویر
                </button>
              </div>
            </div>

            <button className="w-full bg-primary text-white rounded-lg py-3 hover:bg-primary/90">
              ثبت گزارش
            </button>
          </div>
        </motion.div>

        {/* Recent Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">گزارش‌های اخیر</h2>
          <div className="space-y-4">
            {[
              {
                type: 'لپ‌تاپ',
                brand: 'Lenovo ThinkPad',
                serial: 'LP123456',
                location: 'خیابان شریعتی، کرمان',
                date: '۱۵ اسفند ۱۴۰۳',
                status: 'در حال بررسی'
              },
              {
                type: 'پرینتر',
                brand: 'HP LaserJet',
                serial: 'PR789012',
                location: 'خیابان امام، کرمان',
                date: '۱۲ اسفند ۱۴۰۳',
                status: 'یافت شده'
              }
            ].map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-lg bg-card p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{report.type} {report.brand}</h4>
                      <p className="text-sm text-muted-foreground">
                        شماره سریال: {report.serial}
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    report.status === 'یافت شده'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{report.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{report.date}</span>
                  </div>
                </div>
                <button className="mt-4 text-sm text-primary hover:underline flex items-center gap-1">
                  جزئیات بیشتر
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Help Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-200 rounded-lg p-4"
        >
          <h4 className="font-medium mb-2">راهنمای ثبت گزارش</h4>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>شماره سریال و مشخصات دقیق دستگاه را وارد کنید</li>
            <li>در صورت امکان، تصاویر دستگاه را بارگذاری کنید</li>
            <li>محل و زمان دقیق سرقت را ذکر کنید</li>
            <li>گزارش شما به صورت محرمانه بررسی خواهد شد</li>
            <li>در صورت مشاهده دستگاه مسروقه، سریعاً اطلاع دهید</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}