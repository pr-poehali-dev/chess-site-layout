import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Rules() {
  const rules = [
    {
      title: 'Основы игры',
      icon: 'Info',
      content: 'Шахматы — это игра для двух человек на доске 8×8 клеток. Один игрок играет белыми фигурами, другой — черными. Цель игры — поставить мат королю соперника.',
    },
    {
      title: 'Начальная позиция',
      icon: 'Layout',
      content: 'В начале игры у каждого игрока по 16 фигур: король, ферзь, 2 ладьи, 2 слона, 2 коня и 8 пешек. Белые всегда ходят первыми.',
    },
    {
      title: 'Как ходят фигуры',
      icon: 'Move',
      content: 'Король ходит на одну клетку в любом направлении. Ферзь — на любое количество клеток по вертикали, горизонтали или диагонали. Ладья — по вертикали или горизонтали. Слон — по диагонали. Конь — буквой "Г". Пешка — на одну клетку вперед (в начале может на две).',
    },
    {
      title: 'Взятие фигур',
      icon: 'Target',
      content: 'Фигура берет фигуру соперника, становясь на ее место. Пешка бьет по диагонали на одну клетку вперед. Взятие на проходе — особое правило для пешек.',
    },
    {
      title: 'Рокировка',
      icon: 'Castle',
      content: 'Особый ход с участием короля и ладьи. Король перемещается на два поля в сторону ладьи, а ладья становится рядом с ним с другой стороны. Возможна только если король и ладья не двигались, между ними нет фигур, и король не под шахом.',
    },
    {
      title: 'Шах, мат и пат',
      icon: 'AlertTriangle',
      content: 'Шах — нападение на короля. Мат — король под шахом и нет способа защититься. Пат — нет легальных ходов, но король не под шахом (ничья).',
    },
    {
      title: 'Превращение пешки',
      icon: 'Crown',
      content: 'Когда пешка достигает последней горизонтали, она превращается в любую фигуру (кроме короля), обычно в ферзя.',
    },
    {
      title: 'Правила турниров',
      icon: 'Clock',
      content: 'В турнирах используются шахматные часы. Стандартный контроль времени — от блица (3-5 минут) до классических партий (90+ минут). Партия может закончиться ничьей по соглашению, троекратным повторением позиции или правилу 50 ходов.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">♟️</div>
          <h1 className="text-5xl font-heading font-bold mb-4">Правила шахмат</h1>
          <p className="text-xl text-muted-foreground">
            Изучите основные правила игры в шахматы
          </p>
        </div>

        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 animate-scale-in">
          <div className="flex items-start gap-4">
            <Icon name="Lightbulb" size={32} className="text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">Совет для начинающих</h3>
              <p className="text-muted-foreground">
                Начните с изучения того, как ходят фигуры. Затем практикуйтесь в решении простых задач и играйте короткие партии. Анализируйте свои ошибки — это лучший способ улучшить свою игру.
              </p>
            </div>
          </div>
        </Card>

        <Accordion type="single" collapsible className="space-y-4">
          {rules.map((rule, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/40 rounded-lg px-6 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name={rule.icon as any} size={24} className="text-primary" />
                  <span className="text-lg font-heading font-semibold">{rule.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-2">
                {rule.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="mt-12 p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30 animate-fade-in">
          <div className="text-center">
            <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-secondary" />
            <h3 className="text-2xl font-heading font-bold mb-3">Хотите узнать больше?</h3>
            <p className="text-muted-foreground mb-6">
              Переходите в раздел "Обучение" для изучения тактик, стратегий и дебютов
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
