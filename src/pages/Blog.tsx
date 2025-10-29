import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import classroomImg from '@/assets/classroom.jpg';
import inclusionImg from '@/assets/inclusive-education.jpg';

const Blog = () => {
  const { t } = useTranslation();

  const posts = [
    {
      id: 1,
      title: 'A Importância da Educação Inclusiva no Século XXI',
      excerpt:
        'Descubra como a educação inclusiva transforma vidas e cria oportunidades iguais para todas as crianças.',
      image: inclusionImg,
      author: 'Equipa Dream Yetu',
      date: '15 Jan 2025',
      category: 'Educação',
    },
    {
      id: 2,
      title: 'Homeschooling: Guia Completo para Pais',
      excerpt:
        'Tudo o que precisa saber sobre homeschooling certificado e como começar esta jornada educativa.',
      image: classroomImg,
      author: 'Equipa Dream Yetu',
      date: '10 Jan 2025',
      category: 'Parentalidade',
    },
    {
      id: 3,
      title: 'Desenvolvimento Infantil: Os Primeiros 5 Anos',
      excerpt:
        'Compreenda as fases cruciais do desenvolvimento infantil e como apoiar o crescimento do seu filho.',
      image: inclusionImg,
      author: 'Equipa Dream Yetu',
      date: '5 Jan 2025',
      category: 'Desenvolvimento',
    },
    {
      id: 4,
      title: 'Inovação Pedagógica em Angola',
      excerpt:
        'Como a Dream Yetu está a revolucionar a educação em Angola com métodos inovadores e inclusivos.',
      image: classroomImg,
      author: 'Equipa Dream Yetu',
      date: '1 Jan 2025',
      category: 'Inovação',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" className="group">
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
