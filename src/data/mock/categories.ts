import { Monitor, Printer, Book, Coffee, FileText, Pencil, BookCopy, CreditCard } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: any;
  description: string;
  color: string;
  gradient: string;
  stats: {
    members: number;
    activePermits: number;
    newMembers: number;
    complaints: number;
  };
  services: Array<{
    name: string;
    description: string;
    price?: string;
  }>;
}

export const categories: Category[] = [
  {
    id: 'computer',
    name: 'خدمات رایانه',
    icon: Monitor,
    description: 'ارائه خدمات تخصصی رایانه، لپ‌تاپ و تجهیزات جانبی',
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    stats: {
      members: 450,
      activePermits: 380,
      newMembers: 25,
      complaints: 8
    },
    services: [
      {
        name: 'تعمیرات تخصصی',
        description: 'تعمیر انواع رایانه و لپ‌تاپ',
        price: 'از ۵۰۰,۰۰۰ تومان'
      },
      {
        name: 'نصب و راه‌اندازی',
        description: 'نصب سیستم‌عامل و نرم‌افزارها',
        price: 'از ۳۰۰,۰۰۰ تومان'
      }
    ]
  },
  {
    id: 'office',
    name: 'ماشین‌های اداری',
    icon: Printer,
    description: 'فروش و خدمات پس از فروش تجهیزات اداری',
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-violet-500',
    stats: {
      members: 320,
      activePermits: 290,
      newMembers: 15,
      complaints: 5
    },
    services: [
      {
        name: 'فروش پرینتر',
        description: 'انواع پرینتر و اسکنر',
        price: 'از ۵,۰۰۰,۰۰۰ تومان'
      },
      {
        name: 'تعمیرات',
        description: 'تعمیر انواع ماشین‌های اداری',
        price: 'از ۴۰۰,۰۰۰ تومان'
      }
    ]
  },
  {
    id: 'books',
    name: 'کتابفروشی',
    icon: Book,
    description: 'عرضه کتب تخصصی و عمومی',
    color: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-500',
    stats: {
      members: 280,
      activePermits: 250,
      newMembers: 12,
      complaints: 3
    },
    services: [
      {
        name: 'کتب دانشگاهی',
        description: 'کتاب‌های تخصصی دانشگاهی',
      },
      {
        name: 'کتب عمومی',
        description: 'رمان و کتاب‌های عمومی',
      }
    ]
  },
  {
    id: 'cafenet',
    name: 'کافی‌نت',
    icon: Coffee,
    description: 'خدمات اینترنت و کامپیوتر',
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-amber-500',
    stats: {
      members: 180,
      activePermits: 150,
      newMembers: 8,
      complaints: 4
    },
    services: [
      {
        name: 'خدمات اینترنت',
        description: 'دسترسی به اینترنت پرسرعت',
        price: 'از ۱۰,۰۰۰ تومان/ساعت'
      },
      {
        name: 'خدمات کامپیوتری',
        description: 'تایپ، پرینت و اسکن',
      }
    ]
  },
  {
    id: 'typing',
    name: 'تایپ و تکثیر',
    icon: FileText,
    description: 'خدمات تایپ و تکثیر اسناد',
    color: 'bg-red-500',
    gradient: 'from-red-500 to-rose-500',
    stats: {
      members: 220,
      activePermits: 190,
      newMembers: 10,
      complaints: 2
    },
    services: [
      {
        name: 'تایپ فوری',
        description: 'تایپ انواع متون و مقالات',
        price: 'از صفحه‌ای ۱۵,۰۰۰ تومان'
      },
      {
        name: 'تکثیر رنگی',
        description: 'کپی رنگی با کیفیت بالا',
        price: 'از برگی ۲,۰۰۰ تومان'
      }
    ]
  },
  {
    id: 'stationery',
    name: 'نوشت‌افزار',
    icon: Pencil,
    description: 'فروش لوازم التحریر و ملزومات اداری',
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
    stats: {
      members: 350,
      activePermits: 320,
      newMembers: 18,
      complaints: 6
    },
    services: [
      {
        name: 'لوازم تحریر',
        description: 'انواع نوشت‌افزار مدرسه و دانشگاه',
      },
      {
        name: 'ملزومات اداری',
        description: 'تجهیزات و لوازم اداری',
      }
    ]
  },
  {
    id: 'binding',
    name: 'صحافی',
    icon: BookCopy,
    description: 'خدمات صحافی و چاپ دیجیتال',
    color: 'bg-teal-500',
    gradient: 'from-teal-500 to-cyan-500',
    stats: {
      members: 150,
      activePermits: 130,
      newMembers: 7,
      complaints: 2
    },
    services: [
      {
        name: 'صحافی پایان‌نامه',
        description: 'صحافی تخصصی پایان‌نامه',
        price: 'از ۱۵۰,۰۰۰ تومان'
      },
      {
        name: 'چاپ دیجیتال',
        description: 'چاپ با کیفیت دیجیتال',
      }
    ]
  },
  {
    id: 'pos',
    name: 'کارتخوان',
    icon: CreditCard,
    description: 'فروش و پشتیبانی دستگاه‌های کارتخوان',
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-blue-500',
    stats: {
      members: 120,
      activePermits: 100,
      newMembers: 5,
      complaints: 1
    },
    services: [
      {
        name: 'فروش کارتخوان',
        description: 'انواع دستگاه کارتخوان سیار و ثابت',
      },
      {
        name: 'پشتیبانی',
        description: 'خدمات پشتیبانی ۲۴/۷',
      }
    ]
  }
];