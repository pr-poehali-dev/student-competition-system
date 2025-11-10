import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const topStudents = [
    { id: 1, name: 'Анна Смирнова', points: 2580, medals: { gold: 5, silver: 3, bronze: 2 }, class: '10А' },
    { id: 2, name: 'Иван Петров', points: 2420, medals: { gold: 4, silver: 5, bronze: 1 }, class: '11Б' },
    { id: 3, name: 'Мария Кузнецова', points: 2310, medals: { gold: 3, silver: 4, bronze: 4 }, class: '9В' },
    { id: 4, name: 'Дмитрий Волков', points: 2190, medals: { gold: 3, silver: 3, bronze: 3 }, class: '10В' },
    { id: 5, name: 'София Лебедева', points: 2080, medals: { gold: 2, silver: 5, bronze: 2 }, class: '11А' },
  ];

  const upcomingOlympiads = [
    { id: 1, subject: 'Математика', date: '15 ноября 2025', level: 'Региональный', participants: 342, difficulty: 'Высокая' },
    { id: 2, subject: 'Русский язык', date: '20 ноября 2025', level: 'Школьный', participants: 189, difficulty: 'Средняя' },
    { id: 3, subject: 'Физика', date: '25 ноября 2025', level: 'Всероссийский', participants: 521, difficulty: 'Высокая' },
    { id: 4, subject: 'История', date: '28 ноября 2025', level: 'Региональный', participants: 267, difficulty: 'Средняя' },
  ];

  const studentProfile = {
    name: 'Екатерина Иванова',
    class: '10А',
    points: 1850,
    rank: 12,
    medals: { gold: 2, silver: 4, bronze: 3 },
    achievements: [
      { id: 1, title: 'Первые шаги', description: 'Участие в первой олимпиаде', icon: 'Star', color: 'text-accent' },
      { id: 2, title: 'Математический гений', description: '1 место по математике', icon: 'Award', color: 'text-gold' },
      { id: 3, title: 'Активист', description: 'Более 10 олимпиад', icon: 'Trophy', color: 'text-secondary' },
      { id: 4, title: 'Серийный победитель', description: '5 побед подряд', icon: 'Crown', color: 'text-gold' },
    ],
    recentOlympiads: [
      { id: 1, subject: 'Математика', date: '5 ноября 2025', result: 95, place: 1, medal: 'gold' },
      { id: 2, subject: 'Физика', date: '1 ноября 2025', result: 87, place: 3, medal: 'bronze' },
      { id: 3, subject: 'Русский язык', date: '28 октября 2025', result: 92, place: 2, medal: 'silver' },
    ]
  };

  const renderNavigation = () => (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-foreground">ОлимпиадПро</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setActiveSection('home')} className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Главная
            </button>
            <button onClick={() => setActiveSection('olympiads')} className={`text-sm font-medium transition-colors ${activeSection === 'olympiads' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Олимпиады
            </button>
            <button onClick={() => setActiveSection('about')} className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              О платформе
            </button>
            <button onClick={() => setActiveSection('teachers')} className={`text-sm font-medium transition-colors ${activeSection === 'teachers' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Для учителей
            </button>
            <button onClick={() => setActiveSection('parents')} className={`text-sm font-medium transition-colors ${activeSection === 'parents' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Для родителей
            </button>
            <button onClick={() => setActiveSection('shop')} className={`text-sm font-medium transition-colors ${activeSection === 'shop' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Магазин наград
            </button>
          </div>
          <Button onClick={() => setActiveSection('profile')} size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Личный кабинет
          </Button>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="space-y-12">
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Развивайте таланты через олимпиады
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Платформа для школьных олимпиад с системой рейтингов, медалей и достижений. Мотивируйте учеников к новым победам!
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setActiveSection('olympiads')}>
                <Icon name="Trophy" size={20} className="mr-2" />
                Участвовать в олимпиаде
              </Button>
              <Button size="lg" variant="outline" onClick={() => setActiveSection('about')}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover-scale">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-4xl font-bold text-primary">12,458</CardTitle>
              <CardDescription>Активных участников</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover-scale">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Icon name="BookOpen" size={32} className="text-secondary" />
              </div>
              <CardTitle className="text-4xl font-bold text-secondary">347</CardTitle>
              <CardDescription>Проведённых олимпиад</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover-scale">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <CardTitle className="text-4xl font-bold text-accent">8,932</CardTitle>
              <CardDescription>Выданных наград</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-2">Топ-10 учеников месяца</h3>
          <p className="text-muted-foreground">Лучшие результаты за ноябрь 2025</p>
        </div>
        <div className="grid gap-4">
          {topStudents.map((student, index) => (
            <Card key={student.id} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className={`text-4xl font-bold ${index === 0 ? 'text-gold' : index === 1 ? 'text-silver' : index === 2 ? 'text-bronze' : 'text-muted-foreground'}`}>
                    #{index + 1}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{student.name}</div>
                    <div className="text-sm text-muted-foreground">Класс {student.class}</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Medal" size={20} className="text-gold" />
                      <span className="font-medium">{student.medals.gold}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Medal" size={20} className="text-silver" />
                      <span className="font-medium">{student.medals.silver}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Medal" size={20} className="text-bronze" />
                      <span className="font-medium">{student.medals.bronze}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{student.points}</div>
                    <div className="text-sm text-muted-foreground">баллов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-2">Ближайшие олимпиады</h3>
          <p className="text-muted-foreground">Участвуйте и зарабатывайте баллы и медали</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingOlympiads.map((olympiad) => (
            <Card key={olympiad.id} className="hover-scale">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{olympiad.subject}</CardTitle>
                  <Badge variant={olympiad.difficulty === 'Высокая' ? 'destructive' : 'secondary'}>
                    {olympiad.difficulty}
                  </Badge>
                </div>
                <CardDescription>
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{olympiad.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>{olympiad.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      <span>{olympiad.participants} участников</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  const renderOlympiads = () => (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8">Каталог олимпиад</h2>
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
          <TabsTrigger value="archive">Архив</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingOlympiads.map((olympiad) => (
              <Card key={olympiad.id} className="hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>{olympiad.subject}</CardTitle>
                    <Badge variant={olympiad.difficulty === 'Высокая' ? 'destructive' : 'secondary'}>
                      {olympiad.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="space-y-2 mt-3">
                      <div className="flex items-center gap-2 text-foreground">
                        <Icon name="Calendar" size={16} />
                        <span>{olympiad.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        <span>{olympiad.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} />
                        <span>{olympiad.participants} участников</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="archive">
          <p className="text-center text-muted-foreground py-12">Архив олимпиад пуст</p>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderProfile = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
              {studentProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-1">{studentProfile.name}</h2>
            <p className="text-muted-foreground mb-4">Класс {studentProfile.class}</p>
            <div className="flex gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">{studentProfile.points}</div>
                <div className="text-sm text-muted-foreground">Общий балл</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">#{studentProfile.rank}</div>
                <div className="text-sm text-muted-foreground">Место в рейтинге</div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Medal" size={24} />
              Мои медали
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gold/10 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Icon name="Medal" size={40} className="text-gold" />
                </div>
                <div className="text-3xl font-bold text-gold">{studentProfile.medals.gold}</div>
                <div className="text-sm text-muted-foreground">Золотых</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-silver/10 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Icon name="Medal" size={40} className="text-silver" />
                </div>
                <div className="text-3xl font-bold text-silver">{studentProfile.medals.silver}</div>
                <div className="text-sm text-muted-foreground">Серебряных</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-bronze/10 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Icon name="Medal" size={40} className="text-bronze" />
                </div>
                <div className="text-3xl font-bold text-bronze">{studentProfile.medals.bronze}</div>
                <div className="text-sm text-muted-foreground">Бронзовых</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Award" size={24} />
              Достижения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {studentProfile.achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-4 p-4 rounded-lg border border-border hover-scale">
                  <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${achievement.color}`}>
                    <Icon name={achievement.icon as any} size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="History" size={24} />
              Последние олимпиады
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentProfile.recentOlympiads.map((olympiad) => (
                <div key={olympiad.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <Icon name={olympiad.medal === 'gold' ? 'Medal' : olympiad.medal === 'silver' ? 'Medal' : 'Medal'} 
                          size={32} 
                          className={olympiad.medal === 'gold' ? 'text-gold' : olympiad.medal === 'silver' ? 'text-silver' : 'text-bronze'} />
                    <div>
                      <div className="font-semibold">{olympiad.subject}</div>
                      <div className="text-sm text-muted-foreground">{olympiad.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{olympiad.result}%</div>
                    <div className="text-sm text-muted-foreground">{olympiad.place} место</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold mb-6">О платформе</h2>
        <p className="text-lg text-muted-foreground">
          ОлимпиадПро — современная образовательная платформа для проведения школьных олимпиад с инновационной системой геймификации.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={24} className="text-primary" />
                Наша миссия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Мотивировать учеников к развитию через систему достижений, рейтингов и наград. Мы делаем обучение увлекательным и соревновательным.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Sparkles" size={24} className="text-secondary" />
                Геймификация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Медали, достижения, рейтинги — всё это помогает ученикам видеть свой прогресс и стремиться к новым вершинам.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {renderNavigation()}
      {activeSection === 'home' && renderHome()}
      {activeSection === 'olympiads' && renderOlympiads()}
      {activeSection === 'profile' && renderProfile()}
      {activeSection === 'about' && renderAbout()}
      {activeSection === 'teachers' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-6">Для учителей</h2>
          <p className="text-lg text-muted-foreground">Раздел в разработке</p>
        </div>
      )}
      {activeSection === 'parents' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-6">Для родителей</h2>
          <p className="text-lg text-muted-foreground">Раздел в разработке</p>
        </div>
      )}
      {activeSection === 'shop' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-6">Магазин наград</h2>
          <p className="text-lg text-muted-foreground">Раздел в разработке</p>
        </div>
      )}
    </div>
  );
};

export default Index;
