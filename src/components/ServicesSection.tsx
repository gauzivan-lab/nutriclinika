import React, { useState } from 'react';
import { Check, Clock, Gift, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';

const services = [
  {
    title: 'Разбор анализов',
    price: '990 ₽',
    orderUrl: 'https://нутриклиника.online/razbor',
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
    orderUrl: 'https://нутриклиника.online/expres',
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
    orderUrl: 'https://нутриклиника.online/consultation',
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
    orderUrl: 'https://нутриклиника.online/bazovii',
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
    orderUrl: 'https://нутриклиника.online/teamcouch',
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
    orderUrl: 'https://нутриклиника.online/vip',
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

  const handleOrder = (orderUrl: string) => {
    window.open(orderUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-16 bg-[#F9F6F1] relative overflow-hidden scroll-mt-[120px] sm:scroll-mt-[140px]">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-primary-100/25 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 inline-block">
            Форматы работы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
            Выберите формат, который подходит именно вам
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            От разбора анализов до сопровождения на 3 месяца.
            Вы можете начать с одного шага — а мы поможем выстроить путь.
          </p>
          <p className="text-sm text-gray-600 border-t border-b border-gray-200 py-3 px-4 inline-block">
            Затрудняетесь в выборе? Напишите нам на WhatsApp — поможем определиться.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const isVIP = index === services.length - 1;
            
            return (
              <div
                key={index}
                className={`
                  rounded-2xl border
                  transition-all duration-300 ease-out
                  flex flex-col overflow-hidden group
                  ${isVIP
                    ? 'md:col-span-2 lg:col-span-3 bg-primary-900 border-primary-900 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.35)]'
                    : 'bg-white border-stone-200 hover:shadow-[0_12px_32px_-8px_rgba(41,112,42,0.18)] hover:border-primary-200'
                  }
                `}
              >
                {!isVIP && (
                  <div className={`h-1 w-full ${service.primary ? 'bg-primary-500' : 'bg-stone-200'}`} />
                )}

                {isVIP ? (
                  <div className="flex flex-col lg:flex-row gap-8 p-6 sm:p-8 relative">
                    <div className="flex-1">
                      <div className="mb-6">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-400 mb-3 block">
                          {service.tag}
                        </span>
                        <div className="flex flex-col gap-1 mb-4">
                          <h3 className="text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                          {service.subtitle && (
                            <p className="text-lg text-primary-200">{service.subtitle}</p>
                          )}
                        </div>
                        <p className="text-xl font-semibold text-white mb-3">{service.mainBenefit}</p>
                        <p className="text-primary-100/80 text-base">{service.description}</p>
                        <div className="mt-4 flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-white tabular-nums">{service.price}</span>
                        </div>
                      </div>

                      <div className="space-y-3 border-t border-white/10 pt-5">
                        {service.features.slice(0, isVipDetailsOpen ? service.features.length : 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check size={18} className="text-secondary-400 flex-shrink-0 mt-1" />
                            <span className="text-primary-50/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setIsVipDetailsOpen(!isVipDetailsOpen)}
                        className="flex items-center gap-2 text-secondary-400 font-medium mt-4 hover:text-secondary-300 transition-colors"
                      >
                        {isVipDetailsOpen ? 'Свернуть' : 'Подробнее о тарифе'}
                        <ChevronDown
                          className={`transition-transform duration-300 ${isVipDetailsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isVipDetailsOpen && (
                        <div className="mt-6 space-y-4 animate-fade-in">
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                              <Clock size={20} className="text-secondary-400" />
                              <span className="font-medium text-white">{service.installment.text}</span>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium text-white">Подарки по итогам работы:</p>
                              {service.installment.gifts.map((gift, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <Gift size={16} className="text-secondary-400" />
                                  <span className="text-primary-100/90">{gift}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <CTAButton
                        text="Оставить заявку"
                        onClick={() => handleOrder(service.orderUrl)}
                        primary={false}
                        className="w-full mt-6"
                      />
                    </div>

                    <div className="lg:w-[300px] h-[400px] lg:h-auto rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt="VIP программа"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${service.primary ? 'text-primary-600' : 'text-gray-500'}`}>
                          {service.tag}
                        </span>
                        {service.recommended && (
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded-full">
                            Популярное
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1 mb-3">
                        <h3 className="text-lg font-bold text-gray-900">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-gray-500">{service.subtitle}</p>
                        )}
                      </div>
                      <p className="text-base font-semibold text-gray-900 mb-2">{service.mainBenefit}</p>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900 tabular-nums">{service.price}</span>
                      </div>
                    </div>

                    <div className="flex-grow border-t border-stone-100 pt-4">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check
                              size={16}
                              className={`flex-shrink-0 mt-0.5 ${service.primary ? 'text-primary-500' : 'text-gray-400'}`}
                            />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <CTAButton
                      text="Записаться"
                      onClick={() => handleOrder(service.orderUrl)}
                      primary={service.primary}
                      className="w-full text-sm mt-auto"
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