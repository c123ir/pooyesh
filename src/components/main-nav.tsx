import { Monitor, Printer, Book, Coffee, FileText, Pencil, BookCopy, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  {
    name: 'رایانه',
    icon: Monitor,
    color: 'text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-950'
  },
  {
    name: 'ماشین‌های اداری',
    icon: Printer,
    color: 'text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
    bgColor: 'bg-gray-100 dark:bg-gray-950'
  },
  {
    name: 'کتابفروشان',
    icon: Book,
    color: 'text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-950'
  },
  {
    name: 'کافی‌نت‌ها',
    icon: Coffee,
    color: 'text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-950'
  },
  {
    name: 'تایپ و تکثیر',
    icon: FileText,
    color: 'text-purple-600 hover:text-purple-700 dark:text-purple-500 dark:hover:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-950'
  },
  {
    name: 'نوشت‌افزار',
    icon: Pencil,
    color: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-950'
  },
  {
    name: 'صحافان',
    icon: BookCopy,
    color: 'text-brown-600 hover:text-brown-700 dark:text-brown-500 dark:hover:text-brown-400',
    bgColor: 'bg-brown-100 dark:bg-brown-950'
  },
  {
    name: 'کارتخوان‌ها',
    icon: CreditCard,
    color: 'text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-950'
  }
];

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 space-x-reverse lg:space-x-6 lg:space-x-reverse">
      <div className="hidden md:flex items-center space-x-4 space-x-reverse">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className={cn(
                'flex items-center space-x-2 space-x-reverse rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                category.color,
                category.bgColor
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
      <button className="md:hidden">
        <span className="sr-only">منوی رسته‌ها</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}