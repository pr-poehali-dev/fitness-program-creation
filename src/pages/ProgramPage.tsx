import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

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
    about: "HIIT (High-Intensity Interval Training) — это чередование коротких взрывных нагрузок и периодов восстановления. За 45 минут ты сожжёшь больше калорий, чем за час обычного кардио. Тренировки ускоряют метаболизм на 24–48 часов после занятия.",
    exercises: ["Бёрпи", "Спринт на месте", "Прыжки на тумбу", "Скалолаз", "Прыжки с разведением рук", "Отжимания с хлопком"],
    schedule: "Вт / Чт / Вс — 13:00 и 20:00",
    price: "от 1 200 ₽ / занятие",
    trainer: "Максим Р.",
    result: ["Сжигание жира", "Рост выносливости", "Ускорение метаболизма", "Рельеф мышц"],
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
    about: "Силовые тренировки — основа физической формы. Мы работаем со свободными весами и тренажёрами по системе прогрессивной нагрузки. Подходит как для новичков, так и для опытных атлетов. Программа составляется индивидуально.",
    exercises: ["Приседания со штангой", "Жим лёжа", "Становая тяга", "Тяга в наклоне", "Жим гантелей", "Подтягивания"],
    schedule: "Пн / Ср / Пт — 11:00",
    price: "от 1 000 ₽ / занятие",
    trainer: "Дмитрий К.",
    result: ["Рост мышечной массы", "Увеличение силы", "Улучшение осанки", "Крепкий суставно-связочный аппарат"],
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
    about: "Кардиотренировки укрепляют сердце, улучшают дыхание и помогают эффективно сжигать жир. Умеренная интенсивность делает их доступными для любого уровня подготовки. Идеально для старта и восстановления между тяжёлыми тренировками.",
    exercises: ["Беговая дорожка", "Велотренажёр", "Эллипс", "Степпер", "Прыжки со скакалкой", "Аэробика"],
    schedule: "Пн / Ср / Пт — 07:00",
    price: "от 800 ₽ / занятие",
    trainer: "Анна М.",
    result: ["Здоровое сердце", "Снижение веса", "Повышение выносливости", "Улучшение самочувствия"],
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
    about: "CrossFit — это функциональные движения высокой интенсивности. Каждая тренировка (WOD) уникальна и включает элементы гимнастики, тяжёлой атлетики и кардио. Занятия проходят в группе, что создаёт мощную командную атмосферу.",
    exercises: ["Трастеры", "Рывок штанги", "Кольца", "Двойные прыжки", "Box jump", "Гири"],
    schedule: "Пн – Пт — 16:00",
    price: "от 1 100 ₽ / занятие",
    trainer: "Иван С.",
    result: ["Комплексное развитие тела", "Взрывная сила", "Координация", "Командный дух"],
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
    about: "Йога сочетает работу с телом, дыханием и вниманием. Наши занятия помогут растянуть и восстановить мышцы после тяжёлых тренировок, снять стресс и улучшить гибкость. Подходит для всех, даже если вы никогда не занимались.",
    exercises: ["Сурья Намаскар", "Вирабхадрасана", "Баланс на одной ноге", "Наклоны", "Пранаяма", "Шавасана"],
    schedule: "Вт / Чт / Сб — 09:00",
    price: "от 900 ₽ / занятие",
    trainer: "Елена В.",
    result: ["Гибкость тела", "Снятие стресса", "Улучшение сна", "Внутренний баланс"],
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
    about: "Боксёрские тренировки развивают скорость реакции, координацию и взрывную выносливость. Мы работаем с грушей, лапами и в парах. Тренировки подходят как для тех, кто хочет научиться защищаться, так и для тех, кто ищет мощную кардионагрузку.",
    exercises: ["Работа на груше", "Удары по лапам", "Прыжки со скакалкой", "Тени", "Спарринг", "Уклоны и нырки"],
    schedule: "Вт / Чт / Сб — 18:30",
    price: "от 1 100 ₽ / занятие",
    trainer: "Алексей Н.",
    result: ["Скорость и реакция", "Выносливость", "Уверенность в себе", "Самооборона"],
  },
];

export default function ProgramPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const program = PROGRAMS.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d0d0d" }}>
        <div className="text-center">
          <div className="text-6xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif", color: "#ff6a00" }}>404</div>
          <p className="text-gray-400 mb-6">Программа не найдена</p>
          <button className="neon-btn px-6 py-3" onClick={() => navigate("/")}>На главную</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d", color: "#f2f2f2" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,106,0,0.12)" }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm font-bold tracking-widest transition-colors"
          style={{ fontFamily: "Oswald, sans-serif", color: "#888" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6a00")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          <Icon name="ArrowLeft" size={16} />
          НАЗАД
        </button>
        <div
          className="text-xl font-black tracking-widest cursor-pointer"
          style={{ fontFamily: "Oswald, sans-serif", color: "#ff6a00" }}
          onClick={() => navigate("/")}
        >
          POWER<span style={{ color: "#f2f2f2" }}>ZONE</span>
        </div>
        <div />
      </nav>

      {/* HERO */}
      <div
        className="pt-32 pb-16 px-6 md:px-12 relative"
        style={{ borderBottom: "1px solid rgba(255,106,0,0.1)" }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: program.color }}
        />
        <div className="container mx-auto max-w-4xl">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 px-3 py-1 border"
            style={{ borderColor: program.color, color: program.color, fontFamily: "Oswald, sans-serif" }}
          >
            <Icon name={program.icon} size={13} />
            ПРОГРАММА ТРЕНИРОВОК
          </div>
          <h1
            className="text-6xl md:text-8xl font-black leading-none mb-4"
            style={{ fontFamily: "Oswald, sans-serif", color: program.color }}
          >
            {program.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-xl" style={{ lineHeight: 1.6 }}>
            {program.subtitle}
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: "Clock", label: program.duration },
              { icon: "BarChart2", label: program.level },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm" style={{ color: "#aaa" }}>
                <Icon name={item.icon} size={15} style={{ color: program.color }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto max-w-4xl px-6 md:px-12 py-16 grid md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {/* About */}
          <div>
            <h2
              className="text-2xl font-black mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
            >
              О ПРОГРАММЕ
            </h2>
            <p className="text-gray-400 leading-relaxed">{program.about}</p>
          </div>

          {/* Exercises */}
          <div>
            <h2
              className="text-2xl font-black mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
            >
              УПРАЖНЕНИЯ
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {program.exercises.map((ex) => (
                <div
                  key={ex}
                  className="flex items-center gap-3 px-4 py-3 rounded"
                  style={{ background: "#141414", border: "1px solid rgba(255,106,0,0.1)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: program.color }} />
                  <span className="text-sm text-gray-300">{ex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2
              className="text-2xl font-black mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
            >
              РЕЗУЛЬТАТЫ
            </h2>
            <div className="flex flex-wrap gap-3">
              {program.result.map((r) => (
                <span
                  key={r}
                  className="px-4 py-2 text-sm font-semibold rounded"
                  style={{ background: `${program.color}18`, color: program.color, border: `1px solid ${program.color}30` }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — sidebar */}
        <div className="flex flex-col gap-4">
          <div
            className="p-6 rounded"
            style={{ background: "#141414", border: "1px solid rgba(255,106,0,0.15)" }}
          >
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Icon name="CalendarDays" size={14} style={{ color: program.color, marginTop: 2 }} />
                <span>{program.schedule}</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Clock" size={14} style={{ color: program.color, marginTop: 2 }} />
                <span>{program.duration} / занятие</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/#programs")}
            className="text-sm text-center py-3 tracking-widest transition-colors"
            style={{ color: "#555", fontFamily: "Oswald, sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6a00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            ← Все программы
          </button>
        </div>
      </div>
    </div>
  );
}