import { faGraduationCap, faUserFriends, faTrophy } from '@fortawesome/free-solid-svg-icons';
import about_portfolio_img_1 from "../assets/about_portfolio_img_1.png";
import about_portfolio_img_2 from "../assets/about_portfolio_img_2.png";
import about_portfolio_img_3 from "../assets/about_portfolio_img_3.png";
import about_portfolio_svg_1 from "../assets/about_portfolio_svg_1.svg";
import about_portfolio_svg_2 from "../assets/about_portfolio_svg_2.svg";
import about_portfolio_svg_3 from "../assets/about_portfolio_svg_3.svg";

export const tabs = [
  {
    id: 1,
    icon: faGraduationCap,
    title: "Образование",
    subtitle: "Сертифицированный специалист с фундаментальной подготовкой",
    items: [
      "Высшее спортивное образование (ННГУ им. Лобачевского, кафедра физической культуры, 2018 г.);",
      "Сертификаты: FPA (Фитнес-Профессионал) – персональный тренинг (2020); Курс «Реабилитация и коррекция осанки» (2022); Nutrition Coach – основы спортивного питания (2021);",
      "Регулярное посещение мастер-классов по функциональному тренингу и работе с возрастными клиентами."
    ],
    image: about_portfolio_img_1 ,
    svg: about_portfolio_svg_1,
  },
  {
    id: 2,
    icon: faUserFriends,
    title: "Работа",
    subtitle: "6 лет в индустрии фитнеса",
    items: [
      "Фитнес-клуб «Физкульт» (2018–2024) – персональный тренер групповых и индивидуальных программ. Провел 1500+ часов тренировок;",
      "Частная практика – работа с клиентами 1 на 1;",
      "90+ довольных клиентов с разными целями (похудение, масса, реабилитация)."
    ],
    image: about_portfolio_img_2 ,
    svg: about_portfolio_svg_2,
  },
  {
    id: 3,
    icon: faTrophy,
    title: "Достижения",
    subtitle: "Реальные результаты подопечных и личные успехи",
    items: [
      "Подготовка к соревнованиям: 2 клиента – призеры регионального турнира по бодифитнесу (2023);",
      "Призер марафона «Беги, НН» (2022)",
      "Показательный мастер-класс по функциональному тренингу на городском фестивале ЗОЖ (2023).",
    ],
    image: about_portfolio_img_3 ,
    svg: about_portfolio_svg_3,
  }
]