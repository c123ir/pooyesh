import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Store, Calendar, Camera, FileText, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { conflictTypes, districts } from '../../data/mock/trade-conflicts';

const steps = [
  { title: 'نوع تخلف', icon: AlertTriangle },
  { title: 'اطلاعات واحد صنفی', icon: Store },
  { title: 'موقعیت مکانی', icon: MapPin },
  { title: 'مستندات', icon: Camera },
  { title: 'بررسی نهایی', icon: FileText }
];

export function TradeConflict() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">سامانه گزارش تخلفات صنفی کرمان</span>
        </div>
        <h2 className="text-3xl font-bold mt-4">ثبت گزارش تخلف صنفی</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          برای حفظ حقوق صنفی و جلوگیری از تخلف، موارد مشاهده شده را به اتحادیه صنف خدمات رایانه کرمان گزارش دهید
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    step > i ? "bg-green-500 text-white" :
                    step === i + 1 ? "bg-blue-500 text-white" :
                    "bg-gray-200 dark:bg-gray-800 text-gray-500"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div className="mt-2 text-sm font-medium">{s.title}</div>
                {i < steps.length - 1 && (
                  <div className={cn(
                    "w-24 h-0.5 mt-5",
                    step > i ? "bg-green-500" : "bg-gray-200 dark:bg-gray-800"
                  )} />
                )}
              </div>
            );
          })}
        </div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl p-6 shadow-lg"
        >
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">نوع تخلف صنفی</label>
                <select 
                  className="w-full rounded-lg px-3 py-2"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">انتخاب کنید</option>
                  {conflictTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.title}</option>
                  ))}
                </select>
              </div>

              {selectedType && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-muted/50 rounded-lg p-4"
                >
                  <h4 className="font-medium mb-2">نمونه موارد تخلف</h4>
                  <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                    {conflictTypes.find(t => t.id === selectedType)?.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">توضیحات تخلف</label>
                <textarea 
                  rows={4} 
                  className="w-full rounded-lg px-3 py-2"
                  placeholder="لطفاً جزئیات تخلف مشاهده شده را شرح دهید..."
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">نام واحد صنفی متخلف</label>
                <input type="text" className="w-full rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">شماره پروانه کسب (در صورت اطلاع)</label>
                <input type="text" className="w-full rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">نام مالک یا مدیر (در صورت اطلاع)</label>
                <input type="text" className="w-full rounded-lg px-3 py-2" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">آدرس دقیق</label>
                <input type="text" className="w-full rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">منطقه شهرداری</label>
                <select className="w-full rounded-lg px-3 py-2">
                  <option value="">انتخاب کنید</option>
                  {districts.map(district => (
                    <option key={district.id} value={district.id}>{district.name}</option>
                  ))}
                </select>
              </div>
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <MapPin className="w-8 h-8 text-muted-foreground" />
                <span className="mr-2 text-muted-foreground">نقشه در این قسمت نمایش داده می‌شود</span>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  تصاویر مربوط به تخلف را اینجا بارگذاری کنید
                </p>
                <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm">
                  انتخاب تصاویر
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">توضیحات تصاویر</label>
                <textarea rows={3} className="w-full rounded-lg px-3 py-2" />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-4">خلاصه گزارش</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span>نوع تخلف: زیر فروشی و نقض نرخنامه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-muted-foreground" />
                    <span>نام واحد صنفی: فروشگاه نمونه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>آدرس: کرمان، خیابان شریعتی، پلاک ۱۲۳</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>تاریخ ثبت: ۱۴۰۳/۱۲/۱۵</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>وضعیت: در انتظار بررسی</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">تعهدنامه</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  اینجانب صحت اطلاعات وارد شده را تأیید نموده و مسئولیت هرگونه اطلاعات خلاف واقع را می‌پذیرم.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <input type="checkbox" id="confirm" className="rounded text-primary focus:ring-primary" />
                  <label htmlFor="confirm" className="text-sm">
                    شرایط فوق را مطالعه کرده و می‌پذیرم
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm border rounded-lg hover:bg-accent"
              >
                مرحله قبل
              </button>
            )}
            <button
              onClick={() => step < 5 ? setStep(step + 1) : console.log('submit')}
              className="mr-auto flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90"
            >
              {step === 5 ? (
                <>
                  <span>ثبت گزارش</span>
                  <Send className="w-4 h-4" />
                </>
              ) : (
                <span>مرحله بعد</span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Help Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-200 rounded-lg p-4"
        >
          <h4 className="font-medium mb-2">راهنمای ثبت گزارش</h4>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>اطلاعات دقیق واحد صنفی متخلف را وارد کنید</li>
            <li>آدرس دقیق و قابل پیگیری در شهر کرمان ثبت نمایید</li>
            <li>در صورت امکان، تصاویر مستند از تخلف را بارگذاری کنید</li>
            <li>از صحت اطلاعات وارد شده اطمینان حاصل کنید</li>
            <li>گزارش شما به صورت محرمانه بررسی خواهد شد</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}