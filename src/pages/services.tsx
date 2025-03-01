import { motion } from 'framer-motion';
import { Monitor, Printer, Book, Coffee, FileText, Pencil, BookCopy, CreditCard } from 'lucide-react';

const services = [
  {
    title: 'خدمات رایانه',
    icon: Monitor,
    description: 'تعمیر و نگهداری انواع رایانه و لپ‌تاپ',
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'ماشین‌های اداری',
    icon: Printer,
    description: 'فروش و خدمات پس از فروش تجهیزات اداری',
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'کتابفروشی',
    icon: Book,
    description: 'عرضه کتب تخصصی و عمومی',
    color: 'bg-green-500',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'کافی‌نت',
    icon: Coffee,
    description: 'خدمات اینترنت و کامپیوتر',
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'تایپ و تکثیر',
    icon: FileText,
    description: 'خدمات تایپ، پرینت و کپی',
    color: 'bg-red-500',
    gradient: 'from-red-500 to-red-600'
  },
  {
    title: 'نوشت‌افزار',
    icon: Pencil,
    description: 'لوازم‌التحریر و ملزومات اداری',
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'صحافی',
    icon: BookCopy,
    description: 'صحافی و چاپ کتاب و مجله',
    color: 'bg-pink-500',
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    title: 'کارتخوان',
    icon: CreditCard,
    description: 'فروش و پشتیبانی دستگاه‌های کارتخوان',
    color: 'bg-teal-500',
    gradient: 'from-teal-500 to-teal-600'
  }
];

export function Services() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          خدمات تخصصی اتحادیه
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ارائه خدمات تخصصی در حوزه‌های مختلف صنفی
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
            <div className={`inline-flex rounded-xl ${service.color} p-3`}>
              <service.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </p>
            <button className="mt-4 text-sm font-medium text-primary hover:underline">
              مشاهده جزئیات
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}