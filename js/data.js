// Demo projects data
const projects = [
  {
    id: 1,
    title: "NeonBoard",
    description: "Минималистичная доска задач с неоновыми акцентами и оффлайн-режимом. Полностью на vanilla JS.",
    longDescription: "NeonBoard родился из желания иметь красивый и быстрый таск-менеджер без лишнего. Работает оффлайн, синхронизируется через localStorage, поддерживает тёмную тему и горячие клавиши.",
    category: "tools",
    tags: ["JavaScript", "CSS", "PWA"],
    author: "alexdev",
    stars: 42,
    emoji: "📋",
    demo: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "FluxChat",
    description: "Лёгкий мессенджер в реальном времени на WebSockets. Без регистрации, только по ссылке-комнате.",
    longDescription: "FluxChat позволяет создавать временные комнаты для общения. Идеально для быстрых созвонов команды или поддержки пользователей.",
    category: "web",
    tags: ["WebSocket", "React", "Node"],
    author: "mira",
    stars: 87,
    emoji: "💬",
    demo: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "PixelFarm",
    description: "Расслабляющая ферма в пиксельной графике. Выращивай культуры, украшай участок, торгуй с соседями.",
    category: "games",
    tags: ["Godot", "Pixel Art", "Indie"],
    author: "pixelking",
    stars: 156,
    emoji: "🌾",
    demo: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 4,
    title: "CodeGlow",
    description: "VS Code тема + расширение, которое подсвечивает активный код мягким свечением. Меньше усталости глаз.",
    category: "tools",
    tags: ["VSCode", "TypeScript", "Theme"],
    author: "glowdev",
    stars: 231,
    emoji: "✨",
    demo: "",
    github: "https://github.com"
  },
  {
    id: 5,
    title: "MindMap AI",
    description: "Создавай ментальные карты голосом. AI превращает речь в структурированные узлы и связи.",
    category: "ai",
    tags: ["AI", "React", "Whisper"],
    author: "neuro",
    stars: 94,
    emoji: "🧠",
    demo: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 6,
    title: "ShadowNotes",
    description: "Заметки, которые исчезают через N часов. Для тех, кто устал от цифрового хлама.",
    category: "mobile",
    tags: ["Flutter", "Dart", "Privacy"],
    author: "void",
    stars: 63,
    emoji: "🌑",
    demo: "",
    github: "https://github.com"
  },
  {
    id: 7,
    title: "OpenPalette",
    description: "Генератор цветовых палитр с экспортом в CSS, Tailwind, Figma и JSON. Open source.",
    category: "open-source",
    tags: ["Open Source", "CSS", "Design"],
    author: "palette",
    stars: 312,
    emoji: "🎨",
    demo: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 8,
    title: "TinyAPI",
    description: "Микросервис для мока API за 30 секунд. Идеально для фронтенд-разработки и прототипов.",
    category: "tools",
    tags: ["Go", "API", "DevTools"],
    author: "gopher",
    stars: 178,
    emoji: "⚡",
    demo: "https://example.com",
    github: "https://github.com"
  }
];

function getAllProjects() {
  const saved = JSON.parse(localStorage.getItem('indiehub_projects') || '[]');
  return [...saved, ...projects];
}
