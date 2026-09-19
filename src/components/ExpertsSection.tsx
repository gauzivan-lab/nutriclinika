import React from 'react';
import { Award, Clock, Users, Star, Sparkles, Gift, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';
import { openWhatsApp } from '../utils/whatsapp';

// Base card component with common styling
const BaseExpertCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 transition-all duration-300 hover:border-primary-200 hover:shadow-[0_12px_32px_-8px_rgba(41,112,42,0.14)] group h-[800px] flex flex-col">
    {children}
  </div>
);

// Карина Подовникова
const KarinaCard = () => (
  <BaseExpertCard>
    <div className="relative h-[400px] overflow-hidden flex-shrink-0">
      <img
        src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/e9jq2qMKMUah4pbL9b2nGg.jpg"
        alt="Нутрициолог Карина Подовникова"
        className="w-full h-full object-cover object-[85%_top] scale-125 transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4 flex-grow flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Нутрициолог и основатель клиники Алена Щербакова</h3>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
          <p className="text-base text-gray-700 leading-relaxed">Врач в области питания, долголетия и опытом профилактики заболеваний. Доктор Натуропатии, Системный Нутрициолог, фитотерапевт.</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
          <p className="text-base text-gray-700">стаж 20 лет</p>
        </div>
      </div>
    </div>
  </BaseExpertCard>
);

// Анастасия Липаткина 1
const Anastasia1Card = () => (
  <BaseExpertCard>
    <div className="relative h-[400px] overflow-hidden flex-shrink-0">
      <img
        src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/MKD8PlSr9kO7SJseFxaAYQ.jpg"
        alt="Старшая медсестра Липаткина Анастасия"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4 flex-grow flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Нутрициолог Карина Подовникова</h3>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
          <p className="text-base text-gray-700 leading-relaxed">Сертифицированный нутрициолог, член ассоциации нутрициологов и кучей по здоровью</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
          <p className="text-base text-gray-700">стаж 3 года</p>
        </div>
      </div>
    </div>
  </BaseExpertCard>
);

// Анастасия Липаткина 2
const Anastasia2Card = () => (
  <BaseExpertCard>
    <div className="relative h-[400px] overflow-hidden flex-shrink-0">
      <img
        src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/B5aNfVR5D0OjScPvoO4MtA.jpg"
        alt="Старшая медсестра Липаткина Анастасия"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4 flex-grow flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Старшая медсестра Липаткина Анастасия</h3>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
          <p className="text-base text-gray-700 leading-relaxed">аккредитация сестринское дело</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
          <p className="text-base text-gray-700">опыт в управляющей должности 5 лет</p>
        </div>
      </div>
    </div>
  </BaseExpertCard>
);

// Анастасия Липаткина 3
const Anastasia3Card = () => (
  <BaseExpertCard>
    <div className="relative h-[400px] overflow-hidden flex-shrink-0">
      <img
        src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/vu2e-2siakazOPArazIc8Q.jpg"
        alt="Старшая медсестра Липаткина Анастасия"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4 flex-grow flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Медицинская сестра Виктория Сиговатова</h3>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
          <p className="text-base text-gray-700 leading-relaxed">Медицинская сестра-универсал, аккредитация сестринское дело.</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
          <p className="text-base text-gray-700">стаж 3 года</p>
        </div>
      </div>
    </div>
  </BaseExpertCard>
);

const ExpertsSection: React.FC = () => {
  const handleConsultation = () => {
    openWhatsApp('Здравствуйте! Хочу записаться на бесплатную консультацию.');
  };

  return (
    <section id="doctors" className="py-16 bg-[#F9F6F1] relative overflow-hidden scroll-mt-[120px] sm:scroll-mt-[140px]">
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-accent-100/20 rounded-full blur-[90px] -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 inline-block">
            Команда клиники
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
            Врачи, нутрициологи и специалисты, которые видят картину целиком
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            В Нутриклинике работают не просто «разные специалисты». Мы — команда, где нутрициология, медицина, образ жизни и ментальное здоровье соединяются, чтобы вы получили результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <KarinaCard />
          <Anastasia1Card />
          <Anastasia2Card />
          <Anastasia3Card />
        </div>

        {/* Bottom text and CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Мы работаем в связке: врач, нутрициолог, коуч —
            <br />
            чтобы вы не оставались один на один.
            <br className="hidden sm:block" />
            <span className="inline-block mt-2 font-medium text-primary-600 bg-primary-50/50 px-3 py-1 rounded-lg">
              Оказываем полное сопровождение до результата
            </span>
          </p>
          <CTAButton
            text="Записаться на консультацию"
            primary={true}
            onClick={handleConsultation}
            className="text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;