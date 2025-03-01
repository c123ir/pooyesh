import { Search, FileText, AlertTriangle, Phone } from 'lucide-react';

const quickLinks = [
  {
    title: 'جستجوی خدمات',
    description: 'پیدا کردن نزدیک‌ترین خدمات صنفی',
    icon: Search,
    color: 'bg-blue-500'
  },
  {
    title: 'ثبت شکایت',
    description: 'ثبت و پیگیری شکایات مردمی',
    icon: FileText,
    color: 'bg-red-500'
  },
  {
    title: 'گزارش تداخل صنفی',
    description: 'گزارش موارد تداخل بین رسته‌های صنفی',
    icon: AlertTriangle,
    color: 'bg-yellow-500'
  },
  {
    title: 'تماس با ما',
    description: 'ارتباط با هیئت مدیره اتحادیه',
    icon: Phone,
    color: 'bg-green-500'
  }
];

export function QuickAccess() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {quickLinks.map((link) => {
        const Icon = link.icon;
        return (
          <button
            key={link.title}
            className="group relative overflow-hidden rounded-xl bg-card p-6 transition-colors hover:bg-accent"
          >
            <div className={`absolute -right-6 -top-6 rounded-full ${link.color} p-8 opacity-10 transition-transform group-hover:scale-150`} />
            <Icon className="h-8 w-8 text-foreground" />
            <h3 className="mt-4 text-lg font-semibold">{link.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{link.description}</p>
          </button>
        );
      })}
    </div>
  );
}