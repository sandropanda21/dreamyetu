import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 🖼️ Importa imagens existentes
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

// 🆕 Importa novas imagens (1–29)
import nova1 from '../../public/nova1.jpeg';
import nova2 from '../../public/nova2.jpeg';
import nova3 from '../../public/nova3.jpeg';
import nova4 from '../../public/nova4.jpeg';
import nova5 from '../../public/nova5.jpeg';
import nova6 from '../../public/nova6.jpeg';
import nova7 from '../../public/nova7.jpeg';
import nova8 from '../../public/nova8.jpeg';
import nova9 from '../../public/nova9.jpeg';
import nova10 from '../../public/nova10.jpeg';
import nova11 from '../../public/nova11.jpeg';
import nova12 from '../../public/nova12.jpeg';
import nova13 from '../../public/nova13.jpeg';
import nova14 from '../../public/nova14.jpeg';
import nova15 from '../../public/nova15.jpeg';
import nova16 from '../../public/nova16.jpeg';
import nova17 from '../../public/nova17.jpeg';
import nova18 from '../../public/nova18.jpeg';
import nova19 from '../../public/nova19.jpeg';
import nova20 from '../../public/nova20.jpeg';
import nova21 from '../../public/nova21.jpeg';
import nova22 from '../../public/nova22.jpeg';
import nova23 from '../../public/nova23.jpeg';
import nova24 from '../../public/nova24.jpeg';
import nova25 from '../../public/nova25.jpeg';
import nova26 from '../../public/nova26.jpeg';
import nova27 from '../../public/nova27.jpeg';
import nova28 from '../../public/nova28.jpeg';
import nova29 from '../../public/nova29.jpeg';
// 🌄 Imagem de background
import heroBackground from '../assets/infantil1.jpeg';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  // 🗂️ Lista completa de imagens
  const images = [
    { src: img1, category: 'aprendizado', title: 'Aprendizado Divertido' },
    { src: img2, category: 'eventos', title: 'Formatura' },
    { src: img3, category: 'brincadeiras', title: 'Brincadeiras Criativas' },
    { src: img4, category: 'Equipa', title: 'Dedicação dos Educadores' },
    { src: img5, category: 'aprendizado', title: 'Descobertas Diárias' },
    { src: img6, category: 'eventos', title: 'Festas Temáticas' },
    { src: img7, category: 'desenvolvimento', title: 'Crescimento Saudável' },
    { src: img8, category: 'Equipa', title: 'Ensino Personalizado' },
    { src: img9, category: 'aprendizado', title: 'Explorando Novos Mundos' },
    { src: img10, category: 'atividades', title: 'Arte e Expressão' },
    { src: img11, category: 'recreacao', title: 'Diversão no Parque' },
    { src: img12, category: 'aprendizado', title: 'Aprendizado Prático' },
    { src: img13, category: 'criatividade', title: 'Imaginação em Ação' },
    { src: img14, category: 'desenvolvimento', title: 'Conquistas Infantis' },

    // 🆕 Novas imagens (categorias variadas)
    { src: nova1, category: 'aprendizado', title: 'Momento de Aprendizado' },
    { src: nova2, category: 'brincadeiras', title: 'Alegria e Diversão' },
    { src: nova3, category: 'eventos', title: 'Celebração Especial' },
    { src: nova4, category: 'Equipa', title: 'Trabalho em Equipa' },
    { src: nova5, category: 'criatividade', title: 'Expressão Artística' },
    { src: nova6, category: 'desenvolvimento', title: 'Crescendo Juntos' },
    { src: nova7, category: 'aprendizado', title: 'Descobrindo o Mundo' },
    { src: nova8, category: 'brincadeiras', title: 'Jogos Educativos' },
    { src: nova9, category: 'atividades', title: 'Atividades Criativas' },
    { src: nova10, category: 'recreacao', title: 'Sorrisos e Energia' },
    { src: nova11, category: 'eventos', title: 'Momentos Especiais' },
    { src: nova12, category: 'Equipa', title: 'Colaboração e Dedicação' },
    { src: nova13, category: 'aprendizado', title: 'Novas Descobertas' },
    { src: nova14, category: 'brincadeiras', title: 'Alegria Compartilhada' },
    { src: nova15, category: 'criatividade', title: 'Pequenos Artistas' },
    { src: nova16, category: 'desenvolvimento', title: 'Evolução Diária' },
    { src: nova17, category: 'aprendizado', title: 'Conhecimento em Ação' },
    { src: nova18, category: 'eventos', title: 'Celebração Escolar' },
    { src: nova19, category: 'Equipa', title: 'União e Cuidado' },
    { src: nova20, category: 'recreacao', title: 'Felicidade ao Ar Livre' },
    { src: nova21, category: 'atividades', title: 'Oficinas Criativas' },
    { src: nova22, category: 'aprendizado', title: 'Explorando Ideias' },
    { src: nova23, category: 'brincadeiras', title: 'Diversão em Grupo' },
    { src: nova24, category: 'desenvolvimento', title: 'Crescimento Positivo' },
    { src: nova25, category: 'criatividade', title: 'Mãos à Obra' },
    { src: nova26, category: 'eventos', title: 'Dia Especial' },
    { src: nova27, category: 'recreacao', title: 'Brincar e Aprender' },
    { src: nova28, category: 'aprendizado', title: 'Aprendizado Alegre' },
    { src: nova29, category: 'Equipa', title: 'Educar com Amor' },
  ];

  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'aprendizado', label: 'Aprendizado' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'brincadeiras', label: 'Brincadeiras' },
    { id: 'Equipa', label: 'Equipa' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
    { id: 'atividades', label: 'Atividades' },
    { id: 'recreacao', label: 'Recreação' },
    { id: 'criatividade', label: 'Criatividade' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);

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

      {/* Modal */}
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
