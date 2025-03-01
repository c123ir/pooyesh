import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface Candidate {
  id: string;
  full_name: string;
  business_name: string;
  experience: string;
  avatar: string;
}

const candidates: Candidate[] = [
  {
    id: '1',
    full_name: 'حسین آری',
    business_name: 'ماشین‌های اداری آری',
    experience: '۱۵ سال تجربه در حوزه ماشین‌های اداری',
    avatar: 'https://s33.picofile.com/file/8483052076/01_aari.png'
  },
  {
    id: '2',
    full_name: 'سید مرتضی اجله',
    business_name: 'ماشین‌های اداری اجله',
    experience: '۱۲ سال فعالیت در صنف',
    avatar: 'https://s33.picofile.com/file/8483052084/02_ajelle.png'
  },
  {
    id: '3',
    full_name: 'نازنین اسماعیلی طرزی',
    business_name: 'کافی نت',
    experience: '۸ سال تجربه در خدمات کافی‌نت',
    avatar: 'https://s33.picofile.com/file/8483052092/03_esmaiili.png'
  },
  {
    id: '4',
    full_name: 'مجتبی حسنی',
    business_name: 'مجتمع کامپیوتر یک دو سه',
    experience: '۱۰ سال تجربه در فروش و خدمات کامپیوتر',
    avatar: 'https://s33.picofile.com/file/8483051384/my_piccc.png'
  },
  {
    id: '5',
    full_name: 'امیرحسین حیدری نژاد',
    business_name: 'کلینیک لپ تاپ',
    experience: '۷ سال تجربه در تعمیرات تخصصی',
    avatar: 'https://s33.picofile.com/file/8483052100/04_heidaripng.png'
  },
  {
    id: '6',
    full_name: 'رضا خواجگان',
    business_name: 'کافی نت و خدمات کامپیوتری',
    experience: '۹ سال تجربه در خدمات کامپیوتری',
    avatar: 'https://s33.picofile.com/file/8483052118/05_khajegan.png'
  },
  {
    id: '7',
    full_name: 'محمدامین شعبانی رابری',
    business_name: 'کافی نت شعبانی',
    experience: '۶ سال تجربه در مدیریت کافی‌نت',
    avatar: 'https://s33.picofile.com/file/8483052134/06_shabani.png'
  },
  {
    id: '8',
    full_name: 'احمدرضا صداقت نیا',
    business_name: 'شرکت صداقت الکترونیک',
    experience: '۱۱ سال تجربه در فناوری اطلاعات',
    avatar: 'https://s33.picofile.com/file/8483052126/06_sedaghat.png'
  },
  {
    id: '9',
    full_name: 'افسانه کریم الدینی',
    business_name: 'شرکت مهندسی تباشیر',
    experience: '۸ سال تجربه در خدمات مهندسی',
    avatar: 'https://s33.picofile.com/file/8483052142/08_karimadini.png'
  },
  {
    id: '10',
    full_name: 'محمدمهدی معمارزاده کرمانی',
    business_name: 'خدمات تایپ و تکثیر',
    experience: '۱۳ سال تجربه در خدمات تایپ و تکثیر',
    avatar: 'https://s33.picofile.com/file/8483052150/10_memarzadeh.png'
  }
];

export function CandidatesPage() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          نامزدهای انتخاباتی اتحادیه صنف خدمات رایانه کرمان
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          به ترتیب حروف الفبا
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {candidates.map((candidate, index) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-card hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={candidate.avatar}
                alt={candidate.full_name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{candidate.full_name}</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" />
                  <span className="line-clamp-1">{candidate.business_name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" />
                  <span className="line-clamp-1">{candidate.experience}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}