import { DivideIcon as LucideIcon, Monitor, Printer, Book, Coffee, FileText, Pencil, BookCopy, CreditCard } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  slug: string;
  features: string[];
  requirements: string[];
  pricing?: {
    title: string;
    price: string;
    period?: string;
  }[];
  stats: {
    providers: number;
    customers: number;
    satisfaction: number;
  };
}

export const services: Service[] = [
  {
    title: 'خدمات رایانه',
    description: 'تعمیر و نگهداری انواع سیستم‌های رایانه‌ای',
    icon: Monitor,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    slug: 'computer',
    features: [
      'تعمیر تخصصی انواع کامپیوتر و لپ‌تاپ',
      'نصب و راه‌اندازی سیستم‌عامل و نرم‌افزارها',
      'ارتقاء سخت‌افزاری سیستم‌ها',
      'خدمات پشتیبانی شبکه',
      'بازیابی اطلاعات',
      'نصب آنتی‌ویروس و امنیت سیستم'
    ],
    requirements: [
      'مجوز فعالیت از اتحادیه',
      'حداقل ۲ سال سابقه کار',
      'گذراندن دوره‌های تخصصی',
      'داشتن مکان ثابت کسب'
    ],
    pricing: [
      {
        title: 'عیب‌یابی اولیه',
        price: '۱۵۰,۰۰۰',
        period: 'هر مورد'
      },
      {
        title: 'تعمیرات سخت‌افزاری',
        price: '۵۰۰,۰۰۰',
        period: 'شروع از'
      },
      {
        title: 'نصب نرم‌افزار',
        price: '۳۰۰,۰۰۰',
        period: 'هر سیستم'
      }
    ],
    stats: {
      providers: 450,
      customers: 12000,
      satisfaction: 92
    }
  },
  {
    title: 'ماشین‌های اداری',
    description: 'فروش و خدمات پس از فروش تجهیزات اداری',
    icon: Printer,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-violet-500',
    slug: 'office',
    features: [
      'فروش انواع پرینتر و اسکنر',
      'تعمیر دستگاه‌های کپی',
      'شارژ و تعویض کارتریج',
      'نصب و راه‌اندازی تجهیزات',
      'خدمات گارانتی و وارانتی',
      'فروش قطعات یدکی اصلی'
    ],
    requirements: [
      'مجوز نمایندگی از شرکت‌های معتبر',
      'داشتن تکنسین متخصص',
      'تجهیزات عیب‌یابی پیشرفته',
      'انبار قطعات یدکی'
    ],
    pricing: [
      {
        title: 'سرویس دوره‌ای',
        price: '۴۰۰,۰۰۰',
        period: 'هر دستگاه'
      },
      {
        title: 'تعمیرات تخصصی',
        price: '۸۰۰,۰۰۰',
        period: 'شروع از'
      }
    ],
    stats: {
      providers: 320,
      customers: 8500,
      satisfaction: 88
    }
  },
  {
    title: 'کتابفروشی',
    description: 'عرضه کتب تخصصی و عمومی',
    icon: Book,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-500',
    slug: 'books',
    features: [
      'فروش کتب دانشگاهی',
      'کتاب‌های کمک درسی',
      'مجلات تخصصی',
      'کتب زبان اصلی',
      'سفارش کتاب',
      'تخفیف‌های دانشجویی'
    ],
    requirements: [
      'مجوز از وزارت ارشاد',
      'فضای مناسب کتابفروشی',
      'سیستم مدیریت موجودی',
      'همکاری با ناشران معتبر'
    ],
    stats: {
      providers: 280,
      customers: 15000,
      satisfaction: 90
    }
  },
  {
    title: 'کافی‌نت',
    description: 'ارائه خدمات اینترنتی و پرینت',
    icon: Coffee,
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-amber-500',
    slug: 'cafenet',
    features: [
      'اینترنت پرسرعت',
      'پرینت و اسکن',
      'خدمات آنلاین دولتی',
      'بازی‌های آنلاین',
      'رایت CD و DVD',
      'خدمات ترجمه آنلاین'
    ],
    requirements: [
      'مجوز فعالیت از اتحادیه',
      'تجهیزات استاندارد',
      'اینترنت پرسرعت اختصاصی',
      'فضای مناسب و تهویه'
    ],
    pricing: [
      {
        title: 'استفاده از سیستم',
        price: '۱۵,۰۰۰',
        period: 'هر ساعت'
      },
      {
        title: 'پرینت رنگی',
        price: '۳,۰۰۰',
        period: 'هر برگ'
      }
    ],
    stats: {
      providers: 180,
      customers: 25000,
      satisfaction: 85
    }
  },
  {
    title: 'تایپ و تکثیر',
    description: 'خدمات تایپ و تکثیر اسناد',
    icon: FileText,
    color: 'bg-red-500',
    gradient: 'from-red-500 to-rose-500',
    slug: 'typing',
    features: [
      'تایپ فارسی و لاتین',
      'تایپ پایان‌نامه',
      'تکثیر رنگی و سیاه‌سفید',
      'صحافی اسناد',
      'اسکن و ویرایش تصاویر',
      'طراحی و چاپ پوستر'
    ],
    requirements: [
      'تسلط به نرم‌افزارهای تایپ',
      'دستگاه‌های چاپ حرفه‌ای',
      'آشنایی با فرمت‌های مختلف',
      'سرعت تایپ بالا'
    ],
    pricing: [
      {
        title: 'تایپ فارسی',
        price: '۱۵,۰۰۰',
        period: 'هر صفحه'
      },
      {
        title: 'تایپ لاتین',
        price: '۲۰,۰۰۰',
        period: 'هر صفحه'
      }
    ],
    stats: {
      providers: 220,
      customers: 18000,
      satisfaction: 89
    }
  },
  {
    title: 'نوشت‌افزار',
    description: 'فروش لوازم التحریر و ملزومات اداری',
    icon: Pencil,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
    slug: 'stationery',
    features: [
      'لوازم التحریر مدارس',
      'ملزومات اداری',
      'محصولات مهندسی',
      'کتب کمک آموزشی',
      'هدایای تبلیغاتی',
      'سفارش عمده'
    ],
    requirements: [
      'همکاری با تامین‌کنندگان معتبر',
      'تنوع محصولات',
      'قیمت‌گذاری منصفانه',
      'خدمات پس از فروش'
    ],
    stats: {
      providers: 350,
      customers: 30000,
      satisfaction: 91
    }
  },
  {
    title: 'صحافی',
    description: 'خدمات صحافی و چاپ دیجیتال',
    icon: BookCopy,
    color: 'bg-teal-500',
    gradient: 'from-teal-500 to-cyan-500',
    slug: 'binding',
    features: [
      'صحافی پایان‌نامه',
      'چاپ دیجیتال',
      'طلاکوب و چاپ جلد',
      'صحافی نشریات',
      'ساخت آلبوم',
      'لمینت اسناد'
    ],
    requirements: [
      'تجهیزات صحافی حرفه‌ای',
      'تجربه کافی',
      'رعایت استانداردها',
      'کیفیت مواد مصرفی'
    ],
    pricing: [
      {
        title: 'صحافی پایان‌نامه',
        price: '۱۵۰,۰۰۰',
        period: 'هر جلد'
      },
      {
        title: 'چاپ دیجیتال',
        price: '۲,۰۰۰',
        period: 'هر برگ'
      }
    ],
    stats: {
      providers: 150,
      customers: 10000,
      satisfaction: 87
    }
  },
  {
    title: 'کارتخوان',
    description: 'فروش و پشتیبانی دستگاه‌های کارتخوان',
    icon: CreditCard,
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-blue-500',
    slug: 'pos',
    features: [
      'فروش انواع کارتخوان',
      'نصب و راه‌اندازی',
      'پشتیبانی ۲۴/۷',
      'تعمیرات تخصصی',
      'آموزش کاربری',
      'خدمات پس از فروش'
    ],
    requirements: [
      'مجوز از شاپرک',
      'توانایی پشتیبانی فنی',
      'داشتن نمایندگی رسمی',
      'سابقه کار مرتبط'
    ],
    stats: {
      providers: 120,
      customers: 5000,
      satisfaction: 86
    }
  }
];