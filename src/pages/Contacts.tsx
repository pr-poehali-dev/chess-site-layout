import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">📧</div>
          <h1 className="text-5xl font-heading font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами, мы всегда рады помочь
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
            <h2 className="text-2xl font-heading font-bold mb-6">Отправить сообщение</h2>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Напишите ваше сообщение..."
                  rows={6}
                />
              </div>

              <Button className="w-full gap-2" size="lg">
                <Icon name="Send" size={20} />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    Напишите нам на электронную почту
                  </p>
                  <a href="mailto:info@chessmaster.ru" className="text-primary hover:underline">
                    info@chessmaster.ru
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground mb-2">
                    Звоните по будням с 9:00 до 18:00 МСК
                  </p>
                  <a href="tel:+74951234567" className="text-secondary hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/30 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground mb-2">
                    Посетите наш офис
                  </p>
                  <p className="text-foreground">
                    г. Москва, ул. Шахматная, д. 64
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-heading font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                {[
                  { icon: 'Facebook', color: 'hover:text-primary' },
                  { icon: 'Twitter', color: 'hover:text-accent' },
                  { icon: 'Instagram', color: 'hover:text-secondary' },
                  { icon: 'Youtube', color: 'hover:text-destructive' },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`${social.color} transition-colors`}
                  >
                    <Icon name={social.icon as any} size={20} />
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/30 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={32} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-3">Часы работы</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Понедельник - Пятница</span>
                      <span className="font-semibold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Суббота</span>
                      <span className="font-semibold">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Воскресенье</span>
                      <span className="font-semibold">Выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
