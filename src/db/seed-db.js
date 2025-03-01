// src/db/seed-db.js
const { query } = require('./db');
const { news } = require('../data/mock/news');
const { services } = require('../data/mock/services');
const { welfareServices } = require('../data/mock/welfare');

async function seedDatabase() {
  try {
    // پاک کردن داده‌های قبلی
    await query('TRUNCATE TABLE news');
    await query('TRUNCATE TABLE services');
    await query('TRUNCATE TABLE welfare_services');
    
    console.log('Tables truncated successfully');

    // وارد کردن داده‌های news
    for (const item of news) {
      await query(
        `INSERT INTO news (id, title, description, content, image, date, time, category, featured, tags, author, files) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.id,
          item.title,
          item.description,
          item.content || null,
          item.image,
          item.date,
          item.time,
          item.category,
          item.featured || false,
          item.tags ? JSON.stringify(item.tags) : null,
          item.author || null,
          item.files ? JSON.stringify(item.files) : null
        ]
      );
    }
    console.log(`${news.length} news items inserted`);

    // وارد کردن داده‌های services
    for (const item of services) {
      await query(
        `INSERT INTO services (title, description, icon, color, gradient, slug, features, requirements, pricing, stats) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.title,
          item.description,
          item.icon.name,
          item.color,
          item.gradient,
          item.slug,
          JSON.stringify(item.features),
          JSON.stringify(item.requirements),
          item.pricing ? JSON.stringify(item.pricing) : null,
          JSON.stringify(item.stats)
        ]
      );
    }
    console.log(`${services.length} services inserted`);

    // وارد کردن داده‌های welfare_services
    for (const item of welfareServices) {
      await query(
        `INSERT INTO welfare_services (id, title, description, icon, color, gradient, benefits, eligibility, stats) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.id,
          item.title,
          item.description,
          item.icon.name,
          item.color,
          item.gradient,
          JSON.stringify(item.benefits),
          JSON.stringify(item.eligibility),
          JSON.stringify(item.stats)
        ]
      );
    }
    console.log(`${welfareServices.length} welfare services inserted`);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();