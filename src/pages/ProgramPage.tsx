import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const EXERCISE_PHOTOS: Record<string, string> = {
  "Бёрпи": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/506e408c-81f0-483c-a195-b3459e004d59.jpg",
  "Спринт на месте": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/61212a9e-9ede-4c04-9aec-637529ff4289.jpg",
  "Прыжки на тумбу": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/95fee688-707f-4094-ab8e-7ab38956459f.jpg",
  "Скалолаз": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/c5ef23e2-2ab7-45b2-8a67-47be2a03838b.jpg",
  "Прыжки с разведением рук": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/c1cf906f-a13b-4cd5-aea8-ef93826db722.jpg",
  "Отжимания с хлопком": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/e6516316-1c20-49c5-923a-07ccd8d073cc.jpg",
  "Приседания со штангой": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/4a9fc3c2-6cef-42fd-b2d5-3caa3eae63e0.jpg",
  "Жим лёжа": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/acf3e91c-eeb3-4496-8a14-72f13d299496.jpg",
  "Становая тяга": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/237a5c0d-2125-4903-a437-8e4fe6ac7876.jpg",
  "Тяга в наклоне": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/7d3e09cc-0a35-4739-9da8-e510019e78bc.jpg",
  "Жим гантелей": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/9accbde6-3cb1-4766-ae80-f1072e2dfc91.jpg",
  "Подтягивания": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/a5d45bbd-62d7-4717-a3fb-459712e1e540.jpg",
  "Беговая дорожка": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/cd7e3b53-2862-44de-a904-cc43e3011e90.jpg",
  "Велотренажёр": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/3a3fa0c4-33d4-439f-8518-1af4a71e0402.jpg",
  "Эллипс": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/5470b620-199a-46ce-83b3-04eb426b7619.jpg",
  "Степпер": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/900e0bb2-e012-45a0-9ebd-623efb8984ae.jpg",
  "Прыжки со скакалкой": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/16fb37aa-4e08-4b61-8525-d94fd385966d.jpg",
  "Аэробика": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/aecf0837-6102-4455-bbc3-ad635dd23d5b.jpg",
  "Трастеры": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/08affe52-65a2-4226-8e99-62021a64b1d6.jpg",
  "Рывок штанги": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/e8c861a2-a64e-41bd-93dc-719dbcab9794.jpg",
  "Кольца": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/e38fef84-2644-41ad-9c1e-9c69c28fc295.jpg",
  "Двойные прыжки": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/ee6f6453-eae5-4128-9685-93fb7d288e61.jpg",
  "Box jump": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/95fee688-707f-4094-ab8e-7ab38956459f.jpg",
  "Гири": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/3967ca4f-cda0-4793-a0d4-5ead0668295e.jpg",
  "Сурья Намаскар": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/83add851-9846-4560-bfa9-1803376c0016.jpg",
  "Вирабхадрасана": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/86cf9faa-d73e-43af-91ff-cd4eabdfb810.jpg",
  "Баланс на одной ноге": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/3b99fcaf-1010-4b02-809f-be9a508d1478.jpg",
  "Наклоны": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/87be577b-2bb4-4024-8bff-6ec4fcfe5e1a.jpg",
  "Пранаяма": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/09d369ac-8861-48aa-b093-7dcdf48d0988.jpg",
  "Шавасана": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/713a1f7d-7f31-47c7-ae64-43ee52a10965.jpg",
  "Работа на груше": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/2caf03b2-ffa1-4ffa-ad72-e41c5ab6f90c.jpg",
  "Удары по лапам": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/30a40b88-3c5e-46a8-b460-fb7e5ff1a5ea.jpg",
  "Тени": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/c7c5972b-ad5d-4259-a3ad-d9ef67c8b368.jpg",
  "Спарринг": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/ed7cae3f-c309-45e1-a746-6c4f5665adf0.jpg",
  "Уклоны и нырки": "https://cdn.poehali.dev/projects/8e5acb19-25bd-40ec-a2e2-d254fc542629/files/715a571b-d584-465c-89d4-3a5748cc7167.jpg",
};

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
    result: ["Скорость и реакция", "Выносливость", "Уверенность в себе", "Самооборона"],
  },
];

export default function ProgramPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeExercise, setActiveExercise] = useState<string | null>(null);

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
              className="text-2xl font-black mb-2"
              style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
            >
              УПРАЖНЕНИЯ
            </h2>
            <p className="text-xs text-gray-600 mb-4 tracking-wide">Нажми на упражнение, чтобы увидеть технику</p>
            <div className="grid grid-cols-2 gap-3">
              {program.exercises.map((ex) => (
                <div
                  key={ex}
                  className="flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-all"
                  style={{ background: "#141414", border: `1px solid rgba(255,106,0,0.1)` }}
                  onClick={() => setActiveExercise(ex)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = program.color;
                    (e.currentTarget as HTMLElement).style.background = `${program.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.1)";
                    (e.currentTarget as HTMLElement).style.background = "#141414";
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: program.color }} />
                  <span className="text-sm text-gray-300">{ex}</span>
                  <Icon name="Image" size={12} style={{ color: "#555", marginLeft: "auto" }} />
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

      {/* MODAL */}
      {activeExercise && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setActiveExercise(null)}
        >
          <div
            className="relative w-full max-w-lg rounded overflow-hidden"
            style={{ background: "#141414", border: `1px solid ${program.color}40` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full"
              style={{ background: "rgba(0,0,0,0.6)", color: "#aaa" }}
              onClick={() => setActiveExercise(null)}
            >
              <Icon name="X" size={16} />
            </button>
            <img
              src={EXERCISE_PHOTOS[activeExercise]}
              alt={activeExercise}
              className="w-full object-cover"
              style={{ maxHeight: "380px" }}
            />
            <div className="px-6 py-4">
              <div className="text-xs tracking-widest mb-1" style={{ color: program.color, fontFamily: "Oswald, sans-serif" }}>
                ТЕХНИКА ВЫПОЛНЕНИЯ
              </div>
              <h3
                className="text-2xl font-black"
                style={{ fontFamily: "Oswald, sans-serif", color: "#f2f2f2" }}
              >
                {activeExercise}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
