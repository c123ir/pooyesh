import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Monitor, Printer, Book, Coffee, FileText, Pencil, BookCopy, CreditCard,
  ChevronDown, AlertTriangle, MessageSquare, GraduationCap, ShoppingBag, Heart,
  Users, Briefcase, Building2, HelpCircle, Newspaper, HandHeart, UserCheck,
  Moon, Sun, LogIn, UserPlus
} from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { cn } from '../lib/utils';

const navigation = [
  {
    name: 'خدمات',
    items: [
      { name: 'رایانه', icon: Monitor, href: '/services/computer' },
      { name: 'ماشین‌های اداری', icon: Printer, href: '/services/office' },
      { name: 'کتابفروشان', icon: Book, href: '/services/books' },
      { name: 'کافی‌نت‌ها', icon: Coffee, href: '/services/cafenet' },
      { name: 'تایپ و تکثیر', icon: FileText, href: '/services/typing' },
      { name: 'نوشت‌افزار', icon: Pencil, href: '/services/stationery' },
      { name: 'صحافان', icon: BookCopy, href: '/services/binding' },
      { name: 'کارتخوان‌ها', icon: CreditCard, href: '/services/pos' }
    ]
  },
  {
    name: 'اخبار و رویدادها',
    items: [
      { 
        name: 'سامانه خدمات کافی‌نت', 
        icon: Coffee, 
        href: '/news/6',
        badge: 'جدید'
      },
      { 
        name: 'اتحادیه در لبهٔ پرتگاه', 
        icon: AlertTriangle, 
        href: '/news/1',
        badge: 'مهم'
      },
      { 
        name: 'رونمایی سامانه جدید', 
        icon: Newspaper, 
        href: '/news/2',
        badge: 'جدید'
      },
      { 
        name: 'خطر نرخ‌شکنی', 
        icon: AlertTriangle, 
        href: '/news/3'
      },
      { 
        name: 'حذف امتیازات صنفی', 
        icon: AlertTriangle, 
        href: '/news/4'
      },
      { 
        name: 'تحول در اتحادیه', 
        icon: Newspaper, 
        href: '/news/5'
      },
      { name: 'همه اخبار', icon: Newspaper, href: '/news' }
    ]
  },
  {
    name: 'خدمات رفاهی',
    href: '/welfare',
    icon: Heart
  },
  {
    name: 'گزارش و پیگیری',
    items: [
      { name: 'گزارش تداخل صنفی', icon: AlertTriangle, href: '/trade-conflict' },
      { name: 'اشیاء مسروقه', icon: AlertTriangle, href: '/stolen-items' }
    ]
  },
  {
    name: 'جامعه صنفی',
    items: [
      { name: 'انجمن گفتگو', icon: MessageSquare, href: '/forum' },
      { name: 'آموزش‌های آنلاین', icon: GraduationCap, href: '/learning' },
      { name: 'بازارچه صنفی', icon: ShoppingBag, href: '/marketplace' },
      { name: 'فرصت‌های شغلی', icon: Briefcase, href: '/jobs' },
      { name: 'مصاحبه با نخبگان', icon: UserCheck, href: '/interviews' }
    ]
  },
  {
    name: 'سازمانی',
    items: [
      { name: 'خیریه همگانی', icon: HandHeart, href: '/charity' },
      { name: 'کمیسیون‌ها', icon: Users, href: '/commissions' },
      { name: 'شرکت تعاونی', icon: Building2, href: '/cooperative' },
      { name: 'مشاوره صنفی', icon: HelpCircle, href: '/consulting' }
    ]
  }
];

export function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  // بستن منوی موبایل هنگام تغییر مسیر
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // تشخیص اسکرول برای تغییر استایل هدر
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // بستن منوی موبایل با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // جلوگیری از اسکرول صفحه هنگام باز بودن منوی موبایل
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (menuName: string) => {
    setExpandedMobileMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    );
  };

  return (
    <div className="min-h-screen bg-background font-vazir">
      <header className={cn(
        "fixed top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
      )}>
        <nav className="container mx-auto px-4 lg:px-8" aria-label="Global">
          <div className="flex h-16 items-center justify-between">
            <div className="flex lg:hidden">
              <button
                type="button"
                className="rounded-lg p-2.5 text-foreground hover:bg-accent"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">باز کردن منو</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  اتحادیه فناوران رایانه کرمان
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                item.items ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown('')}
                  >
                    <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground">
                      {item.name}
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-card p-2 shadow-lg ring-1 ring-border"
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-accent"
                            >
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-muted">
                                <subItem.icon className="h-6 w-6 text-primary group-hover:text-primary/80" aria-hidden="true" />
                              </div>
                              <div className="flex-auto">
                                <span className="block font-semibold text-foreground">
                                  {subItem.name}
                                </span>
                                {subItem.badge && (
                                  <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200 mr-2">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            <div className="flex flex-1 items-center justify-end gap-x-2">
              <div className="flex items-center gap-x-2">
                <button className="rounded-full p-2 text-foreground hover:bg-accent">
                  <LogIn className="h-5 w-5" />
                  <span className="sr-only">ورود</span>
                </button>
                <button className="rounded-full p-2 text-foreground hover:bg-accent">
                  <UserPlus className="h-5 w-5" />
                  <span className="sr-only">ثبت‌نام</span>
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* منوی موبایل - خارج از هدر */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* پس‌زمینه تیره */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* منوی کناری */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background px-4 py-4 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <Link 
                  to="/" 
                  className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  اتحادیه فناوران رایانه کرمان
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2.5 text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">بستن منو</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center justify-between mb-6 px-2">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
                    <LogIn className="h-5 w-5" />
                    <span>ورود</span>
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                    <UserPlus className="h-5 w-5" />
                    <span>ثبت‌نام</span>
                  </button>
                </div>
                <ThemeToggle />
              </div>

              <div className="mt-4 flow-root">
                <div className="space-y-2 divide-y divide-border">
                  {navigation.map((item) => (
                    <div key={item.name} className="py-2">
                      {item.items ? (
                        <div>
                          <button
                            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-accent"
                            onClick={() => toggleMobileMenu(item.name)}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform",
                                expandedMobileMenus.includes(item.name) && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedMobileMenus.includes(item.name) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 space-y-2 pr-4"
                              >
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <subItem.icon className="h-5 w-5 text-primary" />
                                    <span>{subItem.name}</span>
                                    {subItem.badge && (
                                      <span className="mr-auto inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.icon && <item.icon className="h-5 w-5 text-primary" />}
                          <span>{item.name}</span>
                        </Link>
                      )}
                     </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 lg:px-8 pt-20 md:pt-24">
        {children}
      </main>

      <footer className="mt-16 border-t bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold mb-4">اتحادیه صنف فناوران رایانه کرمان</h3>
              <p className="text-sm text-muted-foreground">
                ارائه خدمات تخصصی و استاندارد در تمامی رسته‌های صنفی با نظارت مستمر و تضمین کیفیت
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>آدرس: کرمان، خیابان شهید بهشتی، نبش کوچه ۲۳</p>
                <p>تلفن: ۰۳۴-۳۲۵۲۶۷۰۰</p>
                <p>ایمیل: info@example.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">لینک‌های مفید</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/news" className="hover:text-primary">اخبار و رویدادها</Link>
                <Link to="/services" className="hover:text-primary">خدمات</Link>
                <Link to="/welfare" className="hover:text-primary">خدمات رفاهی</Link>
                <Link to="/trade-conflict" className="hover:text-primary">گزارش تخلف</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
            © ۱۴۰۳ اتحادیه صنف فناوران رایانه کرمان. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
}