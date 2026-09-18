import React from 'react';
import CTAButton from './CTAButton';
import SymptomsSlider from './SymptomsSlider';

const Hero: React.FC = () => {
  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultation = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-[#FDFCF9] to-[#F9F6F1] relative overflow-hidden">      
      <div className="flex-1 flex items-start pt-8 sm:pt-24 pb-12 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
            <div className="max-w-3xl">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 mb-6 sm:mb-12 leading-tight tracking-tight">
                Вы чувствуете, что с телом что-то не так — не знаете, с чего начать или не можете найти причину?
              </h1>
              
              <div className="mb-6 sm:mb-12 text-gray-800 text-sm sm:text-base md:text-lg space-y-4 sm:space-y-8">
                <p className="leading-relaxed max-w-2xl tracking-wide font-semibold text-base sm:text-lg md:text-xl">
                  Лишний вес, усталость, скачки настроения, ЖКТ или гормоны — сигналы есть, а{' '}
                  <em className="font-extrabold italic text-gray-900 bg-primary-50/70 px-2 py-0.5 rounded-md">
                    ясности нет
                  </em>
                </p>
                
                <div className="max-w-2xl bg-gradient-to-br from-accent-500/10 via-accent-500/5 to-transparent p-3 sm:p-6 rounded-2xl backdrop-blur-sm border border-accent-500/20">
                  <span className="inline-block text-accent-500 font-extrabold bg-accent-50/50 px-3 sm:px-5 py-1.5 rounded-full text-base sm:text-xl">
                    "Помогите найти причину"
                  </span>
                  <span className="block mt-2 text-gray-700 font-semibold tracking-wide text-sm sm:text-lg">
                    — именно с этими словами к нам приходят чаще всего.
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-4 sm:mb-8">
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

              <p className="leading-relaxed max-w-2xl text-gray-800 text-sm sm:text-lg md:text-xl tracking-wide mt-4 mb-8 bg-white/30 p-3 sm:p-6 rounded-2xl backdrop-blur-sm border border-primary-100/20 font-semibold">
                Мы соединяем нутрициологию, медицину и образ жизни, чтобы выявить первопричины и выстроить стратегию{' '}
                <em className="font-extrabold italic text-accent-500 relative inline-block">
                  восстановления
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500/30"></span>
                </em>
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