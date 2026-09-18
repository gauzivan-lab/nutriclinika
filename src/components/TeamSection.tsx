import React from 'react';
import CTAButton from './CTAButton';

const TeamSection: React.FC = () => {
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
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-end">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/9WIyUFGtTU-zt-c3Nfc9zg.jpg"
          alt="Команда Нутриклиники"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-primary-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-8 sm:pb-32 pt-16 sm:pt-20">
        <div className="max-w-3xl backdrop-blur-[2px] p-4 sm:p-8 rounded-2xl bg-black/10">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight tracking-tight drop-shadow-lg">
            <span className="block mb-2">Добро пожаловать в Нутриклинику</span>
            <span className="block text-[0.9em] text-primary-100">— центр восстановления здоровья,</span>
            <span className="block text-[0.9em] bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">где вас видят целиком</span>
          </h2>
          
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-12 leading-relaxed tracking-wide drop-shadow-lg font-medium">
            Мы команда специалистов, объединённых одной целью — помочь вам понять, что происходит с телом, и пройти путь восстановления с заботой и профессионализмом.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <CTAButton 
              text="Познакомиться с подходом" 
              primary={true} 
              onClick={handleLearnMore}
              className="text-sm sm:text-base backdrop-blur-sm"
            />
            <CTAButton 
              text="Записаться на консультацию" 
              onClick={handleConsultation}
              className="text-sm sm:text-base backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;