import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 🖼️ Importa 15 imagens diferentes
import img1 from '../../public/galeeria1.jpeg';
import img2 from '../../public/galeeria2.jpeg';
import img3 from '../../public/galeeria3.jpeg';
import img4 from '../../public/galeeria4.jpeg';
import img5 from '../../public/galeeria5.jpeg';
import img6 from '../../public/galeeria6.jpeg';
import img7 from '../../public/galeeria7.jpeg';
import img8 from '../../public/galeeria1101.jpeg.jpeg';
import img9 from '../../public/galeeria1103.jpeg.jpeg';
import img10 from '../assets/kid1.jpeg'; 
import img11 from '../assets/kid2.jpeg';  
import img12 from '../assets/kid3.jpeg';  
import img13 from '../assets/kid4.jpeg';  
import img14 from '../assets/kid5.jpeg';  

// ⭐ Importe sua nova imagem de background aqui
import heroBackground from '../assets/infantil1.jpeg';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  // 🗂️ Lista de imagens com categorias consistentes com os filtros
  const images = [
    { src: img1, category: 'aprendizado', title: 'Aprendizado Divertido' },
    { src: img2, category: 'eventos', title: 'Formatura' },
    { src: img3, category: 'brincadeiras', title: 'Brincadeiras Criativas' },
    { src: img4, category: 'professores', title: 'Dedicação dos Educadores' },
    { src: img5, category: 'aprendizado', title: 'Descobertas Diárias' },
    { src: img6, category: 'eventos', title: 'Festas Temáticas' },
    { src: img7, category: 'desenvolvimento', title: 'Crescimento Saudável' },
    { src: img8, category: 'professores', title: 'Ensino Personalizado' },
    { src: img9, category: 'aprendizado', title: 'Explorando Novos Mundos' },
    { src: img10, category: 'atividades', title: 'Arte e Expressão' },
    { src: img11, category: 'recreacao', title: 'Diversão no Parque' },
    { src: img12, category: 'aprendizado', title: 'Aprendizado Prático' },
    { src: img13, category: 'criatividade', title: 'Imaginação em Ação' },
    { src: img14, category: 'desenvolvimento', title: 'Conquistas Infantis' },
  ];

  // 🧩 Filtros
  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'aprendizado', label: 'Aprendizado' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'brincadeiras', label: 'Brincadeiras' },
    { id: 'professores', label: 'Professores' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
    { id: 'atividades', label: 'Atividades' },
    { id: 'recreacao', label: 'Recreação' },
    { id: 'criatividade', label: 'Criatividade' },
  ];

  // 🔍 Filtro ativo
  const filteredImages =
    filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
                className={
                  filter === f.id 
                    ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-md' 
                    : 'bg-white hover:bg-orange-50 text-gray-800 border border-orange-200'
                }
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
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                Nenhuma imagem encontrada para este filtro.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4 text-sm sm:text-base">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
