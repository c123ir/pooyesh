import { motion } from 'framer-motion';
import { Calendar, Clock, AlertTriangle, User, Briefcase, GraduationCap, Target } from 'lucide-react';
import { electionNews, candidates } from '../../data/mock/election';

export function ElectionNews() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          انتخابات هیئت مدیره اتحادیه صنف خدمات رایانه کرمان
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          اخبار و اطلاعات مربوط به انتخابات دوره جدید هیئت مدیره
        </p>
      </motion.section>

      {/* Important Announcements */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          {electionNews
            .filter(news => news.important)
            .map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 rounded-xl bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <div className="prose prose-sm dark:prose-invert">
                      {news.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="whitespace-pre-line">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Candidates Grid */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">نامزدهای انتخاباتی</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-card overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={candidate.avatar}
                    alt={candidate.full_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{candidate.full_name}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{candidate.business_name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{candidate.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>{candidate.education}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span>برنامه‌های پیشنهادی</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {candidate.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Election Rules */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-muted/50 p-6">
            <h3 className="text-xl font-bold mb-4">قوانین و مقررات انتخابات</h3>
            <div className="prose prose-sm dark:prose-invert">
              <p>
                طبق ماده ۱۴ آیین نامه برگزاری انتخابات اتحادیه‌های صنفی، انتخابات در دور اول با حضور حداقل یک سوم اعضا و در صورت عدم دستیابی به حدنصاب مذکور، در دور دوم با حضور حداقل یک چهارم اعضا به فاصله کمتر از دو هفته رسمیت می‌یابد.
              </p>
              <p>
                در صورت عدم دستیابی به این نصاب، کمیسیون نظارت، مکلف به ادغام اتحادیه مطابق ماده ۲۸ آیین نامه می‌باشد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}