import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import { Zap, Scale, FlaskConical, Stethoscope, TestTube } from 'lucide-react';
import CTAButton from './CTAButton';
import { openWhatsApp } from '../utils/whatsapp';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

type Symptom = {
  icon: React.ElementType;
  title: string;
  items: string[];
};

const symptoms: Symptom[] = [
  {
    icon: Zap,
    title: 'Общее самочувствие и энергия',
    items: [
      'хроническая усталость',
      'апатия и сниженное настроение',
      'нарушения сна, чувствуете себя разбитой',
      'перепады настроения, тревожность'
    ]
  },
  {
    icon: Scale,
    title: 'Вес и метаболизм',
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
    openWhatsApp('Здравствуйте! Хочу записаться на бесплатную консультацию.');
  };

  return (
    <section className="py-16 bg-[#FFFDF9] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[380px] h-[380px] bg-primary-100/25 rounded-full blur-[90px] -translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 inline-block">
            С чем к нам приходят
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
            С какими состояниями и запросами к нам приходят
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Мы не лечим «по частям», мы смотрим на человека целиком. Ниже примеры симптомов, с которыми мы работаем ежедневно.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-stone-200 transition-all duration-300 hover:border-primary-200 hover:shadow-[0_12px_32px_-8px_rgba(41,112,42,0.14)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {symptom.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 border-t border-stone-100 pt-4">
                  {symptom.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-gray-700">
                      <span className="block w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-primary-400" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
                  <div className="bg-primary-900 rounded-xl p-6 h-full text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-secondary-400" />
                      </div>
                      <h3 className="text-base font-bold leading-snug">
                        {symptom.title}
                      </h3>
                    </div>
                    <ul className="space-y-3 border-t border-white/10 pt-4">
                      {symptom.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <span className="block w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-white/50" />
                          <span className="text-sm leading-relaxed text-white/90">{item}</span>
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
            У вас может быть один симптом или десятки. Мы поможем найти общую причину, и с этого начнётся восстановление.
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