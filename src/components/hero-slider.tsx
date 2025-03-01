import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { news } from '../data/mock/news';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// انتخاب اخبار ویژه برای نمایش در اسلایدر
const featuredNews = news.filter(item => item.featured).slice(0, 3);

export function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect="fade"
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      className="h-[400px] w-full rounded-xl"
    >
      {featuredNews.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to={`/news/${slide.id}`} className="block relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 right-0 p-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  slide.category === 'رویداد' ? 'bg-blue-500' :
                  slide.category === 'خبر' ? 'bg-green-500' :
                  slide.category === 'آموزش' ? 'bg-purple-500' :
                  'bg-orange-500'
                }`}>
                  {slide.category}
                </span>
                <span className="text-sm opacity-80">{slide.date}</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
              <p className="mt-2 max-w-2xl text-lg opacity-90">{slide.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-white hover:underline">
                <span>ادامه مطلب</span>
                <ArrowLeft className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}