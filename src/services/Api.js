
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Services } from './pages/services';
import { ServiceDetail } from './pages/services/[slug]';
import { TradeConflict } from './pages/trade-conflict';
import { WelfareServices } from './pages/welfare-services';
import { News } from './pages/news';
import { NewsDetail } from './pages/news/[id]';
import { ElectionNews } from './pages/news/election';
import { CandidatesPage } from './pages/news/candidates';
import { Features } from './pages/features';
import { Forum } from './pages/forum';
import { Learning } from './pages/learning';
import { Marketplace } from './pages/marketplace';
import { Charity } from './pages/charity';
import { Commissions } from './pages/commissions';
import { StolenItems } from './pages/stolen-items';
import { Jobs } from './pages/jobs';
import { Consulting } from './pages/consulting';
import { Cooperative } from './pages/cooperative';
import { Interviews } from './pages/interviews';
import { Complaints } from './pages/complaints';
import { useEffect } from 'react';

function App() {
  // اضافه کردن کد برای نمایش پیام نصب PWA
  useEffect(() => {
    // بررسی اینکه آیا برنامه قابل نصب است
    let deferredPrompt: any;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // جلوگیری از نمایش خودکار پیام نصب
      e.preventDefault();
      // ذخیره رویداد برای استفاده بعدی
      deferredPrompt = e;
      
      // نمایش پیام سفارشی برای نصب برنامه
      setTimeout(() => {
        if (deferredPrompt) {
          const installBanner = document.createElement('div');
          installBanner.className = 'fixed bottom-0 left-0 right-0 bg-primary text-white p-4 flex justify-between items-center z-50';
          installBanner.innerHTML = `
            <div>
              <p class="font-bold">نصب اپلیکیشن پویش</p>
              <p class="text-sm">برای دسترسی سریع‌تر، اپلیکیشن را نصب کنید</p>
            </div>
            <div class="flex gap-2">
              <button id="install-btn" class="px-4 py-2 bg-white text-primary rounded-lg font-bold">نصب</button>
              <button id="close-btn" class="px-2 py-2">بستن</button>
            </div>
          `;
          
          document.body.appendChild(installBanner);
          
          document.getElementById('install-btn')?.addEventListener('click', async () => {
            if (deferredPrompt) {
              // نمایش پیام نصب
              deferredPrompt.prompt();
              // منتظر انتخاب کاربر
              const { outcome } = await deferredPrompt.userChoice;
              // پاکسازی رویداد
              deferredPrompt = null;
              // حذف بنر
              installBanner.remove();
            }
          });
          
          document.getElementById('close-btn')?.addEventListener('click', () => {
            installBanner.remove();
          });
        }
      }, 3000);
    });
    
    // پاکسازی رویداد در هنگام unmount
    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
    };
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/welfare" element={<WelfareServices />} />
          
          {/* News Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news/election" element={<ElectionNews />} />
          <Route path="/news/candidates" element={<CandidatesPage />} />
          
          {/* Report Routes */}
          <Route path="/trade-conflict" element={<TradeConflict />} />
          <Route path="/stolen-items" element={<StolenItems />} />
          <Route path="/complaints" element={<Complaints />} />
          
          {/* Community Routes */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/interviews" element={<Interviews />} />
          
          {/* Organization Routes */}
          <Route path="/charity" element={<Charity />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/cooperative" element={<Cooperative />} />
          <Route path="/consulting" element={<Consulting />} />
          
          <Route path="/features" element={<Features />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;