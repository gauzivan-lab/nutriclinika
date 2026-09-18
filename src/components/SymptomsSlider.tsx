import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const symptoms = [
  {
    image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/MTVGpgESfU2O_DoUq2NYsQ.png',
    alt: 'Лишний вес - симптом №1'
  },
  {
    image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/W14SLpVRf0Kk-wZzz4gN8Q.png',
    alt: 'Усталость и скачки настроения - симптом №2'
  },
  {
    image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/IkyR569QvEim1MjIpMVmug.png',
    alt: 'Скачки настроения - симптом №3'
  },
  {
    image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/mlj6hLsyg0OYxos-xdqD3w.png',
    alt: 'Проблемы с гормонами - симптом №4',
    caption: 'Проблемы с гормонами'
  },
  {
    image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/PBmIMACoDkSvwqRqB-Oc4A.png',
    alt: 'Проблемы с ЖКТ - симптом №5'
  }
];

const SymptomsSlider: React.FC = () => {
  return (
    <div className="w-full h-full" role="region" aria-label="Слайдер симптомов">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="w-full h-full rounded-3xl overflow-hidden"
      >
        {symptoms.map((symptom, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={symptom.image}
                alt={symptom.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              {symptom.caption && (
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-lg shadow-lg font-medium">
                  {symptom.caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SymptomsSlider;