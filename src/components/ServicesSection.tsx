import React, { useState } from 'react';
import { Award, Clock, Users, Star, Sparkles, Gift, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';

const services = [
  {
    title: 'Разбор анализов',
    price: '990 ₽',
    description: 'Поймите, что происходит с вашим телом',
    mainBenefit: 'Получите ясность и план действий за 20 минут',
    features: [
      'Врач проведет разбор в аудио-чате с обратной связью',
      'Объяснит, что происходит с телом и с чего начать',
      'Получите пошаговый план действий'
    ],
    primary: true,
    recommended: true,
    tag: 'Быстрый старт'
  },
  {
    title: 'Экспресс-консультация',
    price: '2 900 ₽',
    description: 'Быстрая поддержка в процессе',
    mainBenefit: 'Корректировка курса за 30 минут',
    features: [
      'Письменные рекомендации по питанию и БАДам',
      'До 30 минут',
      'Онлайн чат'
    ],
    primary: false,
    recommended: false,
    tag: 'Поддержка'
  },
  {
    title: 'Консультация нутрициолога',
    price: '5 000 ₽',
    description: 'Глубокий разбор состояния',
    mainBenefit: 'Комплексный анализ и персональные рекомендации',
    features: [
      'Длительность 1 час',
      'Проводят специалисты Клиники кроме Щербаковой',
      'Индивидуальные рекомендации'
    ],
    primary: false,
    recommended: false,
    tag: 'Глубокий анализ'
  },
  {
    title: 'Базовый пакет',
    subtitle: '3 консультации с рекомендациями',
    price: '15 000 ₽',
    description: 'Комплексный подход к здоровью',
    mainBenefit: 'Полное понимание и поэтапный план восстановления',
    features: [
      '3 онлайн/офлайн сессии в течение 1 месяца',
      'Длительность 1-2 часа',
      'Рекомендации в виде трекера на 3-4 месяца для самостоятельной работы'
    ],
    primary: false,
    recommended: false,
    tag: 'Комплексно'
  },
  {
    title: 'Сопровождение на 1 месяц',
    subtitle: 'от команды клиники',
    price: '30 000 ₽',
    description: 'Полная поддержка на пути к здоровью',
    mainBenefit: 'Ежедневная забота и контроль результатов',
    features: [
      'Пошаговый план, наблюдение, корректировки',
      'Ежедневная поддержка в WhatsApp/Telegram',
      'Отслеживание динамики, индивидуальный контроль',
      '4 онлайн-сессии длительностью 60 минут'
    ],
    primary: true,
    recommended: true,
    tag: 'Максимальная поддержка'
  },
  {
    title: 'VIP-программа',
    subtitle: 'от Алены Щербаковой на 3 месяца',
    price: '98 000 ₽',
    description: 'Премиальное сопровождение',
    mainBenefit: 'Персональное внимание основателя клиники',
    image: 'https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/0aeN3wjdt0KZwxKQC7Xx-A.png',
    features: [
      '4-5 консультаций в месяц (онлайн и офлайн), до 90 минут',
      'Разбор анализов и объяснение причин',
      'Письменные рекомендации по подбору БАДов и питания с ссылками',
      'Рекомендации по обследованиям и направление к специалистам',
      'Ежедневная поддержка и мониторинг 6 дней в неделю',
      'Работа с гипнокоучем для увеличения эффективности на 200%',
      'Нейросессии с Врачом для ресурса работы'
    ],
    installment: {
      text: 'Рассрочка на 3 части',
      gifts: [
        'Датчик мониторинга глюкозы',
        'Контрольный чекап анализов'
      ]
    },
    primary: true,
    recommended: false,
    tag: 'Премиум'
  }
];

const ServicesSection: React.FC = () => {
  const [isVipDetailsOpen, setIsVipDetailsOpen] = useState(false);

  const handleConsultation = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#F9F6F1] to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 via-transparent to-primary-100/40" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-100/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary-100/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-accent-100/20 rounded-full blur-[40px] -translate-x-1/2 translate-y-1/2 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 bg-clip-text text-transparent animate-fade-in">
            Выберите формат работы, который подходит именно вам
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in-up">
            От разбора анализов до сопровождения на 3 месяца.
            Вы можете начать с одного шага — а мы поможем выстроить путь.
          </p>
          <p className="text-sm text-accent-600 italic bg-accent-50/50 py-2 px-4 rounded-full inline-block animate-fade-in-up delay-200">
            Если вы затрудняетесь в выборе и сомневаетесь, то напишите нам на WhatsApp и мы вам поможем определиться
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const isVIP = index === services.length - 1;
            
            return (
              <div 
                key={index}
                className={`
                  bg-white/80 backdrop-blur-sm rounded-xl shadow-lg
                  transition-all duration-500 ease-out
                  animate-slide-in-up hover:-translate-y-2 hover:shadow-2xl
                  border border-accent-100/30 group
                  ${isVIP ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-accent-50 via-white to-accent-50/30' : ''}
                  ${service.primary ? 'ring-2 ring-primary-500/20 hover:ring-primary-500/40' : 'hover:border-accent-200/50'}
                  flex flex-col
                  [animation-delay:${index * 100}ms]
                  relative overflow-hidden
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`
                  absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium
                  ${service.primary ? 'bg-primary-100 text-primary-700' : 'bg-accent-100 text-accent-700'}
                `}>
                  {service.tag}
                </div>

                {service.recommended && (
                  <div className="absolute -right-12 top-6 bg-primary-500 text-white px-12 py-1 text-sm font-medium transform rotate-45 shadow-lg z-10">
                    Популярное
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {isVIP ? (
                  <div className="flex flex-col lg:flex-row gap-8 p-6 relative">
                    <div className="flex-1">
                      <div className="mb-6 pt-8">
                        <div className="flex flex-col gap-1 mb-4">
                          <h3 className="text-2xl font-bold text-[#B5231D] group-hover:text-[#8A1B16] transition-colors">
                            {service.title}
                          </h3>
                          {service.subtitle && (
                            <p className="text-lg text-gray-600">{service.subtitle}</p>
                          )}
                        </div>
                        <p className="text-xl font-semibold text-gray-900 mb-3">{service.mainBenefit}</p>
                        <p className="text-gray-700 text-base">{service.description}</p>
                        <div className="mt-4 inline-block bg-primary-50 px-4 py-2 rounded-lg">
                          <span className="text-2xl font-bold text-primary-700">{service.price}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {service.features.slice(0, isVipDetailsOpen ? service.features.length : 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/feature">
                            <Star size={20} className="text-[#B5231D] flex-shrink-0 mt-1 group-hover/feature:scale-110 transition-transform" />
                            <span className="text-gray-700 group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setIsVipDetailsOpen(!isVipDetailsOpen)}
                        className="flex items-center gap-2 text-[#B5231D] font-medium mt-4 hover:text-[#8A1B16] transition-all group/btn"
                      >
                        {isVipDetailsOpen ? 'Свернуть' : 'Подробнее о тарифе'}
                        <ChevronDown 
                          className={`transition-transform duration-300 group-hover/btn:scale-110 ${isVipDetailsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isVipDetailsOpen && (
                        <div className="mt-6 space-y-4 animate-fade-in">
                          <div className="bg-accent-50/50 rounded-lg p-4 border border-accent-100 group-hover:border-accent-200 transition-colors">
                            <div className="flex items-center gap-2 mb-3">
                              <Clock size={20} className="text-[#B5231D] group-hover:scale-110 transition-transform" />
                              <span className="font-medium text-[#B5231D]">{service.installment.text}</span>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium text-[#B5231D]">Подарки по итогам работы:</p>
                              {service.installment.gifts.map((gift, idx) => (
                                <div key={idx} className="flex items-center gap-2 group/gift">
                                  <Gift size={16} className="text-[#B5231D] group-hover/gift:scale-110 transition-transform" />
                                  <span className="text-gray-700 group-hover/gift:text-gray-900 transition-colors">{gift}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <CTAButton
                        text="Оставить заявку"
                        onClick={handleConsultation}
                        primary={true}
                        className="w-full mt-6 bg-[#29702A] hover:bg-[#225621] group-hover:shadow-lg transition-shadow"
                      />
                    </div>

                    <div className="lg:w-[300px] h-[400px] lg:h-auto rounded-xl overflow-hidden">
                      <img 
                        src={service.image}
                        alt="VIP программа"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 flex flex-col h-full relative pt-16">
                    <div className="mb-6">
                      <div className="flex flex-col gap-1 mb-4">
                        <h3 className={`text-lg font-bold transition-colors ${service.primary ? 'text-primary-600 group-hover:text-primary-700' : 'text-accent-600 group-hover:text-accent-700'}`}>
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-gray-600">{service.subtitle}</p>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-gray-900 mb-2">{service.mainBenefit}</p>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="inline-block bg-primary-50/50 px-3 py-1.5 rounded-lg">
                        <span className="text-xl font-bold text-primary-700">{service.price}</span>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 group/feature">
                            <Star 
                              size={16} 
                              className={`flex-shrink-0 mt-1 transition-all group-hover/feature:scale-110 ${
                                service.primary ? 'text-primary-500 group-hover:text-primary-600' : 'text-accent-500 group-hover:text-accent-600'
                              }`} 
                            />
                            <span className="text-gray-700 text-sm group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <CTAButton
                      text="Записаться"
                      onClick={handleConsultation}
                      primary={service.primary}
                      className={`
                        w-full text-sm mt-auto transition-all
                        ${service.primary 
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 group-hover:shadow-lg group-hover:shadow-primary-500/20' 
                          : 'group-hover:shadow-lg group-hover:shadow-accent-500/20'
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <p className="text-base text-gray-700 mb-2">
            Все форматы — онлайн и офлайн (г. Самара).
          </p>
          <p className="text-base text-accent-600 font-medium">
            Мы поможем выбрать оптимальный вариант под ваш запрос и бюджет.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;