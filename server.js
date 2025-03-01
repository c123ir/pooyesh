const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// فعال‌سازی فشرده‌سازی
app.use(compression());

// تنظیم هدرهای امنیتی
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// سرو فایل‌های استاتیک
app.use(express.static(path.join(__dirname, 'dist')));

// ارسال فایل index.html برای تمام مسیرها (برای React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});