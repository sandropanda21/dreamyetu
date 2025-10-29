import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import classroomImg from '@/assets/classroom.jpg';
import capetownImg from '@/assets/capetown.jpg';
import inclusionImg from '@/assets/inclusive-education.jpg';
import heroImg from '@/assets/hero-education.jpg';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { src: classroomImg, category: 'education', title: 'Sala de Aula Moderna' },
    { src: capetownImg, category: 'capetown', title: 'Residência Cape Town' },
    { src: inclusionImg, category: 'education', title: 'Educação Inclusiva' },
    { src: heroImg, category: 'events', title: 'Atividades Educativas' },
    { src: classroomImg, category: 'teachers', title: 'Formação de Professores' },
    { src: inclusionImg, category: 'education', title: 'Aprendizagem Sensorial' },
  ];

  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'education', label: t('gallery.filters.education') },
    { id: 'events', label: t('gallery.filters.events') },
    { id: 'capetown', label: t('gallery.filters.capetown') },
    { id: 'teachers', label: t('gallery.filters.teachers') },
  ];

  const filteredImages =
    filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <Button
                key={f.id}
                variant={filter === f.id ? 'default' : 'outline'}
                onClick={() => setFilter(f.id)}
                className={filter === f.id ? 'bg-primary hover:bg-primary-dark' : ''}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover-lift animate-fade-in"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-semibold p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
