import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Ratings() {
  const topPlayers = [
    { rank: 1, name: 'Магнус Карлсен', country: '🇳🇴', rating: 2830, change: +5, games: 48 },
    { rank: 2, name: 'Дин Лижэнь', country: '🇨🇳', rating: 2799, change: +2, games: 42 },
    { rank: 3, name: 'Ян Непомнящий', country: '🇷🇺', rating: 2795, change: -3, games: 45 },
    { rank: 4, name: 'Алиреза Фируджа', country: '🇫🇷', rating: 2785, change: +8, games: 52 },
    { rank: 5, name: 'Хикару Накамура', country: '🇺🇸', rating: 2780, change: +1, games: 55 },
    { rank: 6, name: 'Фабиано Каруана', country: '🇺🇸', rating: 2775, change: -2, games: 38 },
    { rank: 7, name: 'Левон Аронян', country: '🇺🇸', rating: 2772, change: +4, games: 40 },
    { rank: 8, name: 'Уэсли Со', country: '🇺🇸', rating: 2770, change: 0, games: 36 },
    { rank: 9, name: 'Максим Вашье-Лаграв', country: '🇫🇷', rating: 2765, change: -1, games: 44 },
    { rank: 10, name: 'Ричард Раппорт', country: '🇷🇴', rating: 2762, change: +6, games: 50 },
  ];

  const myStats = {
    rating: 1685,
    rank: 12453,
    percentile: 82,
    winRate: 58,
    games: 245,
    wins: 142,
    draws: 45,
    losses: 58,
  };

  const ratingCategories = [
    { title: 'Новичок', range: '0-1200', icon: 'Users', color: 'text-muted-foreground' },
    { title: 'Любитель', range: '1200-1600', icon: 'User', color: 'text-accent' },
    { title: 'Опытный', range: '1600-2000', icon: 'UserCheck', color: 'text-secondary' },
    { title: 'Эксперт', range: '2000-2200', icon: 'Award', color: 'text-primary' },
    { title: 'Мастер', range: '2200+', icon: 'Crown', color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">📊</div>
          <h1 className="text-5xl font-heading font-bold mb-4">Рейтинги игроков</h1>
          <p className="text-xl text-muted-foreground">
            Следите за мировыми рейтингами и своим прогрессом
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card className="lg:col-span-2 p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                Топ-10 мировых игроков
              </h2>
              <Badge variant="outline">Март 2024</Badge>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Место</TableHead>
                    <TableHead>Игрок</TableHead>
                    <TableHead className="text-center">Рейтинг</TableHead>
                    <TableHead className="text-center">Изм.</TableHead>
                    <TableHead className="text-center">Партии</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPlayers.map((player) => (
                    <TableRow key={player.rank} className="hover:bg-muted/50">
                      <TableCell className="font-bold">
                        {player.rank <= 3 ? (
                          <Badge
                            variant="default"
                            className={
                              player.rank === 1
                                ? 'bg-primary'
                                : player.rank === 2
                                ? 'bg-secondary'
                                : 'bg-accent'
                            }
                          >
                            #{player.rank}
                          </Badge>
                        ) : (
                          `#${player.rank}`
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{player.country}</span>
                          <span className="font-semibold">{player.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-bold">{player.rating}</TableCell>
                      <TableCell className="text-center">
                        <span
                          className={
                            player.change > 0
                              ? 'text-accent'
                              : player.change < 0
                              ? 'text-destructive'
                              : 'text-muted-foreground'
                          }
                        >
                          {player.change > 0 ? '+' : ''}
                          {player.change}
                        </span>
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {player.games}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <Icon name="User" size={24} className="text-primary" />
                Моя статистика
              </h3>

              <div className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-5xl font-heading font-bold text-primary mb-1">
                    {myStats.rating}
                  </div>
                  <div className="text-sm text-muted-foreground">Текущий рейтинг</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-card/50">
                    <div className="text-2xl font-bold">#{myStats.rank}</div>
                    <div className="text-xs text-muted-foreground">Место</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card/50">
                    <div className="text-2xl font-bold">{myStats.percentile}%</div>
                    <div className="text-xs text-muted-foreground">Перцентиль</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Процент побед</span>
                    <span className="font-semibold">{myStats.winRate}%</span>
                  </div>
                  <Progress value={myStats.winRate} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div>
                    <div className="text-lg font-bold text-accent">{myStats.wins}</div>
                    <div className="text-xs text-muted-foreground">Победы</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-muted-foreground">{myStats.draws}</div>
                    <div className="text-xs text-muted-foreground">Ничьи</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-destructive">{myStats.losses}</div>
                    <div className="text-xs text-muted-foreground">Поражения</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} className="text-secondary" />
                Категории
              </h3>
              <div className="space-y-3">
                {ratingCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg bg-card/50"
                  >
                    <Icon name={category.icon as any} size={20} className={category.color} />
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{category.title}</div>
                      <div className="text-xs text-muted-foreground">{category.range}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
