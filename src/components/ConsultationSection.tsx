import React from 'react';
import CTAButton from './CTAButton';
import { openWhatsApp } from '../utils/whatsapp';

const ConsultationSection: React.FC = () => {
  const handleConsultation = () => {
    openWhatsApp('Здравствуйте! Хочу записаться на бесплатную консультацию.');
  };

  return (
    <section id="contact" className="py-16 bg-[#F9F6F1] relative overflow-hidden scroll-mt-[120px] sm:scroll-mt-[140px]">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto bg-primary-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-400 mb-4 inline-block">
                Бесплатно · 20 минут
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                Получите предварительную консультацию
              </h2>
              <p className="text-base sm:text-lg text-primary-100/80 mb-8 leading-relaxed">
                Чтобы вы могли задать свои вопросы, рассказать о симптомах и понять, как мы работаем — мы проводим бесплатную онлайн-консультацию.
              </p>
              <div>
                <CTAButton
                  text="Записаться на консультацию"
                  onClick={handleConsultation}
                  primary={false}
                  className="text-base"
                />
              </div>
            </div>

            <div className="w-full md:w-[280px] flex-shrink-0 relative">
              <img
                src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/RLFcqmljgE21pva9q9GEug.jpg"
                alt="Основатель клиники"
                className="w-full h-[220px] md:h-full object-cover object-[center_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-primary-900 via-primary-900/10 to-transparent" />
              <span className="absolute bottom-4 left-4 md:left-4 text-sm font-medium text-white bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Основатель клиники
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
