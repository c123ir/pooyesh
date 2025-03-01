/**
 * مدل داده‌های اخبار و رویدادها
 * 
 * راهنمای استفاده:
 * 
 * 1. برای اضافه کردن خبر جدید، یک آبجکت جدید به آرایه `news` اضافه کنید
 * 2. برای هر خبر، فیلدهای زیر را تکمیل کنید:
 *    - id: شناسه یکتا (عدد یا رشته)
 *    - title: عنوان خبر
 *    - description: توضیحات خبر (خلاصه)
 *    - content: متن کامل خبر (برای صفحه جزئیات)
 *    - image: آدرس تصویر (ترجیحاً از Unsplash)
 *    - date: تاریخ انتشار (به فرمت فارسی)
 *    - time: زمان انتشار
 *    - category: دسته‌بندی ('رویداد'، 'خبر'، 'آموزش' یا 'اطلاعیه')
 *    - featured: آیا خبر ویژه است؟ (اختیاری، پیش‌فرض: false)
 *    - tags: برچسب‌های خبر (اختیاری)
 *    - author: نویسنده خبر (اختیاری)
 * 
 * 3. برای تصاویر:
 *    - سایز پیشنهادی: 1200x800 پیکسل
 *    - نسبت تصویر: 3:2
 *    - فرمت: jpg یا png
 *    - حجم: کمتر از 500KB
 * 
 * 4. برای لینک‌دهی به اخبار:
 *    - از آدرس `/news/{id}` استفاده کنید
 *    - مثال: `/news/1` برای خبر با شناسه 1
 */

export interface News {
  id: number | string;
  title: string;
  description: string;
  content?: string;
  image: string;
  date: string;
  time: string;
  category: 'رویداد' | 'خبر' | 'آموزش' | 'اطلاعیه';
  featured?: boolean;
  tags?: string[];
  author?: string;
  files?: {
    video?: string;
    pdf?: string;
    image?: string;
  };
}

export const news: News[] = [
  {
    id: 7,
    title: 'برگزاری موفق انتخابات اتحادیه صنف فناوران رایانه کرمان',
    description: 'انتخابات اتحادیه در مهلت قانونی خود و با حضور گسترده و پرشور اعضای محترم صنف برگزار شد. این انتخابات، که با رسیدن به حد نصاب قانونی همراه بود، منجر به انتخاب اعضای جدید هیئت‌رئیسه اتحادیه شد.',
    content: `
      <div class="mb-8">
        <img src="/files/poster.png" alt="پوستر انتخابات اتحادیه" class="w-full rounded-lg shadow-lg" />
      </div>
      
      <h2 class="text-xl font-bold mb-4">برگزاری موفق انتخابات اتحادیه صنف</h2>
      <p>انتخابات اتحادیه در مهلت قانونی خود و با حضور گسترده و پرشور اعضای محترم صنف برگزار شد. این انتخابات، که با رسیدن به حد نصاب قانونی همراه بود، منجر به انتخاب اعضای جدید هیئت‌رئیسه اتحادیه شد.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">قدردانی و تبریک به منتخبان صنف</h2>
      <p>در همین راستا، ابتدا انتخاب شایسته‌ی اعضای جدید هیئت‌رئیسه را تبریک عرض نموده و برای این عزیزان آرزوی موفقیت در مسیر پیش‌رو دارم. امید که با تعهد، درایت و تلاش‌های مستمر، مسیر رشد و تعالی صنف بیش از پیش هموار گردد.</p>
      
      <p class="mt-4">همچنین، از تمامی اعضای محترم که با احساس مسئولیت و مشارکت فعالانه خود در این عرصه نقش‌آفرینی کردند، صمیمانه سپاسگزارم. این همراهی و حضور مؤثر، نشان‌دهنده‌ی اهمیت و جایگاه والای انتخابات صنفی در تصمیم‌گیری‌های کلان و مسیر پیشرفت این اتحادیه است.</p>
      
      <p class="mt-4">این انتخابات، علاوه بر تعیین نمایندگان جدید صنف، فرصتی ارزنده برای بررسی چالش‌های موجود و ارائه‌ی راهکارهای سازنده نیز بود. بسیاری از مسائل صنفی که تاکنون در اولویت قرار نداشتند، در فضای رقابتی این انتخابات مطرح شدند و زمینه‌ای برای برنامه‌ریزی آینده فراهم شد.</p>
      
      <p class="mt-4">امید است که منتخبین محترم، با وفاداری به تعهدات خود و بهره‌گیری از ظرفیت‌های موجود، گام‌های مؤثری در راستای ارتقای وضعیت صنف بردارند و به وعده‌های خود جامه‌ی عمل بپوشانند.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">پایبندی به تعهدات، فراتر از نتیجه‌ی انتخابات</h2>
      <p>با وجود اینکه در این انتخابات به عنوان عضو هیئت‌رئیسه انتخاب نشدیم، همچنان بر تعهدات خود استواریم و با همان انگیزه‌ی پیشین، در کنار اتحادیه و اعضای محترم صنف خواهیم بود. ما بر این باوریم که پیشرفت و توسعه‌ی صنف، مستلزم همکاری و تعامل تمامی اعضا است و مسئولیت ما فراتر از جایگاه‌های انتخاباتی خواهد بود.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">تجلیل از خدمات ارزشمند هیئت‌رئیسه‌ی پیشین</h2>
      <p>در پایان، بر خود لازم می‌دانیم که از زحمات ارزشمند جناب آقای صداقت‌نیا و اعضای محترم هیئت‌رئیسه‌ی پیشین تقدیر و تشکر نماییم. ایشان با بنیان‌گذاری و هدایت این اتحادیه، نقش مهمی در انسجام صنف ایفا کردند و امروز، با واگذاری سکان هدایت به منتخبان جدید، نشان دادند که تجربیات و راهنمایی‌های ارزشمندشان همچنان چراغ راه آینده‌ی این اتحادیه خواهد بود.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">اتحادیه‌ای قدرتمند، صنفی متحد</h2>
      <p>آنچه در این برهه‌ی زمانی از اهمیت ویژه‌ای برخوردار است، تحکیم اتحاد اعضا و تثبیت جایگاه اتحادیه به عنوان یک نهاد تأثیرگذار در پیشبرد اهداف صنفی است. باید تلاش کنیم تا این اتحادیه را به مرجعی جامع و توانمند تبدیل کنیم که بتواند تمامی رسته‌های تحت پوشش خود را به بهترین نحو نمایندگی نماید.</p>
      
      <p class="mt-4">این امر، مستلزم ایجاد بسترهای نوین ارتباطی و تعاملی، تدوین سازوکارهای اصولی و توسعه‌محور، و بهره‌گیری از سیستم‌های دیجیتال در فرآیندهای صنفی است تا بتوانیم نیازهای اعضا را متناسب با ظرفیت‌ها و شرایط موجود به بهترین شکل پاسخ دهیم و مسیر پیشرفت را هموارتر سازیم.</p>
      
      <p class="mt-4">در پایان، از سازمان صمت، ریاست محترم اتاق اصناف، و کلیه‌ی دست‌اندرکاران و برگزارکنندگان این انتخابات که با دقت، حساسیت و تلاش‌های ارزشمند خود، زمینه‌ی برگزاری این رویداد مهم را فراهم آوردند، صمیمانه قدردانی می‌کنم.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-4">با امید به آینده‌ای روشن</h2>
      <p>انتخابات، پایان یک مسیر نیست؛ بلکه آغاز فصلی نوین در رشد و توسعه‌ی صنف است. ما با نگاهی مثبت و عزمی راسخ، در کنار اتحادیه و تمامی اعضای محترم خواهیم ماند و در این مسیر، از هیچ تلاشی برای بهبود شرایط صنف دریغ نخواهیم کرد.</p>
      
      <p class="mt-4 font-bold">با آرزوی موفقیت برای تمامی اعضای اتحادیه و منتخبان محترم</p>
    `,
    image: '/files/poster.png',
    date: '۲۵ اسفند ۱۴۰۳',
    time: '۱۰:۰۰',
    category: 'خبر',
    featured: true,
    tags: ['انتخابات', 'هیئت مدیره', 'اتحادیه صنف', 'موفقیت'],
    author: 'روابط عمومی اتحادیه',
    files: {
      image: '/files/poster.png'
    }
  },
  {
    id: 6,
    title: 'رونمایی از سامانه خدمات کافی‌نت؛ تحولی در ارائه خدمات دیجیتال',
    description: 'سامانه‌ی جامع خدمات کافینت، بستری برای حل چالش‌های صنف نت‌سراها با هدف ایجاد نظم و بهبود کیفیت خدمات این صنف به‌صورت رسمی آغاز به کار کرد.',
    content: `
      <p>در راستای حمایت از فعالان حوزه‌ی کافینت و نت‌سرا، سامانه‌ی کافینت راه‌اندازی شد. این سامانه با هدف ایجاد یک فضای تخصصی برای بررسی مشکلات، تبادل نظر و ارائه‌ی راهکارهای عملی، امکان ثبت درخواست‌های بازرسی، رسیدگی و پیگیری را برای صاحبان این کسب‌وکارها فراهم می‌کند. از چالش‌هایی مانند نرخ‌شکنی تا سایر مسائل صنفی، این سامانه به‌عنوان یک پل ارتباطی میان اعضای صنف و نهادهای نظارتی، شرایطی را ایجاد می‌کند که مشکلات به‌طور شفاف مطرح و راه‌حل‌های مناسب ارائه شوند. همچنین، مجموعه‌ای از خدمات ویژه برای کافینت‌ها نیز در این سامانه قابل دسترسی است.</p>
      
      <p>با استفاده از سامانه‌ی کافینت، صدای صنف خود باشید!</p>
      
      <h3>تثبیت نرخ خدمات</h3>
      <p>یکی از مهم‌ترین چالش‌های این حوزه، نبود نرخ‌گذاری مشخص برای خدمات کافی‌نت بوده است. این سامانه با ایجاد یک چارچوب شفاف و استاندارد، قیمت‌گذاری خدمات را یکپارچه کرده و باعث حذف رقابت ناسالم و سردرگمی مشتریان می‌شود.</p>
      
      <h3>بازرسی دیجیتال کافی‌نت‌ها</h3>
      <p>برای نظارت دقیق‌تر بر عملکرد کافی‌نت‌ها، این سامانه ابزارهای بازرسی دیجیتال را در اختیار نهادهای مربوطه قرار می‌دهد. این قابلیت، سطح شفافیت و کیفیت خدمات را افزایش داده و از بروز تخلفات احتمالی جلوگیری می‌کند.</p>
      
      <h3>آموزش و ارتقای مهارت</h3>
      <p>یکی دیگر از ویژگی‌های برجسته این سامانه، برگزاری دوره‌های آموزشی تخصصی برای مدیران کافی‌نت است. این آموزش‌ها شامل مدیریت خدمات، امنیت اطلاعات و ارائه بهینه خدمات دیجیتال می‌شود که به بهبود عملکرد کافی‌نت‌ها کمک خواهد کرد.</p>
      
      <h3>چشم‌انداز آینده</h3>
      <p>کارشناسان معتقدند که این سامانه می‌تواند باعث افزایش اعتماد عمومی، بهینه‌سازی خدمات و رونق بیشتر کسب‌وکارهای این حوزه شود. با اجرای این طرح، کاربران و صاحبان کافی‌نت‌ها شاهد تحولی مثبت در کیفیت و شفافیت خدمات خواهند بود.</p>
      
      <div class="mt-8 mb-8">
        <h3 class="mb-4 font-bold">ویدئوی معرفی سامانه</h3>
        <div class="aspect-video w-full rounded-xl overflow-hidden">
          <video 
            controls 
            class="w-full h-full" 
            poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            preload="metadata"
          >
            <source src="/files/Jalase01.mp4" type="video/mp4">
            مرورگر شما از پخش ویدئو پشتیبانی نمی‌کند.
          </video>
        </div>
      </div>
      
      <div class="mt-8 mb-8">
        <h3 class="mb-4 font-bold">دانلود پروپوزال سامانه</h3>
        <a 
          href="/files/Netsara.pdf" 
          target="_blank" 
          class="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
          دانلود پروپوزال سامانه کافی‌نت (PDF)
        </a>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    date: '۲۰ اسفند ۱۴۰۳',
    time: '۱۴:۰۰',
    category: 'رویداد',
    featured: true,
    tags: ['کافی‌نت', 'سامانه جدید', 'خدمات دیجیتال', 'نت‌سرا'],
    author: 'کمیسیون فناوری اطلاعات',
    files: {
      video: '/files/Jalase01.mp4',
      pdf: '/files/Netsara.pdf'
    }
  },
  {
    id: 1,
    title: 'اتحادیه در لبهٔ پرتگاه؛ ادغام خاموش در کمین است!',
    description: 'در آستانهٔ انتخابات سرنوشت‌ساز، زمزمه‌هایی از ادغام اتحادیه با اصناف دیگر شنیده می‌شود؛ اتفاقی که می‌تواند حقوق و استقلال اعضا را تهدید کند.',
    content: `
      <p>در آستانهٔ انتخابات سرنوشت‌ساز، زمزمه‌هایی از ادغام اتحادیه با اصناف دیگر شنیده می‌شود؛ اتفاقی که می‌تواند حقوق و استقلال اعضا را تهدید کند. آیا این آخرین فرصت برای حفظ هویت صنف ماست؟ مهلت تصمیم‌گیری کوتاه است؛ در انتخابتان دقت کنید.</p>
      
      <h3>چرا ادغام اتحادیه خطرناک است؟</h3>
      <p>ادغام اتحادیه با اصناف دیگر می‌تواند به از دست رفتن استقلال صنفی، کاهش قدرت چانه‌زنی و نادیده گرفته شدن نیازهای تخصصی اعضا منجر شود. تجربه نشان داده است که در ادغام‌های مشابه، معمولاً منافع صنف کوچک‌تر قربانی می‌شود.</p>
      
      <h3>راهکار چیست؟</h3>
      <p>مشارکت حداکثری در انتخابات پیش رو می‌تواند این خطر را دفع کند. طبق ماده ۱۴ آیین‌نامه برگزاری انتخابات اتحادیه‌های صنفی، در صورت عدم دستیابی به حد نصاب لازم در دو مرحله، کمیسیون نظارت مکلف به ادغام اتحادیه خواهد بود.</p>
      
      <p>زمان برای تصمیم‌گیری کوتاه است. با مشارکت در انتخابات، سرنوشت صنف خود را رقم بزنید.</p>
    `,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    date: '۱۰ اسفند ۱۴۰۳',
    time: '۱۴:۳۰',
    category: 'خبر',
    featured: true,
    tags: ['انتخابات', 'ادغام اتحادیه', 'هشدار'],
    author: 'کمیسیون انتخابات'
  },
  {
    id: 2,
    title: 'رونمایی مهیج از سامانه خدمات جدید اتحادیه؛ تحولی که نباید از دست بدهید!',
    description: 'به گزارش منابع مطلع، سامانه جامع خدمات صنفی در شُرُف رونمایی است؛ بستری که می‌تواند روند صدور مجوزها، پیگیری شکایات و ارائهٔ تسهیلات را سرعت ببخشد.',
    content: `
      <p>به گزارش منابع مطلع، سامانه جامع خدمات صنفی در شُرُف رونمایی است؛ بستری که می‌تواند روند صدور مجوزها، پیگیری شکایات و ارائهٔ تسهیلات را سرعت ببخشد. آیا می‌خواهید در اتحادیه‌ای فعالیت کنید که با یک کلیک، مشکلاتتان حل می‌شود؟ پس سرنوشت این انتخابات را جدی بگیرید!</p>
      
      <h3>ویژگی‌های سامانه جدید</h3>
      <ul>
        <li>صدور آنلاین مجوزها و پروانه‌های کسب</li>
        <li>سیستم پیگیری شکایات و تخلفات صنفی</li>
        <li>ارائه تسهیلات و خدمات رفاهی به صورت الکترونیکی</li>
        <li>اطلاع‌رسانی لحظه‌ای از آخرین اخبار و مقررات صنفی</li>
        <li>امکان ارتباط مستقیم با مسئولین اتحادیه</li>
      </ul>
      
      <h3>زمان رونمایی</h3>
      <p>طبق برنامه‌ریزی انجام شده، این سامانه در هفته اول فروردین ۱۴۰۴ به صورت رسمی رونمایی خواهد شد و تمامی اعضای اتحادیه می‌توانند از خدمات آن بهره‌مند شوند.</p>
      
      <p>برای اطلاعات بیشتر و ثبت‌نام اولیه، به دفتر اتحادیه مراجعه فرمایید.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    date: '۱۵ اسفند ۱۴۰۳',
    time: '۱۰:۰۰',
    category: 'رویداد',
    featured: true,
    tags: ['سامانه جدید', 'خدمات الکترونیک', 'تحول دیجیتال'],
    author: 'روابط عمومی اتحادیه'
  },
  {
    id: 3,
    title: 'خطر بزرگ‌تر از تصور؛ نابودی مشاغل با نرخ‌شکنی و بی‌ثباتی بازار',
    description: 'بازار صنف در آستانهٔ یک چالش نفس‌گیر قرار گرفته است. ادامهٔ نرخ‌شکنی و نبود نظارت قاطع، می‌تواند شمار زیادی از کسب‌وکارها را به تعطیلی بکشاند.',
    content: `
      <p>بازار صنف در آستانهٔ یک چالش نفس‌گیر قرار گرفته است. ادامهٔ نرخ‌شکنی و نبود نظارت قاطع، می‌تواند شمار زیادی از کسب‌وکارها را به تعطیلی بکشاند. برخی کاندیداها قول داده‌اند با بازرسان منطقه‌ای و سامانه‌های نظارتی جلوی این فاجعه را بگیرند. انتخاب صحیح، پیشگیری از بحران است.</p>
      
      <h3>آمار نگران‌کننده</h3>
      <p>طبق بررسی‌های انجام شده، در سال گذشته بیش از ۵۰ واحد صنفی به دلیل نرخ‌شکنی و رقابت ناسالم مجبور به تعطیلی شده‌اند. این روند در صورت ادامه می‌تواند به یک بحران جدی در صنف تبدیل شود.</p>
      
      <h3>راهکارهای پیشنهادی</h3>
      <ul>
        <li>تقویت سیستم بازرسی و نظارت بر واحدهای صنفی</li>
        <li>ایجاد سامانه آنلاین ثبت شکایات نرخ‌شکنی</li>
        <li>برخورد قاطع با متخلفان و واحدهای فاقد مجوز</li>
        <li>آموزش و فرهنگ‌سازی برای رعایت اصول رقابت سالم</li>
      </ul>
      
      <p>کمیسیون نظارت اتحادیه در نظر دارد با همکاری اعضا، طرح جامعی برای مقابله با این چالش تدوین کند. مشارکت شما در این طرح می‌تواند به حفظ منافع صنفی کمک شایانی نماید.</p>
    `,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    date: '۸ اسفند ۱۴۰۳',
    time: '۱۶:۰۰',
    category: 'خبر',
    tags: ['نرخ‌شکنی', 'بازار', 'نظارت'],
    author: 'کمیسیون نظارت'
  },
  {
    id: 4,
    title: 'افشای ناگفته‌ها: پشت پردهٔ حذف امتیازات و مزایای صنفی',
    description: 'شنیده‌ها حاکی است برخی امتیازات رفاهی و تسهیلاتی که قبلاً در اختیار اعضای صنف قرار داشت، در خطر حذف شدن است.',
    content: `
      <p>شنیده‌ها حاکی است برخی امتیازات رفاهی و تسهیلاتی که قبلاً در اختیار اعضای صنف قرار داشت، در خطر حذف شدن است. این یعنی راه سخت‌تر برای ادامهٔ فعالیت و دسترسی کمتر به امکانات ضروری. زمان کمی تا تصمیم نهایی باقی مانده؛ رأی شما می‌تواند سرنوشت این مزایا را رقم بزند.</p>
      
      <h3>مزایای در معرض خطر</h3>
      <ul>
        <li>بیمه تکمیلی اعضا و خانواده‌های آنها</li>
        <li>تسهیلات کم‌بهره برای توسعه کسب و کار</li>
        <li>خدمات مشاوره حقوقی و مالیاتی رایگان</li>
        <li>دوره‌های آموزشی تخصصی با تخفیف ویژه</li>
      </ul>
      
      <h3>دلایل احتمالی</h3>
      <p>کاهش بودجه اتحادیه، عدم مدیریت صحیح منابع و فشارهای بیرونی از جمله دلایل احتمالی این تصمیم عنوان شده است. برخی از کاندیداهای انتخابات پیش رو، حفظ و حتی گسترش این مزایا را در برنامه‌های خود گنجانده‌اند.</p>
      
      <p>با مشارکت در انتخابات و انتخاب افراد شایسته، می‌توانید از حقوق صنفی خود دفاع کنید.</p>
    `,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    date: '۵ اسفند ۱۴۰۳',
    time: '۱۱:۰۰',
    category: 'اطلاعیه',
    tags: ['مزایای صنفی', 'خدمات رفاهی', 'هشدار'],
    author: 'کمیسیون رفاهی'
  },
  {
    id: 5,
    title: 'اتحادیه در آستانهٔ پوست‌اندازی؛ آیا صدای تحول را می‌شنوید؟',
    description: 'بیش از هر زمان دیگری، زمزمهٔ تغییر در فضای صنفی حس می‌شود. فرصت کوتاهی باقی مانده تا با انتخاب کاندیداهای توانمند، اتحادیه وارد دوره‌ای از شفافیت، بهره‌وری و تعامل مؤثر شود.',
    content: `
      <p>بیش از هر زمان دیگری، زمزمهٔ تغییر در فضای صنفی حس می‌شود. فرصت کوتاهی باقی مانده تا با انتخاب کاندیداهای توانمند، اتحادیه وارد دوره‌ای از شفافیت، بهره‌وری و تعامل مؤثر شود. اگر می‌خواهید آیندهٔ کاری‌تان امن و پایدار بماند، حالا زمان اقدام است!</p>
      
      <h3>محورهای تحول</h3>
      <ul>
        <li>شفافیت در تصمیم‌گیری‌ها و عملکرد مالی اتحادیه</li>
        <li>بهره‌گیری از فناوری‌های نوین برای ارائه خدمات بهتر</li>
        <li>تعامل مؤثر با سایر نهادها برای تسهیل فعالیت‌های صنفی</li>
        <li>حمایت همه‌جانبه از اعضا در برابر چالش‌های اقتصادی</li>
      </ul>
      
      <h3>برنامه‌های پیشنهادی</h3>
      <p>کاندیداهای اصلاح‌طلب برنامه‌های متنوعی برای تحول در اتحادیه ارائه کرده‌اند که از جمله می‌توان به راه‌اندازی سامانه جامع خدمات صنفی، ایجاد مرکز نوآوری و کارآفرینی، و تأسیس صندوق حمایت از کسب‌وکارهای نوپا اشاره کرد.</p>
      
      <p>با مشارکت در انتخابات پیش رو، می‌توانید در این تحول بزرگ سهیم باشید و آینده‌ای روشن برای صنف خود رقم بزنید.</p>
    `,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    date: '۱۲ اسفند ۱۴۰۳',
    time: '۰۹:۰۰',
    category: 'رویداد',
    tags: ['تحول', 'آینده صنف', 'برنامه‌ریزی'],
    author: 'کمیسیون توسعه'
  }
];

/**
 * دسته‌بندی‌های اخبار
 * 
 * این آرایه برای نمایش دسته‌بندی‌های اخبار در فیلترها استفاده می‌شود
 */
export const newsCategories = [
  { id: 'all', title: 'همه اخبار' },
  { id: 'رویداد', title: 'رویدادها' },
  { id: 'خبر', title: 'اخبار' },
  { id: 'آموزش', title: 'آموزش‌ها' },
  { id: 'اطلاعیه', title: 'اطلاعیه‌ها' }
];