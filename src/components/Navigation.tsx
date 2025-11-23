import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigationItems = [
  { path: '/', label: 'Главная', icon: 'Home' },
  { path: '/rules', label: 'Правила', icon: 'BookOpen' },
  { path: '/tournaments', label: 'Турниры', icon: 'Trophy' },
  { path: '/lessons', label: 'Обучение', icon: 'GraduationCap' },
  { path: '/news', label: 'Новости', icon: 'Newspaper' },
  { path: '/ratings', label: 'Рейтинги', icon: 'BarChart3' },
  { path: '/contacts', label: 'Контакты', icon: 'Mail' },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-4xl transition-transform group-hover:scale-110">♔</div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ChessMaster
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className={`gap-2 transition-all ${isActive ? 'animate-scale-in' : ''}`}
                  >
                    <Icon name={item.icon as any} size={18} />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-2 mt-8">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={isActive ? 'default' : 'ghost'}
                        className="w-full justify-start gap-3"
                      >
                        <Icon name={item.icon as any} size={20} />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
