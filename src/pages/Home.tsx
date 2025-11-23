import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import ChessBoard from '@/components/ChessBoard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-fade-in" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Добро пожаловать в мир шахмат
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Играйте онлайн, учитесь у лучших, следите за турнирами и развивайте свои навыки
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2 text-lg animate-scale-in">
                <Icon name="Play" size={24} />
                Играть сейчас
              </Button>
              <Link to="/lessons">
                <Button size="lg" variant="outline" className="gap-2 text-lg animate-scale-in">
                  <Icon name="GraduationCap" size={24} />
                  Начать обучение
                </Button>
              </Link>
            </div>
          </div>

          <ChessBoard />
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Возможности платформы
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Gamepad2',
                title: 'Онлайн игра',
                description: 'Играйте с соперниками со всего мира в режиме реального времени',
                color: 'text-primary',
              },
              {
                icon: 'Trophy',
                title: 'Турниры',
                description: 'Участвуйте в соревнованиях и поднимайтесь в рейтинге',
                color: 'text-secondary',
              },
              {
                icon: 'BookOpen',
                title: 'Обучение',
                description: 'Изучайте теорию, тактики и стратегии от мастеров',
                color: 'text-accent',
              },
              {
                icon: 'BarChart3',
                title: 'Рейтинги',
                description: 'Следите за своим прогрессом и мировыми рейтингами',
                color: 'text-primary',
              },
              {
                icon: 'Newspaper',
                title: 'Новости',
                description: 'Будьте в курсе событий шахматного мира',
                color: 'text-secondary',
              },
              {
                icon: 'Users',
                title: 'Сообщество',
                description: 'Общайтесь с игроками и находите партнеров',
                color: 'text-accent',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={feature.icon as any} size={48} className={`${feature.color} mb-4`} />
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Статистика платформы
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Users', value: '50K+', label: 'Активных игроков' },
              { icon: 'Gamepad2', value: '1M+', label: 'Партий сыграно' },
              { icon: 'Trophy', value: '500+', label: 'Турниров проведено' },
              { icon: 'GraduationCap', value: '200+', label: 'Уроков доступно' },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:scale-105 transition-transform bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Icon name={stat.icon as any} size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
