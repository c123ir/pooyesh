export interface Statistics {
  totalMembers: number;
  activePermits: number;
  newMembers: number;
  complaints: number;
  revenue: string;
  growth: number;
  satisfaction: number;
  events: number;
}

export const statistics: Statistics = {
  totalMembers: 2070,
  activePermits: 1810,
  newMembers: 100,
  complaints: 31,
  revenue: "۱۲,۵۰۰,۰۰۰,۰۰۰",
  growth: 15.8,
  satisfaction: 87.5,
  events: 24
};

export const monthlyStats = [
  { month: "فروردین", members: 1950, permits: 1700 },
  { month: "اردیبهشت", members: 1980, permits: 1720 },
  { month: "خرداد", members: 2000, permits: 1750 },
  { month: "تیر", members: 2020, permits: 1770 },
  { month: "مرداد", members: 2040, permits: 1790 },
  { month: "شهریور", members: 2070, permits: 1810 }
];

export const categoryDistribution = [
  { name: "رایانه", percentage: 21.7 },
  { name: "ماشین‌های اداری", percentage: 15.5 },
  { name: "کتابفروشی", percentage: 13.5 },
  { name: "نوشت‌افزار", percentage: 16.9 },
  { name: "کافی‌نت", percentage: 8.7 },
  { name: "تایپ و تکثیر", percentage: 10.6 },
  { name: "صحافی", percentage: 7.2 },
  { name: "کارتخوان", percentage: 5.9 }
];