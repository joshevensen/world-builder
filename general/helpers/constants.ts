/**
 * Generic Constants
 */
export const PALETTE = {
  black: "#0a0a0a",
  white: "#fafafa",
  gray: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  blue: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },
  purple: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724",
  },
};

export const RADIUS = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  "2xl": 16,
  "3xl": 24,
  full: 99999,
};

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
};

export const ICON_SIZE = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 64,
};

export const SPACING = {
  px: 1,
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};

/**
 * Named Constants
 */
export const COLORS = {
  primary: PALETTE.orange[600],
  background: PALETTE.gray[200],
  text: PALETTE.gray[700],
};

// https://pictogrammers.com/library/mdi/
export const ICONS = {
  logo: "dots-hexagon",

  // features
  worlds: "earth",
  calendar: "calendar-clock",
  lists: "format-list-text",
  entries: "format-float-left",
  templates: "text-box-multiple-outline",
  categories: "file-tree",
  relationships: "family-tree",
  comments: "comment-multiple",

  // categories
  animal: "account",
  plant: "mushroom",
  item: "car",
  group: "shape-plus",
  event: "calendar",
  location: "map-marker",
  knowledge: "lightbulb-on-outline",

  // field types
  text: "form-textbox",
  textarea: "form-textarea",
  select: "form-select",
  number: "numeric",
  image: "camera",
  currency: "cash",
  date: "calendar-edit",
  time: "clock-edit-outline",
  url: "link-variant",

  // ui
  add: "plus",
  archive: "archive",
  check: "check",
  close: "close",
  delete: "delete",
  download: "download",
  down: "chevron-down",
  edit: "pencil",
  error: "close-circle",
  favorite: "heart",
  filter: "filter",
  hide: "eye-off",
  info: "information",
  left: "chevron-left",
  logout: "power",
  menu: "dots-vertical",
  move: "arrow-all",
  notification: "bell",
  notificationNone: "bell-outline",
  print: "printer",
  redo: "redo",
  reload: "reload",
  remove: "minus",
  right: "chevron-right",
  save: "content-save",
  search: "magnify",
  settings: "cog",
  sort: "sort",
  undo: "undo",
  unFavorite: "heart-outline",
  user: "account-circle",
  up: "chevron-up",
  view: "eye",
  warning: "alert",
};

export const SIZE = {};