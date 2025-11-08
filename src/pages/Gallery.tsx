import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 🖼️ Importa 10 imagens diferentes
import img1 from '../../public/galeeria1.jpeg';
import img2 from '../../public/galeeria2.jpeg';
import img3 from '../../public/galeeria3.jpeg';
import img4 from '../../public/galeeria4.jpeg';
import img5 from '../../public/galeeria5.jpeg';
import img6 from '../../public/galeeria6.jpeg';
import img7 from '../../public/galeeria7.jpeg';
import img8 from '../../public/galeeria1101.jpeg.jpeg';
import img9 from '../../public/galeeria1103.jpeg.jpeg';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  // 🗂️ Lista de imagens (sem repetição)
  const images = [
    { src: img1, category: 'education', title: t('gallery.images.category1') },
    { src: img2, category: 'events', title: t('gallery.images.category2') },
    { src: img3, category: 'capetown', title: t('gallery.images.category3') },
    { src: img4, category: 'teachers', title: t('gallery.images.category4') },
    { src: img5, category: 'education', title: t('gallery.images.category5') },
    { src: img6, category: 'events', title: t('gallery.images.category6') },
    { src: img7, category: 'capetown', title: t('gallery.images.category7') },
    { src: img8, category: 'teachers', title: t('gallery.images.category8') },
    { src: img9, category: 'education', title: t('gallery.images.category9') },
  ];

  // 🧩 Filtros
  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'education', label: t('gallery.filters.education') },
    { id: 'events', label: t('gallery.filters.events') },
    { id: 'capetown', label: t('gallery.filters.capetown') },
    { id: 'teachers', label: t('gallery.filters.teachers') },
  ];

  // 🔍 Filtro ativo
  const filteredImages =
    filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-capeTown bg-center bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('gallery.title')}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-muted/30 top-20 z-40 backdrop-blur-sm">
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

      {/* Grade da Galeria */}
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

      {/* Modal de Imagem */}
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
    </>
  );
};

export default Gallery;
