import React from 'react';

const ClinicHistorySection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FFFDF9] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/5 via-transparent to-accent-500/5 animate-gradient" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-100/30 to-primary-200/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 animate-slow-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-accent-100/30 to-accent-200/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 animate-slow-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="block text-primary-600 mb-3">Почему мы создали Нутриклинику?</span>
            <span className="block text-base sm:text-lg text-gray-600 font-medium mt-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-primary-100/20">
              У каждой клиники есть история. Наша — о поиске ответов, доверии к телу и желании сделать медицинскую помощь глубокой, а не поверхностной.
            </span>
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <blockquote className="relative bg-white/70 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary-500 shadow-lg">
              <div className="absolute -top-4 -left-4 text-6xl text-primary-500/20 font-serif">"</div>
              <p className="text-gray-700 relative z-10 text-sm sm:text-base">
                Всё началось с моего личного пути. Я, как и многие, долго искала ответы: почему устаю, почему с телом что-то не так, почему врачи не видят связи. Оказалось — дело не в том, чтобы лечить симптомы. А в том, чтобы понимать первопричины. И работать с телом, как с системой.
              </p>
              <p className="text-gray-700 mt-4 relative z-10 text-sm sm:text-base">
                Так появилась Нутриклиника — место, где мы объединяем нутрициологию, медицину и осознанный образ жизни. Мы не гонимся за модой, не подбираем БАДы по трендам. Мы разбираемся в причинах, сопровождаем и ведем к устойчивому результату. Внимательно, по-настоящему. От человека к человеку.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-primary-500/20 font-serif rotate-180">"</div>
            </blockquote>
          </div>

          <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-xl p-6 mb-8 border border-primary-100 hover:border-primary-200 transition-all duration-300 group hover:shadow-lg">
            <p className="text-gray-700 mb-3 flex items-center gap-2 text-sm sm:text-base">
              <span className="text-2xl">💬</span>
              Больше кейсов, отзывов и экспертного контента — в Telegram-канале основателя:
            </p>
            <a 
              href="https://t.me/nutriclinica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base"
            >
              @nutriclinica
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12 group max-w-2xl mx-auto">
            <img
              src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/9WIyUFGtTU-zt-c3Nfc9zg.jpg"
              alt="Наша команда врачей и специалистов"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg">
              <p className="text-white/90 text-xs sm:text-sm font-medium">Наша команда врачей и специалистов</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="max-w-4xl mx-auto space-y-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-100/20 shadow-lg">
          <div className="text-center space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-primary-600">
              Познакомьтесь с нашей клиникой за 1 минуту
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Как мы работаем, кто стоит за Нутриклиникой и почему пациенты нам доверяют.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 animate-pulse" />
            <iframe
              src="https://kinescope.io/embed/dDbDhwgqGmSVgyVacwaCts"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              className="w-full h-full relative z-10"
              style={{ border: 0 }}
              allowFullScreen
            />
            <div className="absolute inset-0 border-2 border-primary-200/20 rounded-xl transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg sm:text-2xl font-semibold text-gray-800">
              Нутриклиника — это не просто нутрициология или терапия.
              <br className="hidden sm:block" />
              <span className="text-primary-600">Это команда, подход и результат.</span>
            </p>
            <p className="text-base sm:text-xl font-medium bg-gradient-to-r from-[#29702A] to-[#4CAF50] bg-clip-text text-transparent">
              Мы работаем от причины —
              <br className="hidden sm:block" />
              и сопровождаем до устойчивых изменений.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHistorySection;