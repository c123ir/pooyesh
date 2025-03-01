import { motion } from 'framer-motion';
import { AlertTriangle, MessageSquare, Clock, FileText, Calendar, ArrowRight } from 'lucide-react';

export function Complaints() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 px-4 py-2 rounded-full mb-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">سامانه رسیدگی به شکایات مردمی</span>
        </div>
        <h1 className="text-4xl font-bold mt-4">ثبت و پیگیری شکایات</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          رسیدگی به شکایات مردمی از واحدهای صنفی با هدف بهبود کیفیت خدمات
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Submit Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl p-6 shadow-lg mb-12"
        >
          <h2 className="text-xl font-bold mb-6">ثبت شکایت جدید</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">موضوع شکایت</label>
              <select className="w-full rounded-lg px-3 py-2">
                <option value="">انتخاب کنید</option>
                <option value="quality">کیفیت خدمات</option>
                <option value="price">قیمت‌گذاری</option>
                <option value="behavior">رفتار نامناسب</option>
                <option value="warranty">خدمات گارانتی</option>
                <option value="other">سایر موارد</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">مشخصات واحد صنفی</label>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="نام واحد صنفی"
                  className="rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="آدرس"
                  className="rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">شرح شکایت</label>
              <textarea
                rows={4}
                className="w-full rounded-lg px-3 py-2"
                placeholder="لطفاً جزئیات شکایت خود را شرح دهید..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">اطلاعات تماس</label>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="rounded-lg px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="شماره تماس"
                  className="rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <button className="w-full bg-primary text-white rounded-lg py-3 hover:bg-primary/90">
              ثبت شکایت
            </button>
          </div>
        </motion.div>

        {/* Recent Complaints */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">شکایات اخیر شما</h2>
          <div className="space-y-4">
            {[
              {
                subject: 'کیفیت خدمات',
                business: 'فروشگاه کامپیوتر مرکزی',
                date: '۱۵ اسفند ۱۴۰۳',
                status: 'در حال بررسی'
              },
              {
                subject: 'قیمت‌گذاری',
                business: 'خدمات کامپیوتری نوین',
                date: '۱۰ اسفند ۱۴۰۳',
                status: 'رسیدگی شده'
              }
            ].map((complaint, index) => (
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
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{complaint.subject}</h4>
                      <p className="text-sm text-muted-foreground">
                        {complaint.business}
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    complaint.status === 'رسیدگی شده'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                  }`}>
                    {complaint.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{complaint.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>زمان رسیدگی: ۴۸ ساعت</span>
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
          <h4 className="font-medium mb-2">راهنمای ثبت شکایت</h4>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>اطلاعات دقیق واحد صنفی را وارد کنید</li>
            <li>شکایت خود را با جزئیات کامل شرح دهید</li>
            <li>مستندات و مدارک مرتبط را ضمیمه کنید</li>
            <li>شماره تماس معتبر وارد کنید</li>
            <li>به شکایات در اسرع وقت رسیدگی خواهد شد</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}