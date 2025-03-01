import { AlertTriangle, Store, FileText, Ban, Clock, CheckCircle2, XCircle } from 'lucide-react';

export interface ConflictType {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  examples: string[];
}

export interface ConflictStatus {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

export const conflictStatuses: ConflictStatus[] = [
  {
    id: 'pending',
    title: 'در انتظار بررسی',
    description: 'گزارش شما در صف بررسی قرار دارد',
    icon: Clock,
    color: 'text-yellow-500'
  },
  {
    id: 'investigating',
    title: 'در حال بررسی',
    description: 'کارشناسان در حال بررسی گزارش هستند',
    icon: AlertTriangle,
    color: 'text-blue-500'
  },
  {
    id: 'resolved',
    title: 'رسیدگی شده',
    description: 'گزارش شما با موفقیت رسیدگی شد',
    icon: CheckCircle2,
    color: 'text-green-500'
  },
  {
    id: 'rejected',
    title: 'رد شده',
    description: 'گزارش شما به دلیل نقص اطلاعات رد شد',
    icon: XCircle,
    color: 'text-red-500'
  }
];

export const conflictTypes: ConflictType[] = [
  {
    id: 'price-violation',
    title: 'زیر فروشی و نقض نرخنامه',
    description: 'ارائه خدمات و کالا زیر قیمت مصوب اتحادیه صنف خدمات رایانه کرمان',
    icon: AlertTriangle,
    color: 'text-red-500',
    examples: [
      'تعمیرات سخت‌افزاری زیر نرخ مصوب',
      'فروش قطعات کامپیوتر پایین‌تر از قیمت مصوب',
      'ارائه خدمات نرم‌افزاری با تخفیف‌های غیرمجاز',
      'چاپ و تکثیر با قیمت‌های غیررقابتی'
    ]
  },
  {
    id: 'no-permit',
    title: 'فعالیت بدون مجوز',
    description: 'ارائه خدمات صنفی بدون پروانه کسب معتبر از اتحادیه',
    icon: Ban,
    color: 'text-yellow-500',
    examples: [
      'تعمیرات رایانه در منزل بدون مجوز',
      'راه‌اندازی کافی‌نت بدون پروانه کسب',
      'فروش تجهیزات بدون جواز کسب',
      'ارائه خدمات آموزشی غیرمجاز'
    ]
  },
  {
    id: 'trade-interference',
    title: 'تداخل صنفی',
    description: 'فروش کالا و خدمات مختص صنف رایانه توسط صنوف دیگر',
    icon: Store,
    color: 'text-orange-500',
    examples: [
      'فروش لوازم جانبی کامپیوتر در سوپرمارکت‌ها',
      'ارائه خدمات تایپ و تکثیر در دفاتر پیشخوان',
      'فروش نوشت‌افزار تخصصی در فروشگاه‌های غیرمجاز',
      'تعمیرات غیرمجاز در مغازه‌های موبایل'
    ]
  },
  {
    id: 'unethical-behavior',
    title: 'رفتار غیرحرفه‌ای',
    description: 'تخریب کسب و کار دیگر اعضای صنف و رفتار غیراخلاقی',
    icon: FileText,
    color: 'text-purple-500',
    examples: [
      'تخریب اعتبار سایر همکاران نزد مشتریان',
      'تبلیغات منفی علیه سایر اعضای صنف',
      'ایجاد مزاحمت برای کسب و کار دیگران',
      'نقض اصول اخلاق حرفه‌ای صنفی'
    ]
  }
];

export const districts = [
  { id: 1, name: 'منطقه ۱ کرمان' },
  { id: 2, name: 'منطقه ۲ کرمان' },
  { id: 3, name: 'منطقه ۳ کرمان' },
  { id: 4, name: 'منطقه ۴ کرمان' }
];

export interface ConflictReport {
  id: string;
  type: string;
  businessName: string;
  description: string;
  address: string;
  district: number;
  images: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const sampleReports: ConflictReport[] = [
  {
    id: 'CR001',
    type: 'price-violation',
    businessName: 'فروشگاه رایانه پارس',
    description: 'فروش قطعات کامپیوتر با قیمت پایین‌تر از نرخ مصوب اتحادیه',
    address: 'کرمان، خیابان شریعتی، پلاک ۱۲۳',
    district: 1,
    images: [],
    status: 'investigating',
    createdAt: '۱۴۰۳/۱۲/۱۵',
    updatedAt: '۱۴۰۳/۱۲/۱۶'
  },
  {
    id: 'CR002',
    type: 'trade-interference',
    businessName: 'موبایل سنتر',
    description: 'ارائه خدمات تعمیر لپ‌تاپ بدون مجوز از اتحادیه',
    address: 'کرمان، خیابان امام، پلاک ۴۵۶',
    district: 2,
    images: [],
    status: 'pending',
    createdAt: '۱۴۰۳/۱۲/۱۴',
    updatedAt: '۱۴۰۳/۱۲/۱۴'
  }
];