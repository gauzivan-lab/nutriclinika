import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import CTAButton from './CTAButton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const results = [
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/MMHab3qIwUy0kdGT71I-DQ.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/qUGLUOqthE-NCr8gTJXmng.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/kgmbxfn8Skmt_8PZxdEu-Q.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/nwAOkw0IikK2WGdAv9ijjQ.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/sudImVzEYk2SpDnkJsxzhg.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/3Tl2qI3arU2Cvvg75RKPRQ.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/GjU7Nxi5b0SbXiFxmKm3iQ.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/wKJltFreDkGwBZMpknp3tQ.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/vRfpihK6kUS0WX12SzFCgA.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/GiQRL6kxu0WyRX96NdtQtA.jpg' },
  { image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/ioxZEqaGVEKyNgX5sCwUWw.jpg' }
];

const ResultsSection: React.FC = () => {
  const handleConsultation = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#FFFDF9] to-[#F9F6F1] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary-100/30 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-100/20 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Bottom right decorative image */}
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]">
        <img
          src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/tylLOuKik0eFC7jjKgN1hg.png"
          alt="Декоративное изображение"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            Мы помогли уже сотням клиентов с похожими запросами, как у вас
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Вот лишь несколько историй — за каждой стоит путь: от тревожности, веса, слабости и вопросов без ответов к ясности, восстановлению и возвращению к себе.
          </p>
        </div>

        {/* Results Carousel */}
        <div className="max-w-xl mx-auto mb-10">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
          >
            {results.map((result, index) => (
              <SwiperSlide key={index} className="bg-gray-100">
                <img
                  src={result.image}
                  alt={`История успеха ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-medium text-gray-800 mb-6">
            У каждого — свой путь.
            <span className="block mt-2 text-primary-600 font-semibold">
              Но у всех он начинается с одного:
            </span>
          </p>
          <CTAButton
            text="Понять причину и получить поддержку"
            primary={true}
            onClick={handleConsultation}
            className="text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;