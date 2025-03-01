import { AlertTriangle, MapPin, Store, Calendar, Camera, FileText, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function TradeConflict() {
  const [step, setStep] = useState(1);

  const steps = [
    { title: 'اطلاعات اولیه', icon: Store },
    { title: 'موقعیت مکانی', icon: MapPin },
    { title: 'مستندات', icon: Camera },
    { title: 'بررسی نهایی', icon: FileText }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-4">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">گزارش تداخل صنفی</span>
        </div>
        <h2 className="text-3xl font-bold mt-4">ثبت گزارش تداخل صنفی</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          برای حفظ حقوق صنفی و جلوگیری از تداخل، موارد مشاهده شده را گزارش دهید
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  step > i ? "bg-green-500 text-white" :
                  step === i + 1 ? "bg-blue-500 text-white" :
                  "bg-gray-200 dark:bg-gray-800 text-gray-500"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
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
        <div className="bg-card rounded-xl p-6 shadow-lg">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">نوع تداخل صنفی</label>
                <select className="w-full rounded-lg border-input bg-background px-3 py-2">
                  <option>فروش کالای خارج از پروانه کسب</option>
                  <option>ارائه خدمات غیرمجاز</option>
                  <option>تداخل با رسته صنفی دیگر</option>
                  <option>سایر موارد</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">نام واحد صنفی متخلف</label>
                <input type="text" className="w-full rounded-lg border-input bg-background px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">توضیحات تداخل</label>
                <textarea rows={4} className="w-full rounded-lg border-input bg-background px-3 py-2" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">آدرس دقیق</label>
                <input type="text" className="w-full rounded-lg border-input bg-background px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">منطقه شهرداری</label>
                <input type="number" className="w-full rounded-lg border-input bg-background px-3 py-2" />
              </div>
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <MapPin className="w-8 h-8 text-muted-foreground" />
                <span className="mr-2 text-muted-foreground">نقشه در این قسمت نمایش داده می‌شود</span>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  تصاویر مربوط به تداخل صنفی را اینجا بارگذاری کنید
                </p>
                <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm">
                  انتخاب تصاویر
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">توضیحات تصاویر</label>
                <textarea rows={3} className="w-full rounded-lg border-input bg-background px-3 py-2" />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">اطلاعات گزارش شما</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-muted-foreground" />
                    <span>نام واحد صنفی: فروشگاه نمونه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>آدرس: خیابان نمونه، پلاک ۱۲۳</span>
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
              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" id="confirm" />
                <label htmlFor="confirm">
                  صحت اطلاعات وارد شده را تأیید می‌کنم
                </label>
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
              onClick={() => step < 4 ? setStep(step + 1) : console.log('submit')}
              className="mr-auto flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90"
            >
              {step === 4 ? (
                <>
                  <span>ثبت گزارش</span>
                  <Send className="w-4 h-4" />
                </>
              ) : (
                <span>مرحله بعد</span>
              )}
            </button>
          </div>
        </div>

        {/* Help Box */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-200 rounded-lg p-4">
          <h4 className="font-medium mb-2">راهنمای ثبت گزارش</h4>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>اطلاعات دقیق واحد صنفی متخلف را وارد کنید</li>
            <li>حتماً آدرس دقیق و قابل پیگیری ثبت نمایید</li>
            <li>تصاویر مستند از تخلف را بارگذاری کنید</li>
            <li>از صحت اطلاعات وارد شده اطمینان حاصل کنید</li>
          </ul>
        </div>
      </div>
    </section>
  );
}