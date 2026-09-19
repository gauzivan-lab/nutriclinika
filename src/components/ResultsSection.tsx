import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CTAButton from './CTAButton';
import { openWhatsApp } from '../utils/whatsapp';
import 'swiper/css';
import 'swiper/css/navigation';

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
    openWhatsApp('Здравствуйте! Хочу записаться на бесплатную консультацию.');
  };

  return (
    <section id="reviews" className="relative py-16 bg-[#F9F6F1] overflow-hidden scroll-mt-[120px] sm:scroll-mt-[140px]">
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-accent-100/20 rounded-full blur-[90px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 inline-block">
            Отзывы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
            Мы помогли уже сотням клиентов с похожими запросами, как у вас
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Вот лишь несколько историй. За каждой стоит путь: от тревожности, веса, слабости и вопросов без ответов к ясности, восстановлению и возвращению к себе.
          </p>
        </div>

        {/* Results Carousel: multi-column on desktop, single column on mobile */}
        <div className="mb-10 results-carousel">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.15}
            navigation
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 }
            }}
            className="w-full pb-2"
          >
            {results.map((result, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white h-[420px] flex items-center justify-center transition-all duration-300 hover:border-primary-200 hover:shadow-[0_12px_32px_-8px_rgba(41,112,42,0.14)]">
                  <img
                    src={result.image}
                    alt={`История успеха ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-medium text-gray-800 mb-6">
            У каждого свой путь.
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
