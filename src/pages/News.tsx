import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function News() {
  const newsItems = [
    {
      title: 'Магнус Карлсен выигрывает турнир Tata Steel',
      category: 'Турниры',
      date: '1 марта 2024',
      excerpt: 'Чемпион мира по шахматам Магнус Карлсен одержал победу в престижном турнире Tata Steel Masters в Вейк-ан-Зее...',
      image: '🏆',
      readTime: '5 мин',
    },
    {
      title: 'Новые правила FIDE вступают в силу',
      category: 'Правила',
      date: '28 февраля 2024',
      excerpt: 'Международная шахматная федерация (FIDE) объявила о вступлении в силу обновленных правил игры и турнирных регламентов...',
      image: '📋',
      readTime: '3 мин',
    },
    {
      title: 'Рост популярности онлайн-шахмат',
      category: 'Статистика',
      date: '25 февраля 2024',
      excerpt: 'Согласно последним данным, количество игроков в онлайн-шахматы увеличилось на 40% за последний год...',
      image: '📈',
      readTime: '4 мин',
    },
    {
      title: 'Интервью с гроссмейстером Яном Непомнящим',
      category: 'Интервью',
      date: '22 февраля 2024',
      excerpt: 'Российский гроссмейстер рассказал о своей подготовке к предстоящим соревнованиям и поделился секретами успеха...',
      image: '🎤',
      readTime: '7 мин',
    },
    {
      title: 'Анонс Чемпионата мира по блицу',
      category: 'Анонсы',
      date: '20 февраля 2024',
      excerpt: 'FIDE объявила о проведении Чемпионата мира по блицу и рапиду, который пройдет в декабре 2024 года...',
      image: '⚡',
      readTime: '3 мин',
    },
    {
      title: 'Юная шахматистка устанавливает рекорд',
      category: 'Достижения',
      date: '18 февраля 2024',
      excerpt: '12-летняя шахматистка из Индии становится самым молодым международным мастером в истории женских шахмат...',
      image: '⭐',
      readTime: '4 мин',
    },
  ];

  const categories = ['Все', 'Турниры', 'Правила', 'Интервью', 'Анонсы', 'Достижения', 'Статистика'];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-5xl font-heading font-bold mb-4">Новости шахматного мира</h1>
          <p className="text-xl text-muted-foreground">
            Следите за последними событиями в мире шахмат
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? 'default' : 'outline'}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((news, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:scale-[1.02] transition-all bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{news.image}</div>
                
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary">{news.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {news.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {news.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {news.excerpt}
                </p>

                <Button variant="outline" className="gap-2 w-full">
                  <Icon name="BookOpen" size={18} />
                  Читать далее
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <Icon name="Rss" size={40} className="text-primary mb-4" />
            <h3 className="text-lg font-heading font-semibold mb-2">RSS-подписка</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Получайте новости в вашем любимом RSS-ридере
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Link" size={16} />
              Подписаться
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
            <Icon name="Mail" size={40} className="text-secondary mb-4" />
            <h3 className="text-lg font-heading font-semibold mb-2">Email-рассылка</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Еженедельная подборка главных новостей
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Send" size={16} />
              Подписаться
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30">
            <Icon name="Bell" size={40} className="text-accent mb-4" />
            <h3 className="text-lg font-heading font-semibold mb-2">Push-уведомления</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Мгновенные уведомления о важных событиях
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="BellRing" size={16} />
              Включить
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
