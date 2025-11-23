import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Lessons() {
  const courses = [
    {
      title: 'Шахматы для начинающих',
      level: 'Новичок',
      lessons: 12,
      duration: '6 часов',
      progress: 45,
      icon: 'BookOpen',
      color: 'text-accent',
    },
    {
      title: 'Тактические приемы',
      level: 'Средний',
      lessons: 20,
      duration: '10 часов',
      progress: 20,
      icon: 'Target',
      color: 'text-primary',
    },
    {
      title: 'Основы эндшпиля',
      level: 'Средний',
      lessons: 15,
      duration: '8 часов',
      progress: 0,
      icon: 'Crown',
      color: 'text-secondary',
    },
  ];

  const topics = [
    {
      title: 'Дебюты',
      description: 'Итальянская партия, Испанская партия, Сицилианская защита',
      icon: 'Play',
      lessons: 25,
    },
    {
      title: 'Миттельшпиль',
      description: 'Планирование, пешечные структуры, атака на короля',
      icon: 'Layers',
      lessons: 30,
    },
    {
      title: 'Эндшпиль',
      description: 'Королевские окончания, ладейные окончания, пешечные окончания',
      icon: 'Flag',
      lessons: 20,
    },
    {
      title: 'Тактика',
      description: 'Вилки, связки, двойные удары, открытые нападения',
      icon: 'Zap',
      lessons: 40,
    },
    {
      title: 'Стратегия',
      description: 'Позиционная игра, слабые поля, открытые линии',
      icon: 'Map',
      lessons: 35,
    },
    {
      title: 'Анализ партий',
      description: 'Разбор классических и современных партий мастеров',
      icon: 'Search',
      lessons: 15,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-5xl font-heading font-bold mb-4">Обучение и уроки</h1>
          <p className="text-xl text-muted-foreground">
            Развивайте свои навыки с нашими курсами и уроками
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold mb-6">Мои курсы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="p-6 hover:scale-105 transition-transform bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={course.icon as any} size={48} className={`${course.color} mb-4`} />
                <Badge variant="outline" className="mb-3">
                  {course.level}
                </Badge>
                <h3 className="text-xl font-heading font-semibold mb-3">{course.title}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="BookOpen" size={16} />
                    {course.lessons} уроков
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {course.duration}
                  </div>
                </div>

                {course.progress > 0 ? (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ) : null}

                <Button className="w-full gap-2">
                  <Icon name={course.progress > 0 ? 'Play' : 'BookOpen'} size={18} />
                  {course.progress > 0 ? 'Продолжить' : 'Начать'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold mb-6">Все темы</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <Card
                key={index}
                className="p-6 hover:scale-[1.02] transition-all bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <Icon name={topic.icon as any} size={40} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{topic.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{topic.lessons} уроков</span>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Icon name="ArrowRight" size={16} />
                        Изучить
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Icon name="Award" size={64} className="text-primary flex-shrink-0" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-2">Получите сертификат</h3>
              <p className="text-muted-foreground mb-4">
                Завершите курс и получите официальный сертификат о прохождении обучения
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Icon name="GraduationCap" size={20} />
              Узнать больше
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
