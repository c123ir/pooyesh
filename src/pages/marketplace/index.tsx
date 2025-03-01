import { motion } from 'framer-motion';
import { ShoppingBag, Tag, Star, ArrowRight, Filter, Search, ChevronDown } from 'lucide-react';

export function Marketplace() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          بازارچه صنفی
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          خرید و فروش تجهیزات و خدمات بین اعضای صنف
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                className="w-full pl-4 pr-10 py-2 rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-input hover:bg-accent">
                <Filter className="h-5 w-5" />
                <span>فیلترها</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-input hover:bg-accent">
                <span>مرتب‌سازی</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 flex gap-4 overflow-x-auto pb-4">
          {['همه', 'کامپیوتر', 'ماشین‌های اداری', 'لوازم جانبی', 'نرم‌افزار', 'تجهیزات شبکه'].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                index === 0 
                  ? 'bg-primary text-white' 
                  : 'bg-card hover:bg-accent'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1550000000000 + index}`}
                  alt="تصویر محصول"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {index % 2 === 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    تخفیف ویژه
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">عنوان محصول نمونه {index + 1}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  توضیحات مختصر درباره محصول و ویژگی‌های آن...
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">۴.۵</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold">۲,۵۰۰,۰۰۰</span>
                    <span className="text-xs text-muted-foreground">تومان</span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-white">
                  <ShoppingBag className="h-4 w-4" />
                  <span>افزودن به سبد</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-input hover:bg-accent">
            <span>نمایش بیشتر</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}