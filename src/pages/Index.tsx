import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/f14d8ab6-2ed6-4c6b-a759-d48db07f6ecd.jpg";
const GALLERY_IMGS = [
  {
    src: "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/9c39bfb2-a902-425c-a2ad-cf0c07bcdf0e.jpg",
    label: "Групповые занятия",
  },
  {
    src: "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/d7f50a05-938b-4d6b-ae23-bf997bc90d60.jpg",
    label: "Силовые тренировки",
  },
  {
    src: "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/6d790c7c-47a8-4963-a9cf-ce95336e7643.jpg",
    label: "Растяжка и восстановление",
  },
  {
    src: "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/f14d8ab6-2ed6-4c6b-a759-d48db07f6ecd.jpg",
    label: "Персональные тренировки",
  },
];

const PROGRAMS = [
  {
    id: "hiit",
    icon: "Zap",
    title: "HIIT",
    subtitle: "Высокоинтенсивный интервальный тренинг",
    desc: "Сжигай максимум калорий за минимум времени. Интенсивные интервалы — взрывной результат.",
    duration: "45 мин",
    level: "Продвинутый",
    color: "#ff6a00",
  },
  {
    id: "silovaya",
    icon: "Dumbbell",
    title: "Силовая",
    subtitle: "Работа с весами и тренажёрами",
    desc: "Наращивай мышечную массу и силу под контролем опытных тренеров. Прогресс каждую неделю.",
    duration: "60 мин",
    level: "Любой уровень",
    color: "#ff4444",
  },
  {
    id: "kardio",
    icon: "Heart",
    title: "Кардио",
    subtitle: "Выносливость и жиросжигание",
    desc: "Укрепляй сердечно-сосудистую систему и сжигай жир с комфортными нагрузками.",
    duration: "50 мин",
    level: "Начинающий",
    color: "#ff9900",
  },
  {
    id: "crossfit",
    icon: "Flame",
    title: "CrossFit",
    subtitle: "Функциональный тренинг",
    desc: "Прокачай всё тело комплексными упражнениями. Командный дух и реальные результаты.",
    duration: "60 мин",
    level: "Средний",
    color: "#ff6a00",
  },
  {
    id: "yoga",
    icon: "Wind",
    title: "Йога",
    subtitle: "Гибкость, баланс и восстановление",
    desc: "Восстанавливай тело и разум. Глубокая работа с гибкостью и дыханием.",
    duration: "75 мин",
    level: "Любой уровень",
    color: "#44aaff",
  },
  {
    id: "boks",
    icon: "Trophy",
    title: "Бокс",
    subtitle: "Боевая техника и выносливость",
    desc: "Учись бить точно, двигаться быстро и держать удар. Реальная боевая подготовка.",
    duration: "60 мин",
    level: "Средний",
    color: "#ff4444",
  },
];

const SCHEDULE = [
  { time: "07:00", program: "Кардио", day: "Пн / Ср / Пт", spots: 8 },
  { time: "09:00", program: "Йога", day: "Вт / Чт / Сб", spots: 12 },
  { time: "11:00", program: "Силовая", day: "Пн / Ср / Пт", spots: 6 },
  { time: "13:00", program: "HIIT", day: "Вт / Чт", spots: 10 },
  { time: "16:00", program: "CrossFit", day: "Пн – Пт", spots: 15 },
  { time: "18:30", program: "Бокс", day: "Вт / Чт / Сб", spots: 8 },
  { time: "20:00", program: "HIIT", day: "Пн / Ср / Пт", spots: 12 },
];

const TICKER_ITEMS = [
  "ТРЕНИРУЙСЯ КАЖДЫЙ ДЕНЬ",
  "БОЛЬ — ВРЕМЕННА",
  "ПОБЕДА — НАВСЕГДА",
  "НЕ ОСТАНАВЛИВАЙСЯ",
  "СТАНЬ СИЛЬНЕЕ",
  "POWERZONE",
];

const STATS = [
  { value: "12+", label: "Лет опыта" },
  { value: "3 000+", label: "Участников" },
  { value: "6", label: "Направлений" },
  { value: "98%", label: "Довольных участников" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d", color: "#f2f2f2" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(13,13,13,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,106,0,0.12)" }}
      >
        <div
          className="text-2xl font-black tracking-widest cursor-pointer"
          style={{ fontFamily: "Oswald, sans-serif", color: "#ff6a00" }}
        >
          POWER<span style={{ color: "#f2f2f2" }}>ZONE</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Главная", id: "hero" },
            { label: "Программы", id: "programs" },
            { label: "Расписание", id: "schedule" },
            { label: "Галерея", id: "gallery" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-link text-gray-400"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: "#ff6a00" }}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(13,13,13,0.97)" }}
        >
          {[
            { label: "Главная", id: "hero" },
            { label: "Программы", id: "programs" },
            { label: "Расписание", id: "schedule" },
            { label: "Галерея", id: "gallery" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-3xl font-bold tracking-widest"
              style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Gym"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div
              className="inline-block text-xs font-bold tracking-widest mb-6 px-3 py-1 border fade-in-up"
              style={{ borderColor: "#ff6a00", color: "#ff6a00", fontFamily: "Oswald, sans-serif" }}
            >
              ДОБРО ПОЖАЛОВАТЬ В КЛУБ
            </div>
            <h1
              className="text-6xl md:text-8xl font-black leading-none mb-6 fade-in-up fade-in-up-delay-1"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              СТАНЬ<br />
              <span style={{ color: "#ff6a00", textShadow: "0 0 30px rgba(255,106,0,0.5)" }}>
                СИЛЬНЕЕ
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl fade-in-up fade-in-up-delay-2"
              style={{ fontFamily: "Golos Text, sans-serif", lineHeight: 1.6 }}
            >
              Спортивные тренировки, дружная атмосфера и реальные результаты. Выбирай направление и начинай уже сегодня.
            </p>
            <div className="flex flex-wrap gap-4 fade-in-up fade-in-up-delay-3">
              <button className="neon-btn px-8 py-4 text-base" onClick={() => scrollTo("programs")}>
                Начать тренироваться
              </button>
              <button
                onClick={() => scrollTo("programs")}
                className="px-8 py-4 text-base font-bold tracking-widest border-2 transition-all"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#f2f2f2",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#ff6a00";
                  (e.currentTarget as HTMLElement).style.color = "#ff6a00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#f2f2f2";
                }}
              >
                Программы →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div
        className="ticker-wrap py-3"
        style={{ background: "#ff6a00", overflow: "hidden" }}
      >
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-sm font-black tracking-widest"
              style={{ fontFamily: "Oswald, sans-serif", color: "#0d0d0d" }}
            >
              ◆ {item}
            </span>
          ))}
        </div>
      </div>



      {/* PROGRAMS */}
      <section id="programs" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14">
            <div
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: "#ff6a00", fontFamily: "Oswald, sans-serif" }}
            >
              ЧЕМ МЫ ЗАНИМАЕМСЯ
            </div>
            <h2
              className="text-5xl md:text-6xl font-black"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ПРОГРАММЫ<br />
              <span style={{ color: "#ff6a00" }}>ТРЕНИРОВОК</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.title}
                className="program-card glass-card p-6 relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/program/${prog.id}`)}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                  style={{ background: prog.color }}
                />
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4 rounded"
                  style={{ background: `${prog.color}20`, border: `1px solid ${prog.color}40` }}
                >
                  <Icon name={prog.icon} size={22} style={{ color: prog.color }} />
                </div>
                <h3
                  className="text-2xl font-black mb-1"
                  style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
                >
                  {prog.title}
                </h3>
                <div className="text-xs mb-3" style={{ color: "#ff6a00" }}>
                  {prog.subtitle}
                </div>
                <p className="text-sm mb-5" style={{ color: "#aaa", lineHeight: 1.6 }}>
                  {prog.desc}
                </p>
                <div className="flex items-center gap-4 text-xs" style={{ color: "#666" }}>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="BarChart2" size={13} />
                    {prog.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section
        id="schedule"
        className="py-24"
        style={{ background: "#111" }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14">
            <div
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: "#ff6a00", fontFamily: "Oswald, sans-serif" }}
            >
              КОГДА ПРИХОДИТЬ
            </div>
            <h2
              className="text-5xl md:text-6xl font-black"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              РАСПИСАНИЕ<br />
              <span style={{ color: "#ff6a00" }}>ЗАНЯТИЙ</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr
                  className="text-xs tracking-widest uppercase border-b"
                  style={{ color: "#666", borderColor: "rgba(255,106,0,0.2)", fontFamily: "Oswald, sans-serif" }}
                >
                  <th className="text-left pb-4 pr-6">Время</th>
                  <th className="text-left pb-4 pr-6">Программа</th>

                  <th className="text-left pb-4 pr-6">Дни</th>
                  <th className="text-left pb-4">Мест</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((row, i) => (
                  <tr
                    key={i}
                    className="schedule-row border-b"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <td
                      className="py-4 pr-6 font-black text-lg"
                      style={{ fontFamily: "Oswald, sans-serif", color: "#ff6a00" }}
                    >
                      {row.time}
                    </td>
                    <td className="py-4 pr-6 font-semibold" style={{ color: "#f2f2f2" }}>
                      {row.program}
                    </td>

                    <td className="py-4 pr-6 text-sm" style={{ color: "#aaa" }}>
                      {row.day}
                    </td>
                    <td className="py-4">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded"
                        style={{
                          background: "rgba(255,106,0,0.12)",
                          color: "#ff6a00",
                          fontFamily: "Oswald, sans-serif",
                        }}
                      >
                        {row.spots} мест
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14">
            <div
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: "#ff6a00", fontFamily: "Oswald, sans-serif" }}
            >
              АТМОСФЕРА
            </div>
            <h2
              className="text-5xl md:text-6xl font-black"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ГАЛЕРЕЯ
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMGS.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="gallery-img w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)" }}
                >
                  <span
                    className="text-sm font-bold tracking-wider"
                    style={{ fontFamily: "Oswald, sans-serif", color: "#ff6a00" }}
                  >
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              className="text-sm font-bold tracking-widest border px-6 py-3 transition-all"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#ff6a00",
                borderColor: "rgba(255,106,0,0.4)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,106,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              СМОТРЕТЬ ВСЕ ФОТО →
            </button>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer
        className="py-10 border-t"
        style={{ borderColor: "rgba(255,106,0,0.1)", background: "#0a0a0a" }}
      >
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="text-xl font-black tracking-widest"
            style={{ fontFamily: "Oswald, sans-serif", color: "#ff6a00" }}
          >
            POWER<span style={{ color: "#f2f2f2" }}>ZONE</span>
          </div>
          <div className="text-xs tracking-widest" style={{ color: "#444" }}>
            © 2024 POWERZONE
          </div>
        </div>
      </footer>
    </div>
  );
}