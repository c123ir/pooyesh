import { motion } from 'framer-motion';
import { MessageSquare, Users, Clock, ArrowRight } from 'lucide-react';

export function Forum() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          انجمن گفتگوی اتحادیه
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          محلی برای تبادل نظر، پرسش و پاسخ و اشتراک تجربیات اعضای صنف
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Categories */}
          {[
            {
              title: 'اخبار و اطلاعیه‌ها',
              description: 'آخرین اخبار و اطلاعیه‌های مهم اتحادیه',
              topics: 156,
              posts: 423
            },
            {
              title: 'مشکلات صنفی',
              description: 'بحث و تبادل نظر درباره مشکلات صنفی',
              topics: 89,
              posts: 312
            },
            {
              title: 'پرسش‌های فنی',
              description: 'سوالات فنی و تخصصی در حوزه‌های مختلف',
              topics: 234,
              posts: 867
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {category.topics} موضوع
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {category.posts} پست
                  </span>
                </div>
                <button className="flex items-center gap-1 text-primary hover:underline">
                  مشاهده
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Latest Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">آخرین موضوعات</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-lg bg-card p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">عنوان موضوع نمونه {index + 1}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      توضیحات کوتاه درباره موضوع مورد بحث...
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>۲ ساعت پیش</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}