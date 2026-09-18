import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import { Zap, Scale, FlaskConical, Stethoscope, TestTube } from 'lucide-react';
import CTAButton from './CTAButton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

type Symptom = {
  icon: React.ElementType;
  title: string;
  color: string;
  gradient: string;
  items: string[];
};

const symptoms: Symptom[] = [
  {
    icon: Zap,
    title: 'Общее самочувствие и энергия',
    color: 'primary',
    gradient: 'from-primary-500/5 via-primary-500/10 to-primary-500/5',
    items: [
      'хроническая усталость',
      'апатия и сниженное настроение',
      'нарушения сна — чувствуете себя разбитой',
      'перепады настроения, тревожность'
    ]
  },
  {
    icon: Scale,
    title: 'Вес и метаболизм',
    color: 'secondary',
    gradient: 'from-secondary-500/5 via-secondary-500/10 to-secondary-500/5',
    items: [
      'лишний вес, отёчность',
      'вес не уходит даже при диетах и спорте',
      'эмоциональное переедание',
      'инсулинорезистентность, преддиабет'
    ]
  },
  {
    icon: FlaskConical,
    title: 'Гормональный фон и возрастные изменения',
    color: 'accent',
    gradient: 'from-accent-500/5 via-accent-500/10 to-accent-500/5',
    items: [
      'менопауза, ПМС',
      'низкое либидо',
      'нарушение менструального цикла',
      '"как будто тело стареет раньше времени"',
      'повышенный холестерин'
    ]
  },
  {
    icon: Stethoscope,
    title: 'Пищеварение и ЖКТ',
    color: 'primary',
    gradient: 'from-primary-600/5 via-primary-600/10 to-primary-600/5',
    items: [
      'вздутие, тяжесть, нестабильный стул',
      'СИБР, кандидоз',
      'гастрит или рефлюкс (изжога)',
      'нет аппетита или чрезмерная тяга к сладкому'
    ]
  },
  {
    icon: TestTube,
    title: 'Анализы и дефициты',
    color: 'secondary',
    gradient: 'from-secondary-600/5 via-secondary-600/10 to-secondary-600/5',
    items: [
      '"анализы плохие, но никто не объяснил"',
      'анемия, дефицит железа',
      'низкий витамин D, B12, магний',
      'непонятные результаты чекапов'
    ]
  }
];

const SymptomsSection: React.FC = () => {
  const handleConsultation = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#FFFDF9] relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-primary-50/40 animate-gradient" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-100/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-[200px] sm:w-[300px] mx-auto mb-8">
            <img
              src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/O0awHyNrgEWdOFSAKDhyLg.png"
              alt="Декоративное изображение"
              className="w-full h-auto animate-float"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            С какими состояниями и запросами к нам приходят
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Мы не лечим «по частям» — мы смотрим на человека целиком. Ниже — примеры симптомов, с которыми мы работаем ежедневно.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100/30 hover:border-gray-200/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl transition-all duration-500 transform group-hover:scale-110 bg-gradient-to-br ${symptom.gradient}`}>
                      <Icon 
                        size={32} 
                        className={`text-${symptom.color}-500 transition-all duration-500 transform group-hover:rotate-12`}
                      />
                    </div>
                    <h3 className={`text-lg font-semibold text-${symptom.color}-500`}>
                      {symptom.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {symptom.items.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-gray-700 transform transition-transform duration-300 hover:translate-x-1"
                      >
                        <span className={`block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-${symptom.color}-500/50`} />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden mb-12">
          <Swiper
            modules={[Navigation, Pagination, EffectCards]}
            effect="cards"
            grabCursor={true}
            navigation
            pagination={{ clickable: true }}
            className="w-full max-w-sm mx-auto h-[500px]"
          >
            {symptoms.map((symptom, index) => {
              const Icon = symptom.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 h-full text-white">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-md`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">
                        {symptom.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {symptom.items.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3"
                        >
                          <span className="block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-white/50" />
                          <span className="text-base leading-relaxed text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            У вас может быть один симптом или десятки. Мы поможем найти общую причину — и с этого начнётся восстановление.
          </p>
          <CTAButton
            text="Проконсультироваться по симптомам"
            primary={true}
            onClick={handleConsultation}
            className="text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;