import { useTranslation } from 'react-i18next';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
    </>
  );
};

export default Home;
