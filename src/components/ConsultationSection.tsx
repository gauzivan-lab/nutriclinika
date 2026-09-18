import React from 'react';

const ConsultationSection: React.FC = () => {
  const handleConsultation = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-[#FFFDF9] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Green gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-500/10 to-primary-500/5" />
        
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F7921E]/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#B5231D]/10 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2" />
        
        {/* Left circular image with caption */}
        <div className="absolute top-[70%] left-[10%] -translate-y-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
          <div className="relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 sm:border-8 border-white/30 shadow-2xl">
              <img
                src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/RLFcqmljgE21pva9q9GEug.jpg"
                alt="Основатель клиники"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
              <span className="text-sm font-medium text-primary-600">Основатель клиники</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right decorative image */}
      <div className="absolute bottom-0 right-0 w-[100px] sm:w-[200px] md:w-[300px] h-[100px] sm:h-[200px] md:h-[300px]">
        <img
          src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/VarxVq-iekWmLAOVLyvx3w.png"
          alt="Декоративное изображение"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-[#B5231D] to-[#F7921E] bg-clip-text text-transparent">
            Получите предварительную консультацию{' '}
            <span className="whitespace-nowrap">(20 мин) БЕСПЛАТНО</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed">
            Чтобы вы могли задать свои вопросы, рассказать о симптомах и понять, как мы работаем — мы проводим бесплатную онлайн-консультацию.
          </p>

          {/* Button container with arrow */}
          <div className="relative flex justify-center">
            <div className="absolute right-1/4 -top-12 hidden sm:block">
              <img 
                src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/84F85XHPNECiK73skS4SdA.png"
                alt="Стрелка указатель"
                className="w-[180px] h-auto opacity-40 animate-arrow-point transform -rotate-[15deg]"
              />
            </div>
            
            <button
              onClick={handleConsultation}
              className="relative transition-transform duration-300 transform hover:-translate-y-1 group mt-20 sm:mt-12 ml-16 sm:ml-0"
            >
              <img 
                src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/n-iF7a01JEC5IauxECQhyA.png"
                alt="Онлайн запись"
                className="w-[140px] sm:w-[200px] h-auto cursor-pointer animate-pulse"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg bg-[#B5231D]/20 animate-pulse" />
              {/* Additional pulsing rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-[#B5231D]/20 animate-[ping_2s_ease-out_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-[#B5231D]/10 animate-[ping_2.5s_ease-out_infinite]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;