import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Tournaments() {
  const tournaments = [
    {
      title: 'Весенний Блиц Чемпионат 2024',
      date: '15 марта 2024',
      time: '18:00 МСК',
      prize: '50 000 ₽',
      participants: 256,
      status: 'Регистрация открыта',
      type: 'Блиц',
      rating: '1500+',
      icon: 'Zap',
      color: 'text-secondary',
    },
    {
      title: 'Турнир Гроссмейстеров',
      date: '1 апреля 2024',
      time: '12:00 МСК',
      prize: '200 000 ₽',
      participants: 64,
      status: 'Скоро',
      type: 'Классика',
      rating: '2200+',
      icon: 'Crown',
      color: 'text-primary',
    },
    {
      title: 'Любительский Рапид',
      date: '22 марта 2024',
      time: '20:00 МСК',
      prize: '25 000 ₽',
      participants: 128,
      status: 'Регистрация открыта',
      type: 'Рапид',
      rating: '1000-1800',
      icon: 'Clock',
      color: 'text-accent',
    },
    {
      title: 'Кубок Новичков',
      date: '10 марта 2024',
      time: '16:00 МСК',
      prize: '15 000 ₽',
      participants: 512,
      status: 'Идет набор',
      type: 'Блиц',
      rating: 'До 1200',
      icon: 'Award',
      color: 'text-secondary',
    },
  ];

  const pastTournaments = [
    { title: 'Зимний Классик 2024', winner: 'GM Иванов А.', date: '15 февраля 2024' },
    { title: 'Новогодний Турнир', winner: 'IM Петрова М.', date: '28 декабря 2023' },
    { title: 'Осенний Кубок', winner: 'GM Сидоров В.', date: '10 ноября 2023' },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-5xl font-heading font-bold mb-4">Турниры и соревнования</h1>
          <p className="text-xl text-muted-foreground">
            Участвуйте в турнирах и докажите свое мастерство
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {tournaments.map((tournament, index) => (
            <Card
              key={index}
              className="p-6 hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon name={tournament.icon as any} size={40} className={tournament.color} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-2xl font-heading font-bold">{tournament.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {tournament.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          {tournament.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {tournament.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          {tournament.participants} участников
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="DollarSign" size={18} className="text-secondary" />
                          <span className="font-semibold">{tournament.prize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="BarChart3" size={18} className="text-accent" />
                          <span>Рейтинг: {tournament.rating}</span>
                        </div>
                      </div>
                      <Badge
                        variant="default"
                        className={`${
                          tournament.status === 'Регистрация открыта'
                            ? 'bg-primary'
                            : tournament.status === 'Идет набор'
                            ? 'bg-secondary'
                            : 'bg-muted'
                        }`}
                      >
                        {tournament.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex md:flex-col gap-2 md:justify-center">
                  <Button className="gap-2 flex-1 md:flex-initial">
                    <Icon name="UserPlus" size={18} />
                    Участвовать
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1 md:flex-initial">
                    <Icon name="Info" size={18} />
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
              <Icon name="Trophy" size={28} className="text-primary" />
              Прошедшие турниры
            </h2>
            <div className="space-y-4">
              {pastTournaments.map((tournament, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card/50 backdrop-blur-sm"
                >
                  <Icon name="Medal" size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-heading font-semibold">{tournament.title}</p>
                    <p className="text-sm text-muted-foreground">Победитель: {tournament.winner}</p>
                    <p className="text-xs text-muted-foreground">{tournament.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
              <Icon name="Info" size={28} className="text-secondary" />
              Правила участия
            </h2>
            <div className="space-y-4">
              {[
                'Зарегистрируйтесь на турнир минимум за 1 час до начала',
                'Убедитесь, что ваш рейтинг соответствует требованиям',
                'Войдите в игровую комнату за 10 минут до старта',
                'Соблюдайте спортивное поведение и правила',
                'Призы распределяются согласно турнирной сетке',
              ].map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
