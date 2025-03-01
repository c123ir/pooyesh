const express = require('express');
const path = require('path');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// فعال‌سازی فشرده‌سازی
app.use(compression());

// پارس کردن JSON
app.use(express.json());

// تنظیم هدرهای امنیتی
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// API Routes
const { query } = require('./src/db/db');

// API Route for News
app.get('/api/news', async (req, res) => {
  try {
    const newsItems = await query('SELECT * FROM news ORDER BY id DESC');
    res.json(newsItems);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/news/:id', async (req, res) => {
  try {
    const [newsItem] = await query('SELECT * FROM news WHERE id = ?', [req.params.id]);
    if (!newsItem) {
      return res.status(404).json({ error: 'News item not found' });
    }
    res.json(newsItem);
  } catch (error) {
    console.error('Error fetching news item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API Route for Services
app.get('/api/services', async (req, res) => {
  try {
    const services = await query('SELECT * FROM services');
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/services/:slug', async (req, res) => {
  try {
    const [service] = await query('SELECT * FROM services WHERE slug = ?', [req.params.slug]);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API Route for Welfare Services
app.get('/api/welfare-services', async (req, res) => {
  try {
    const welfareServices = await query('SELECT * FROM welfare_services');
    res.json(welfareServices);
  } catch (error) {
    console.error('Error fetching welfare services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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