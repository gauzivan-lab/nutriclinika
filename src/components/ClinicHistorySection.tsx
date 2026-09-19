import React from 'react';

const ClinicHistorySection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#FFFDF9] relative overflow-hidden scroll-mt-[120px] sm:scroll-mt-[140px]">
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-primary-100/20 rounded-full blur-[90px] translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 inline-block">
            О клинике
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Почему мы создали Нутриклинику?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl">
            У каждой клиники есть история. Наша — о поиске ответов, доверии к телу и желании сделать медицинскую помощь глубокой, а не поверхностной.
          </p>

          <blockquote className="pl-6 mb-8 space-y-4" style={{ borderLeft: '4px solid #29702A' }}>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Всё началось с моего личного пути. Я, как и многие, долго искала ответы: почему устаю, почему с телом что-то не так, почему врачи не видят связи. Оказалось — дело не в том, чтобы лечить симптомы. А в том, чтобы понимать первопричины. И работать с телом, как с системой.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Так появилась Нутриклиника — место, где мы объединяем нутрициологию, медицину и осознанный образ жизни. Мы не гонимся за модой, не подбираем БАДы по трендам. Мы разбираемся в причинах, сопровождаем и ведем к устойчивому результату. Внимательно, по-настоящему. От человека к человеку.
            </p>
          </blockquote>

          <div className="flex items-center justify-between gap-4 rounded-xl p-5 mb-10 border border-stone-200 bg-white">
            <p className="text-gray-700 text-sm sm:text-base">
              Больше кейсов, отзывов и экспертного контента — в Telegram-канале основателя
            </p>
            <a
              href="https://t.me/nutriclinica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm sm:text-base flex-shrink-0"
            >
              @nutriclinica
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Video section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Познакомьтесь с нашей клиникой за 1 минуту
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Как мы работаем, кто стоит за Нутриклиникой и почему пациенты нам доверяют.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-stone-200 aspect-video mb-8">
            <iframe
              src="https://kinescope.io/embed/dDbDhwgqGmSVgyVacwaCts"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>

          <div className="text-center space-y-2">
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              Нутриклиника — это не просто нутрициология или терапия.
              <br className="hidden sm:block" />
              Это команда, подход и результат.
            </p>
            <p className="text-base sm:text-xl font-medium text-primary-600">
              Мы работаем от причины — и сопровождаем до устойчивых изменений.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHistorySection;