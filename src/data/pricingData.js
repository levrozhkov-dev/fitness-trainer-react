import { faPersonWalking, faDumbbell, faFireFlameCurved, faCrown, faMobileScreen, faLaptopMedical, faHeadset } from '@fortawesome/free-solid-svg-icons';

export const pricingGymData = [
  {
    icon: faPersonWalking,
    name: "Старт",
    price: "3000",
    features: [
      "2-х часовая тренировка",
      "Оценка формы",
      "Бесплатная консультация",
    ],
  },
  {
    icon: faDumbbell,
    name: "Базовый",
    price: "8000",
    features: [
      "4\u00A0персональные тренировки",
      "Составление программы",
      "Контроль техники и прогресса",
    ],
  },
  {
    icon: faFireFlameCurved,
    name: "Интенсив",
    price: "14000",
    features: [
      "8\u00A0персональных тренировок",
      "Включает базовый план",
      "Полный контроль питания",
    ],
  },
  {
    icon: faCrown,
    name: "Премиум",
    price: "18000",
    features: [
      "12\u00A0персональных тренировок",
      "Включает все планы",
      "Еженедельные замеры тела",
    ],
  },
];

export const pricingOnlineData = [
  {
    icon: faMobileScreen,
    name: "Базовый онлайн",
    price: "5000 ₽/мес.",
    features: [
      "Индивидуальная программа",
      "Обратная связь 2 раза в неделю",
      "Чек-листы по питанию",
    ],
  },
  {
    icon: faLaptopMedical,
    name: "Полный онлайн-коучинг",
    price: "10000 ₽/мес.",
    features: [
      "Персональный план тренировок и питания",
      "Ежедневная поддержка в чате",
      "Анализ видео с техникой",
    ],
  },
  {
    icon: faHeadset,
    name: "VIP-сопровождение",
    price: "15000 ₽/мес.",
    features: [
      "Полный контроль тренировок и питания",
      "Zoom-разборы 2 раза в неделю",
      "Коррекция программы раз в неделю",
    ],
  },
];