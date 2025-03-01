import { LogIn, UserPlus } from 'lucide-react';

export function UserNav() {
  return (
    <div className="flex items-center space-x-4 space-x-reverse">
      <button className="hidden md:flex items-center space-x-2 space-x-reverse rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent">
        <LogIn className="h-4 w-4" />
        <span>ورود</span>
      </button>
      <button className="hidden md:flex items-center space-x-2 space-x-reverse rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        <UserPlus className="h-4 w-4" />
        <span>ثبت‌نام</span>
      </button>
      
      {/* نمایش فقط آیکون در موبایل */}
      <div className="md:hidden flex items-center gap-2">
        <button className="rounded-full p-2 text-foreground hover:bg-accent">
          <LogIn className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <UserPlus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}