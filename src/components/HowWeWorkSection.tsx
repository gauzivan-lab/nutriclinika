import React, { useEffect } from 'react';
import { Search, ListTodo, MessageSquareMore, Target, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const steps = [
  {
    id: 1,
    icon: null,
    imageUrl: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/3XI_IIfc6UW1aAHnpMqAxg.png',
    title: 'Чекап организма',
    description: 'Анализы по списку от врача. Минимум лишнего — максимум смысла. Вы можете принести свои — мы их учтём. Это отправная точка.'
  },
  {
    id: 2,
    icon: Search,
    title: 'Разбор анализов',
    description: 'Глубокое объяснение от врача: что происходит с телом, где сбои, что важно именно сейчас. Это снимает тревожность и даёт ясность.'
  },
  {
    id: 3,
    icon: ListTodo,
    title: 'Индивидуальный план',
    description: 'Подбираем питание, БАДы, режим, обследования — без перегруза и строго под ваши задачи и образ жизни.'
  },
  {
    id: 4,
    icon: MessageSquareMore,
    title: 'Сопровождение',
    description: 'Регулярный контакт. Поддержка, настройка протокола, ответы на вопросы. Вы не остаетесь один на один с рекомендациями.'
  },
  {
    id: 5,
    icon: Target,
    title: 'Контроль и результат',
    description: 'Отслеживаем изменения, корректируем маршрут, доводим до устойчивого результата. Здоровье — это не чекбокс. Это путь. И мы рядом.'
  }
];

const HowWeWorkSection: React.FC = () => {
  const handleConsultation = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 bg-[#FFFDF9] overflow-hidden">
      {/* Top right image */}
      <div className="absolute top-0 right-0 w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] z-10">
        <img
          src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/WD6XQ7i1v0-Qrec0bgF8UA.png"
          alt="Декоративное изображение"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom left image */}
      <div className="absolute bottom-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] z-10">
        <img
          src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/J372gKMFhEO_o5F7tgWL2Q.png"
          alt="Декоративное изображение"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EDF5ED]/20 via-transparent to-[#EDF5ED]/20" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-100/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-100/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal-scale">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            Мы помогаем найти причину вашего состояния — и подбираем этап восстановления под вас.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Когда вы не знаете, с чего начать, или устали от поверхностных решений —
            мы начинаем с глубины: анализируем, объясняем и выстраиваем маршрут к вашему результату.
            Вы проходите только то, что действительно нужно. И не остаетесь одни — мы сопровождаем.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 rounded-full" />

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={`relative flex items-center ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-6`}
                >
                  {/* Timeline dot with enhanced pulse effect */}
                  <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 z-10 reveal-scale">
                    <div className="relative w-8 h-8 rounded-full border-3 border-primary-500 bg-white shadow-md shadow-primary-500/20 flex items-center justify-center group">
                      <span className="text-sm font-bold text-primary-500 group-hover:scale-125 transition-transform duration-300">
                        {step.id}
                      </span>
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-full bg-primary-200/20 animate-pulse" />
                      {/* Multiple pulse rings */}
                      <div className="absolute -inset-2 rounded-full border-2 border-primary-500/20 animate-[ping_2s_ease-out_infinite]" />
                      <div className="absolute -inset-3 rounded-full border border-primary-500/10 animate-[ping_2.5s_ease-out_infinite]" />
                      <div className="absolute -inset-4 rounded-full border border-primary-500/5 animate-[ping_3s_ease-out_infinite]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-16 sm:ml-0 ${isEven ? 'sm:pr-16 reveal-left' : 'sm:pl-16 reveal-right'}`}>
                    <div className="bg-gradient-to-br from-primary-50/80 via-white to-accent-50/20 rounded-xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out hover:-translate-y-1 group border border-primary-100/30 hover:border-primary-200/50">
                      <div className="flex flex-col items-start gap-3 mb-3">
                        <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-500">
                          {step.icon ? (
                            <Icon size={48} strokeWidth={1.5} className="text-accent-500 transition-colors duration-300 group-hover:text-accent-600" />
                          ) : (
                            <img 
                              src={step.imageUrl} 
                              alt={step.title}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold bg-gradient-to-br from-accent-600 to-accent-400 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-105">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm transform transition-all duration-300 group-hover:translate-x-1">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-2xl mx-auto mt-16 text-center reveal">
          <CTAButton 
            text="Записаться на первый шаг" 
            primary={true}
            onClick={handleConsultation}
            className="text-base group"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;