import React from 'react';
import CTAButton from './CTAButton';
import SymptomsSlider from './SymptomsSlider';
import { openWhatsApp } from '../utils/whatsapp';

const Hero: React.FC = () => {
  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.location.hash = 'services';
    }
  };

  const handleConsultation = () => {
    openWhatsApp('Здравствуйте! Хочу записаться на бесплатную консультацию.');
  };

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-[#FDFCF9] to-[#F9F6F1] relative overflow-hidden">      
      <div className="flex-1 flex items-start pt-8 sm:pt-24 pb-12 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
            <div className="max-w-3xl">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 mb-6 sm:mb-12 leading-tight tracking-tight">
                Вы чувствуете, что с телом что-то не так, но не знаете, с чего начать, или не можете найти причину?
              </h1>
              
              <div className="mb-6 sm:mb-10 text-gray-800 text-sm sm:text-base md:text-lg space-y-4 sm:space-y-6">
                <p className="leading-relaxed max-w-2xl tracking-wide font-semibold text-base sm:text-lg md:text-xl">
                  Лишний вес, усталость, скачки настроения, ЖКТ или гормоны: сигналы есть, а{' '}
                  <em className="font-extrabold not-italic text-primary-700">
                    ясности нет
                  </em>
                </p>

                <div className="max-w-2xl border-l-4 border-accent-500 pl-4 sm:pl-6 py-1">
                  <span className="block text-accent-600 font-bold text-base sm:text-xl">
                    «Помогите найти причину»
                  </span>
                  <span className="block mt-1 text-gray-600 text-sm sm:text-base">
                    Именно с этими словами к нам приходят чаще всего.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-6 sm:mb-10">
                <CTAButton
                  text="Хочу понять, что со мной"
                  primary={true}
                  onClick={handleLearnMore}
                  className="text-sm sm:text-base"
                />
                <CTAButton
                  text="Записаться на консультацию"
                  onClick={handleConsultation}
                  className="text-sm sm:text-base"
                />
              </div>

              <p className="leading-relaxed max-w-2xl text-gray-700 text-sm sm:text-base tracking-wide">
                Мы соединяем нутрициологию, медицину и образ жизни, чтобы выявить первопричины и выстроить стратегию{' '}
                <span className="font-semibold text-accent-600">восстановления</span>.
              </p>
            </div>

            <div className="w-full lg:w-[420px] h-[300px] sm:h-[500px] lg:h-[600px] flex-shrink-0">
              <SymptomsSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;