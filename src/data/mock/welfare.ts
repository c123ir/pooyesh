import { Heart, Users, Briefcase, Wallet, Gift, Building2, Plane, GraduationCap } from 'lucide-react';

export interface WelfareService {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  benefits: string[];
  eligibility: string[];
  stats: {
    beneficiaries: number;
    totalValue: string;
    satisfaction: number;
  };
}

export const welfareServices: WelfareService[] = [
  {
    id: 'insurance',
    title: 'بیمه تکمیلی',
    description: 'پوشش کامل خدمات درمانی برای شما و خانواده',
    icon: Heart,
    color: 'bg-red-500',
    gradient: 'from-red-500 to-pink-500',
    benefits: [
      'پوشش هزینه‌های بستری',
      'خدمات دندانپزشکی',
      'ویزیت و دارو',
      'پاراکلینیکی'
    ],
    eligibility: [
      'عضویت فعال در اتحادیه',
      'پرداخت حق عضویت سالانه',
      'ارائه مدارک هویتی'
    ],
    stats: {
      beneficiaries: 1500,
      totalValue: '۸,۵۰۰,۰۰۰,۰۰۰',
      satisfaction: 92
    }
  },
  {
    id: 'loans',
    title: 'وام‌های کم‌بهره',
    description: 'تسهیلات ویژه برای توسعه کسب و کار',
    icon: Wallet,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-500',
    benefits: [
      'نرخ سود پایین',
      'اقساط بلندمدت',
      'تنفس ۳ ماهه',
      'پرداخت سریع'
    ],
    eligibility: [
      'سابقه عضویت ۲ ساله',
      'نداشتن بدهی معوق',
      'ارائه ضامن معتبر'
    ],
    stats: {
      beneficiaries: 850,
      totalValue: '۴۵,۰۰۰,۰۰۰,۰۰۰',
      satisfaction: 88
    }
  },
  {
    id: 'education',
    title: 'آموزش رایگان',
    description: 'دوره‌های تخصصی برای ارتقای مهارت',
    icon: GraduationCap,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-violet-500',
    benefits: [
      'دوره‌های تخصصی',
      'مدرک معتبر',
      'اساتید مجرب',
      'کارگاه عملی'
    ],
    eligibility: [
      'عضویت در اتحادیه',
      'ثبت‌نام به موقع',
      'حضور منظم در دوره‌ها'
    ],
    stats: {
      beneficiaries: 1200,
      totalValue: '۳,۲۰۰,۰۰۰,۰۰۰',
      satisfaction: 95
    }
  }
];