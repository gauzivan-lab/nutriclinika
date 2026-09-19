import React, { useEffect } from 'react';
import { Search, ListTodo, MessageSquareMore, Target } from 'lucide-react';
import CTAButton from './CTAButton';
import { openWhatsApp } from '../utils/whatsapp';

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
    openWhatsApp('Здравствуйте! Хочу записаться на бесплатную консультацию.');
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
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-secondary-100/25 rounded-full blur-[90px] translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-scale">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 inline-block">
            Как мы работаем
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
            Мы помогаем найти причину вашего состояния — и подбираем этап восстановления под вас
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Когда вы не знаете, с чего начать, или устали от поверхностных решений —
            мы начинаем с глубины: анализируем, объясняем и выстраиваем маршрут к вашему результату.
            Вы проходите только то, что действительно нужно. И не остаетесь одни — мы сопровождаем.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-stone-200" />

          <div className="space-y-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative flex gap-6 group reveal">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center">
                    <span className="text-base font-bold text-primary-600">{step.id}</span>
                  </div>

                  <div className="flex-1 pb-10 pt-1.5">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      {step.icon ? (
                        <Icon size={20} strokeWidth={2} className="text-accent-500 flex-shrink-0" />
                      ) : (
                        <img src={step.imageUrl} alt="" className="w-6 h-6 object-contain flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm max-w-lg">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-2xl mx-auto mt-4 text-center reveal">
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