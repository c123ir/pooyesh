import { User } from './users';

export interface ElectionNews {
  id: string;
  title: string;
  content: string;
  date: string;
  time: string;
  category: 'announcement' | 'result' | 'general';
  important?: boolean;
  videoUrl?: string;
}

export interface Candidate extends User {
  avatar: string;
  experience: string;
  education: string;
  goals: string[];
  votes?: number;
}

export const electionNews: ElectionNews[] = [
  {
    id: 'election-1',
    title: 'نتایج دور اول انتخابات هیئت مدیره اتحادیه صنف خدمات رایانه کرمان',
    content: `در انتخابات دور اول هیئت مدیره اتحادیه صنف رایانه، ماشین‌های اداری، نت‌سرا و کتاب و نوشت‌افزار کرمان که در تاریخ ۳۰ بهمن‌ماه برگزار شد، از مجموع ۱۱۶۲ نفر واجد شرایط رأی‌دهی، تنها ۲۶۰ نفر در انتخابات شرکت کردند.

طبق ماده ۱۴ آیین‌نامه برگزاری انتخابات اتحادیه‌های صنفی، برای رسمیت یافتن انتخابات در دور اول، حضور حداقل یک سوم اعضا الزامی است. با توجه به عدم تحقق این نصاب، انتخابات به دور دوم کشیده شد.`,
    date: '۱۴۰۳/۱۱/۳۰',
    time: '۱۸:۰۰',
    category: 'result',
    important: true
  },
  {
    id: 'election-2',
    title: 'اطلاعیه برگزاری دور دوم انتخابات',
    content: `به اطلاع همکاران محترم می‌رساند مرحله دوم انتخابات هیات مدیره اتحادیه صنف رایانه ماشین‌های اداری نت سرا و کتاب و نوشت افزار کرمان در روز شنبه مورخ ۱۴۰۳/۱۲/۱۱ از ساعت ۸:۳۰ الی ۱۰:۳۰ در محل اتاق اصناف کرمان واقع در میدان قرنی ابتدای خیابان سعدی برگزار می‌گردد.

نکات مهم:
- ساعت رای گیری تمدید نخواهد شد
- به همراه داشتن پروانه کسب معتبر و کارت ملی الزامی است
- همکارانی که تاریخ اعتبار پروانه کسب آنان گذشته است در صورتی می‌توانند در رای گیری شرکت نمایند که تا روز پنجشنبه نسبت به تمدید پروانه اقدام و پروانه کسب جدید را اخذ نمایند
- جهت دادن رای تنها ۱۰ دقیقه حضور در محل رای گیری کافی است`,
    date: '۱۴۰۳/۱۲/۰۵',
    time: '۱۰:۰۰',
    category: 'announcement',
    important: true
  }
];

export const candidates: Candidate[] = [
  {
    id: '1',
    phone: '09123456789',
    full_name: 'حسین آری',
    role: 'candidate',
    business_category: 'office_equipment',
    business_name: 'ماشین‌های اداری آری',
    created_at: '2024-02-23T00:00:00Z',
    is_approved: true,
    avatar: 'https://s33.picofile.com/file/8483052076/01_aari.png',
    experience: '۱۵ سال تجربه در حوزه ماشین‌های اداری',
    education: 'کارشناسی مهندسی کامپیوتر',
    goals: [
      'توسعه خدمات الکترونیکی اتحادیه',
      'برگزاری دوره‌های آموزشی تخصصی',
      'حمایت از کسب‌وکارهای نوپا'
    ]
  },
  {
    id: '2',
    phone: '09916406975',
    full_name: 'سید مرتضی اجله',
    role: 'candidate',
    business_category: 'office_equipment',
    business_name: 'ماشین‌های اداری اجله',
    created_at: '2024-02-23T00:00:00Z',
    is_approved: true,
    avatar: 'https://s33.picofile.com/file/8483052084/02_ajelle.png',
    experience: '۱۲ سال فعالیت در صنف',
    education: 'کارشناسی ارشد مدیریت',
    goals: [
      'بهبود وضعیت رفاهی اعضای صنف',
      'مبارزه با تداخلات صنفی',
      'ارتقای سطح خدمات اتحادیه'
    ]
  }
  // ... سایر کاندیداها
];