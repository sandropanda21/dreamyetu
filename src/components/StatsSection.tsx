import { useTranslation } from 'react-i18next';
import { Globe2, GraduationCap, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Globe2,
      number: '5',
      suffix: '+',
      label: t('stats.experience') || 'Years of Language Education Experience',
    },
    {
      icon: Users,
      number: '33',
      suffix: '+',
      label: t('stats.teachers') || 'Qualified Teachers and language experts',
    },
    {
      icon: GraduationCap,
      number: '78',
      suffix: '+',
      label: t('stats.enrolled') || 'Learners Enrolled in Educal Courses',
    },
  ];

  return (
    <section className="pt-5 pb-10 sm:pb-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center border-[.25rem] border-dashed border-hero border-accent rounded-sm p-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-soft mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.number}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium max-w-xs mx-auto">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
