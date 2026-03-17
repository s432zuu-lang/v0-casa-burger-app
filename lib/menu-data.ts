// ─── Types ───────────────────────────────────────────────────
export interface MenuItem {
  id: string
  name: string
  description: string
  price?: number
  pricePan?: number
  priceTortilla?: number
  priceSencillo?: number
  priceConPapas?: number
  price200g?: number
  price300g?: number
  priceVaso?: number
  priceLitro?: number
  category: string
  subcategory?: string
  badge?: string
}

export interface SubCategory {
  id: string
  label: string
  icon: string
}

export interface CategoryBanner {
  id: string
  image: string
  notice?: string
}

// ─── Sub-categories per main tab ─────────────────────────────
export const comidaRapidaCategories: SubCategory[] = [
  { id: "burgers", label: "Burgers", icon: "🍔" },
  { id: "perros", label: "Perros", icon: "🌭" },
  { id: "otros", label: "Otros", icon: "🍗" },
  { id: "papas", label: "Papas", icon: "🍟" },
  { id: "mazorcadas", label: "Mazorcadas", icon: "🌽" },
  { id: "picadas", label: "Picadas", icon: "🫕" },
  { id: "bebidas", label: "Bebidas", icon: "🥤" },
]

export const almuerzosCategories: SubCategory[] = [
  { id: "arma-tu-almuerzo", label: "Arma tu Almuerzo", icon: "🍽️" },
  { id: "arroces", label: "Arroces", icon: "🍚" },
  { id: "pastas", label: "Pastas", icon: "🍝" },
  { id: "ensaladas", label: "Ensaladas", icon: "🥗" },
  { id: "pollo-broaster", label: "Pollo", icon: "🍗" },
  { id: "pescados", label: "Pescados", icon: "🐟" },
  { id: "parrilla", label: "Parrilla", icon: "🥩" },
  { id: "especiales-domingo", label: "Domingo", icon: "🍲" },
]

// ─── Section banners ─────────────────────────────────────────
export const categoryBanners: Record<string, CategoryBanner> = {
  burgers: {
    id: "burgers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM",
  },
  perros: {
    id: "perros",
    image: "/images/section-perros.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM · Sencillo o Con Papas (+$1.000)",
  },
  otros: {
    id: "otros",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482081073_18053078198156067_7077819390944091041_n-VzNX5a4ffAFCUrloMzF4euz1IW1ioR.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM",
  },
  papas: {
    id: "papas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482111952_18053147114156067_7714590438776273013_n-4hDpuZ9zkHUdWAujvppVIXKnunaQXH.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM",
  },
  mazorcadas: {
    id: "mazorcadas",
    image: "/images/section-mazorcadas.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM",
  },
  picadas: {
    id: "picadas",
    image: "/images/section-picadas.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM",
  },
  bebidas: {
    id: "bebidas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    notice: "Lunes 4PM–11PM | Mar–Dom 11AM–11PM",
  },
  "arma-tu-almuerzo": {
    id: "arma-tu-almuerzo",
    image: "/images/section-almuerzo.jpg",
    notice: "Disponible Martes a Sábado 11AM–3:30PM. Incluyen Sopa, Arroz y Ensalada del día.",
  },
  arroces: {
    id: "arroces",
    image: "/images/section-arroces.jpg",
    notice: "Acompanados de papa a la francesa, yuca frita, casco de papa o patacon.",
  },
  pastas: {
    id: "pastas",
    image: "/images/section-pastas.jpg",
    notice: "Acompanadas de papa a la francesa, yuca frita, casco de papa o patacon.",
  },
  ensaladas: {
    id: "ensaladas",
    image: "/images/section-ensaladas.jpg",
  },
  "pollo-broaster": {
    id: "pollo-broaster",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482081073_18053078198156067_7077819390944091041_n-VzNX5a4ffAFCUrloMzF4euz1IW1ioR.jpg",
  },
  pescados: {
    id: "pescados",
    image: "/images/section-pescados.jpg",
    notice: "Acompanados de Arroz, Ensalada y Patacon.",
  },
  parrilla: {
    id: "parrilla",
    image: "/images/section-parrilla.jpg",
    notice: "Acompanados de papa a la francesa, ensalada y arepa.",
  },
  "especiales-domingo": {
    id: "especiales-domingo",
    image: "/images/section-domingo.jpg",
    notice: "Solo disponibles los Domingos 11AM–3:30PM",
  },
}

// ─── COMIDA RAPIDA ───────────────────────────────────────────

export const menuItems: MenuItem[] = [
  // ── BURGERS ──────────────────────────────────────────────
  {
    id: "clasica",
    name: "Clasica",
    description: "1/4 lb carne o filete de pechuga, vegetales (cebolla grille, lechuga, tomate), jamon y queso",
    pricePan: 24000,
    priceTortilla: 25000,
    category: "burgers",
  },
  {
    id: "mixta",
    name: "Mixta",
    description: "1/4 lb carne + filete de pechuga, vegetales, jamon y queso",
    pricePan: 28000,
    priceTortilla: 29000,
    category: "burgers",
  },
  {
    id: "mexicana",
    name: "Mexicana",
    description: "1/4 lb carne, carne BBQ, chorizo, jalapenos, jamon, pico de gallo, lechuga, nachos y queso",
    pricePan: 28000,
    priceTortilla: 29000,
    category: "burgers",
  },
  {
    id: "texana",
    name: "Texana",
    description: "1/4 lb carne, pollo desmechado, tocineta, vegetales, aros de cebolla, jamon y queso",
    pricePan: 28000,
    priceTortilla: 29000,
    category: "burgers",
  },
  {
    id: "gourmet",
    name: "Gourmet",
    description: "1/4 lb carne, queso philadelphia, tocineta, vegetales, jamon y queso",
    pricePan: 28000,
    priceTortilla: 29000,
    category: "burgers",
  },
  {
    id: "de-la-casa",
    name: "De la Casa",
    description: "1/4 lb carne, filete de pechuga, carne desmechada, tocineta, vegetales, jamon y queso",
    pricePan: 30000,
    priceTortilla: 31000,
    category: "burgers",
    badge: "🔥 Lo Mas Pedido",
  },
  {
    id: "ranchera",
    name: "Ranchera",
    description: "1/4 lb carne, chorizo, huevo frito, tocineta, vegetales, jamon y queso",
    pricePan: 31000,
    priceTortilla: 32000,
    category: "burgers",
  },
  {
    id: "especial",
    name: "Especial",
    description: "1/4 lb carne, filete de pechuga, lomo de cerdo, tocineta, vegetales, jamon y queso",
    pricePan: 31000,
    priceTortilla: 32000,
    category: "burgers",
  },
  {
    id: "tiky-burger",
    name: "Tiky Burger",
    description: "1/4 lb carne, cerdo ahumado al barril banado en mermelada de tocineta, cebolla cruda, lechuga, tomate, pina asada y queso ricotta",
    pricePan: 31000,
    priceTortilla: 32000,
    category: "burgers",
    badge: "🔥 Lo Mas Pedido",
  },

  // ── PERROS CALIENTES ─────────────────────────────────────
  {
    id: "perro-clasico",
    name: "Clasico",
    description: "Salchicha americana, jamon, queso, cebolla grille y ripio de papa",
    priceSencillo: 20000,
    priceConPapas: 21000,
    category: "perros",
  },
  {
    id: "perro-mixto",
    name: "Mixto",
    description: "Salchicha americana, pollo desmechado, jamon, queso, cebolla grille y ripio de papa",
    priceSencillo: 23000,
    priceConPapas: 24000,
    category: "perros",
  },
  {
    id: "perro-texano",
    name: "Texano",
    description: "Salchicha americana, pollo desmechado, tocineta, aros de cebolla, jamon, queso y cebolla grille",
    priceSencillo: 25000,
    priceConPapas: 26000,
    category: "perros",
  },
  {
    id: "perro-mexicano",
    name: "Mexicano",
    description: "Salchicha americana, carne BBQ, jalapenos, pico de gallo, nachos, jamon y queso",
    priceSencillo: 25000,
    priceConPapas: 26000,
    category: "perros",
  },
  {
    id: "perro-ranchero",
    name: "Ranchero",
    description: "Salchicha americana, chorizo, huevo de codorniz, tocineta, jamon y queso",
    priceSencillo: 25000,
    priceConPapas: 26000,
    category: "perros",
  },
  {
    id: "perro-especial",
    name: "Especial",
    description: "Salchicha americana, filete de pechuga, tocineta, jamon, queso y cebolla grille",
    priceSencillo: 26000,
    priceConPapas: 27000,
    category: "perros",
  },
  {
    id: "perro-casa",
    name: "De la Casa",
    description: "Salchicha americana, filete de pechuga, carne desmechada, tocineta, jamon y queso",
    priceSencillo: 29000,
    priceConPapas: 30000,
    category: "perros",
    badge: "🔥 Lo Mas Pedido",
  },

  // ── OTROS PLATOS ─────────────────────────────────────────
  {
    id: "alitas-10",
    name: "Alitas x10",
    description: "10 piezas de alitas apanadas crujientes con salsas a eleccion",
    price: 28000,
    category: "otros",
  },
  {
    id: "alitas-20",
    name: "Alitas x20",
    description: "20 piezas de alitas apanadas crujientes con salsas a eleccion",
    price: 48000,
    category: "otros",
  },
  {
    id: "alitas-30",
    name: "Alitas x30",
    description: "30 piezas de alitas apanadas crujientes con salsas a eleccion",
    price: 53000,
    category: "otros",
  },
  {
    id: "gyros-pollo",
    name: "Gyros Pollo",
    description: "Pollo desmechado envuelto en pan pita",
    price: 22000,
    category: "otros",
  },
  {
    id: "gyros-casa",
    name: "Gyros Casa",
    description: "Mezcla especial de la casa en pan pita",
    price: 26000,
    category: "otros",
  },
  {
    id: "lasana",
    name: "Lasana",
    description: "Lasana de carne o mixta",
    price: 22000,
    category: "otros",
  },
  {
    id: "sandwich-1",
    name: "Sandwich 1 Piso",
    description: "Sandwich clasico de un piso",
    price: 18000,
    category: "otros",
  },
  {
    id: "sandwich-2",
    name: "Sandwich 2 Pisos",
    description: "Sandwich doble de dos pisos",
    price: 21000,
    category: "otros",
  },
  {
    id: "patacon-texano",
    name: "Patacon Texano",
    description: "Patacon con pollo desmechado, tocineta y queso",
    price: 23000,
    category: "otros",
  },
  {
    id: "patacon-ranchero",
    name: "Patacon Ranchero",
    description: "Patacon con chorizo y queso",
    price: 23000,
    category: "otros",
  },
  {
    id: "patacon-casa",
    name: "Patacon Casa",
    description: "Patacon con carnes mixtas y queso",
    price: 27000,
    category: "otros",
  },

  // ── PAPAS, SALCHI Y CHORIPAPAS ───────────────────────────
  {
    id: "papas-pequenas",
    name: "Papas Pequenas",
    description: "Porcion pequena de papas a la francesa",
    price: 14000,
    category: "papas",
  },
  {
    id: "papas-pollo",
    name: "Papas con Pollo",
    description: "Papas a la francesa con pollo desmechado",
    price: 22000,
    category: "papas",
  },
  {
    id: "papas-locas",
    name: "Papas Locas",
    description: "Mezcla de carnes, salsas y queso sobre papas",
    price: 28000,
    category: "papas",
  },
  {
    id: "papas-rancheras",
    name: "Papas Rancheras",
    description: "Papas con chorizo y maiz tierno",
    price: 29000,
    category: "papas",
  },
  {
    id: "papas-mexicanas",
    name: "Papas Mexicanas",
    description: "Papas con picante, jalapenos y carne BBQ",
    price: 29000,
    category: "papas",
  },
  {
    id: "papas-casa",
    name: "Papas Casa",
    description: "Especialidad de la casa sobre papas francesas",
    price: 31000,
    category: "papas",
  },
  {
    id: "salchipapa-clasica",
    name: "Salchipapa Clasica",
    description: "Salchicha y papa francesa",
    price: 19000,
    category: "papas",
  },
  {
    id: "salchipapa-casa",
    name: "Salchipapa Casa",
    description: "Especialidad con carnes extras",
    price: 24000,
    category: "papas",
  },
  {
    id: "choripapa-clasica",
    name: "Choripapa Clasica",
    description: "Chorizo y papa francesa",
    price: 19000,
    category: "papas",
  },
  {
    id: "choripapa-casa",
    name: "Choripapa Casa",
    description: "Especialidad con carnes extras",
    price: 24000,
    category: "papas",
  },

  // ── MAZORCADAS ───────────────────────────────────────────
  {
    id: "mazorcada-clasica",
    name: "Mazorcada Clasica",
    description: "Mazorca tierna con queso y salsas",
    price: 19000,
    category: "mazorcadas",
  },
  {
    id: "mazorcada-texana",
    name: "Mazorcada Texana",
    description: "Mazorca con pollo desmechado, tocineta y queso",
    price: 23000,
    category: "mazorcadas",
  },
  {
    id: "mazorcada-ranchera",
    name: "Mazorcada Ranchera",
    description: "Mazorca con chorizo, queso y salsas especiales",
    price: 23000,
    category: "mazorcadas",
  },
  {
    id: "mazorcada-especial",
    name: "Mazorcada Especial",
    description: "Mazorca con mix de carnes y queso",
    price: 25000,
    category: "mazorcadas",
  },
  {
    id: "mazorcada-casa",
    name: "Mazorcada De la Casa",
    description: "Especialidad de la casa sobre mazorca",
    price: 25000,
    category: "mazorcadas",
    badge: "🔥 Lo Mas Pedido",
  },

  // ── PICADAS ──────────────────────────────────────────────
  {
    id: "picada-personal",
    name: "Picada Personal",
    description: "Mix de carnes, papas y acompañamientos para una persona",
    price: 27000,
    category: "picadas",
  },
  {
    id: "picada-doble",
    name: "Picada Doble",
    description: "Mix de carnes, papas y acompañamientos para dos personas",
    price: 38000,
    category: "picadas",
  },
  {
    id: "picada-casa",
    name: "Picada De la Casa",
    description: "Especialidad de la casa — mix completo de carnes premium y acompañamientos",
    price: 45000,
    category: "picadas",
    badge: "🔥 Lo Mas Pedido",
  },

  // ── BEBIDAS ──────────────────────────────────────────────
  {
    id: "gaseosa-personal",
    name: "Gaseosa Personal",
    description: "350ml o Pet 400ml",
    price: 5000,
    category: "bebidas",
  },
  {
    id: "gaseosa-medio",
    name: "Gaseosa ½ Litro",
    description: "Botella de medio litro",
    price: 10000,
    category: "bebidas",
  },
  {
    id: "gaseosa-2.5l",
    name: "Gaseosa 2.5L",
    description: "Botella tamaño familiar",
    price: 13000,
    category: "bebidas",
  },
  {
    id: "jugo-hit",
    name: "Jugo Hit 1L",
    description: "Jugo de fruta en caja o botella",
    price: 9000,
    category: "bebidas",
  },
  {
    id: "te-1l",
    name: "Té 1L",
    description: "Té helado de litro",
    price: 10000,
    category: "bebidas",
  },
  {
    id: "soda",
    name: "Soda",
    description: "Agua con gas",
    price: 9000,
    category: "bebidas",
  },
  {
    id: "cerveza-nacional",
    name: "Cerveza Nacional",
    description: "Club Colombia, Águila, Poker u otras nacionales",
    price: 5000,
    category: "bebidas",
  },
  {
    id: "cerveza-importada",
    name: "Cerveza Importada",
    description: "Corona, Heineken u otras importadas",
    price: 7000,
    category: "bebidas",
  },
  {
    id: "cerveza-artesanal",
    name: "Cerveza Artesanal",
    description: "Selección de cervezas artesanales",
    price: 9800,
    category: "bebidas",
  },
  {
    id: "michelada",
    name: "Michelada",
    description: "Mezcla para preparar michelada",
    price: 4000,
    category: "bebidas",
  },
  {
    id: "granizada",
    name: "Granizada",
    description: "Granizada de sabores",
    priceVaso: 8000,
    priceLitro: 14000,
    category: "bebidas",
  },
  {
    id: "granizada-especial",
    name: "Granizada Especial",
    description: "Granizada especial con frutas naturales",
    priceVaso: 8500,
    priceLitro: 16500,
    category: "bebidas",
  },
]

// ─── ALMUERZOS ───────────────────────────────────────────────

export const almuerzoItems: MenuItem[] = [
  // ── ARMA TU ALMUERZO ─────────────────────────────────────
  {
    id: "proteina-basica",
    name: "Proteina Basica",
    description: "Carne a la plancha, Pechuga a la plancha, Pollo frito o Milanesa de pollo",
    price: 15000,
    category: "arma-tu-almuerzo",
    subcategory: "Basicas",
  },
  {
    id: "proteina-especial",
    name: "Proteina Especial",
    description: "Pechuga gratinada, Lomo de cerdo, Pollo en salsa de maiz, Pollo en salsa champinon o Trucha",
    price: 16000,
    category: "arma-tu-almuerzo",
    subcategory: "Especiales",
  },
  {
    id: "proteina-premium",
    name: "Proteina Premium",
    description: "Alitas apanadas",
    price: 17000,
    category: "arma-tu-almuerzo",
    subcategory: "Premium",
  },

  // ── ARROCES ──────────────────────────────────────────────
  {
    id: "arroz-pollo",
    name: "Arroz con Pollo",
    description: "Pollo en cubos, salchicha, mix de verduras (zanahoria, arveja, habichuela)",
    price: 20000,
    category: "arroces",
  },
  {
    id: "arroz-atollado",
    name: "Arroz Atollado",
    description: "Pechuga y carne en cubos, chorizo maduro, mix de verduras",
    price: 21000,
    category: "arroces",
  },
  {
    id: "arroz-oriental",
    name: "Arroz Oriental",
    description: "Pechuga y carne en cubos, vegetales salteados (calabacin, zucchini, zanahoria, cebolla, puerro, repollo)",
    price: 21000,
    category: "arroces",
  },
  {
    id: "arroz-mexicano",
    name: "Arroz Mexicano",
    description: "Carne molida, maiz, pimenton, nachos, pico de gallo, aguacate",
    price: 21000,
    category: "arroces",
  },
  {
    id: "arroz-marinero",
    name: "Arroz Marinero",
    description: "Mix de mariscos (palmitos, mejillones, robalo, pulpo, camaron), pimenton, cebollin",
    price: 21000,
    category: "arroces",
  },

  // ── PASTAS ───────────────────────────────────────────────
  {
    id: "pasta-bolonesa",
    name: "Bolonesa",
    description: "Carne molida, salsa napolitana, queso parmesano",
    price: 20000,
    category: "pastas",
  },
  {
    id: "pasta-pollo",
    name: "Con Pollo",
    description: "Pechuga en cubos, salsa napolitana, queso parmesano",
    price: 20000,
    category: "pastas",
  },
  {
    id: "pasta-alfredo",
    name: "Alfredo",
    description: "Pechuga, maiz, tocineta, salsa bechamel, queso parmesano",
    price: 21000,
    category: "pastas",
  },
  {
    id: "pasta-oriental",
    name: "Oriental",
    description: "Carne y pechuga en cubos, vegetales salteados",
    price: 21000,
    category: "pastas",
  },
  {
    id: "pasta-marinera",
    name: "Marinera",
    description: "Mix de mariscos, salsa bechamel, queso parmesano",
    price: 21000,
    category: "pastas",
  },
  {
    id: "pasta-camaron",
    name: "Camaron",
    description: "Camarones, salsa bechamel, queso parmesano",
    price: 28000,
    category: "pastas",
  },
  {
    id: "lasana-mixta",
    name: "Lasana Mixta",
    description: "Preparacion especial de lasana mixta",
    price: 22000,
    category: "pastas",
  },

  // ── ENSALADAS ────────────────────────────────────────────
  {
    id: "ensalada-texana",
    name: "Texana",
    description: "Pechuga, tocineta, lechuga, maiz, queso, nachos, aguacate, aderezo miel mostaza",
    price: 20000,
    category: "ensaladas",
  },
  {
    id: "ensalada-cesar",
    name: "Cesar",
    description: "Pechuga, lechuga, crutones, queso, jamon, aderezo cesar",
    price: 20000,
    category: "ensaladas",
  },
  {
    id: "ensalada-casa",
    name: "De la Casa",
    description: "Pechuga, mix de lechugas, champinon, semillas de girasol, tomate, vinagreta de la casa",
    price: 21000,
    category: "ensaladas",
  },
  {
    id: "ensalada-mexicana",
    name: "Mexicana",
    description: "Mix de lechugas, carne molida, chorizo, queso, jalapeno, pimenton, tomate, pico de gallo, nachos, aguacate",
    price: 21000,
    category: "ensaladas",
  },

  // ── POLLO A LA BROASTER ──────────────────────────────────
  {
    id: "pollo-cuarto",
    name: "1/4 de Pollo",
    description: "Papa a la francesa y ensalada",
    price: 16000,
    category: "pollo-broaster",
  },
  {
    id: "pollo-medio",
    name: "1/2 Pollo",
    description: "Papa a la francesa, papa cocida y ensalada",
    price: 30000,
    category: "pollo-broaster",
  },
  {
    id: "pollo-entero",
    name: "1 Pollo Entero",
    description: "Papa a la francesa, papa cocida y ensalada",
    price: 45000,
    category: "pollo-broaster",
  },

  // ── PESCADOS ─────────────────────────────────────────────
  {
    id: "bocachico",
    name: "Bocachico Frito",
    description: "Preparacion tradicional frita",
    price: 27000,
    category: "pescados",
  },
  {
    id: "mojarra",
    name: "Mojarra Frita",
    description: "Preparacion tradicional frita",
    price: 27000,
    category: "pescados",
  },
  {
    id: "trucha-asada",
    name: "Trucha Asada",
    description: "Preparacion a la plancha/asada",
    price: 27000,
    category: "pescados",
  },
  {
    id: "robalo",
    name: "Robalo",
    description: "Servido en salsa de camaron",
    price: 27000,
    category: "pescados",
  },

  // ── PARRILLA ─────────────────────────────────────────────
  {
    id: "carne-asada",
    name: "Carne Asada",
    description: "Carne asada a la parrilla",
    price200g: 26000,
    price300g: 29000,
    category: "parrilla",
  },
  {
    id: "lomo-cerdo",
    name: "Lomo de Cerdo",
    description: "Lomo de cerdo a la parrilla",
    price200g: 26000,
    price300g: 29000,
    category: "parrilla",
  },
  {
    id: "pechuga-parrilla",
    name: "Pechuga",
    description: "Pechuga a la parrilla",
    price200g: 26000,
    price300g: 29000,
    category: "parrilla",
  },
  {
    id: "pechuga-gratinada-parrilla",
    name: "Pechuga Gratinada",
    description: "Pechuga gratinada con queso",
    price200g: 28000,
    price300g: 30000,
    category: "parrilla",
  },
  {
    id: "churrasco",
    name: "Churrasco",
    description: "Corte de 300g a la parrilla",
    price: 30000,
    category: "parrilla",
  },
  {
    id: "sobrebarriga",
    name: "Sobrebarriga",
    description: "Corte de 300g a la parrilla",
    price: 30000,
    category: "parrilla",
  },
  {
    id: "carne-oreada",
    name: "Carne Oreada",
    description: "Corte de 300g, preparacion tradicional",
    price: 30000,
    category: "parrilla",
  },
  {
    id: "pincho-mixto",
    name: "Pincho Mixto",
    description: "Brocheta mixta de carnes a la parrilla",
    price: 30000,
    category: "parrilla",
  },
  {
    id: "costillas-bbq",
    name: "Costillas BBQ",
    description: "Costillas banadas en salsa BBQ",
    price: 30000,
    category: "parrilla",
  },
  {
    id: "parrillada-mixta",
    name: "Parrillada Mixta",
    description: "Carne asada, oreada, sobrebarriga, pernil de pollo, chorizo + papa francesa, yuca frita, arepa amarilla y ensalada",
    price: 50000,
    category: "parrilla",
    badge: "👥 Para Compartir",
  },

  // ── ESPECIALES DE DOMINGO ────────────────────────────────
  {
    id: "mute-sencillo",
    name: "Mute Sencillo",
    description: "Arroz, yuca y aguacate",
    price: 17000,
    category: "especiales-domingo",
  },
  {
    id: "mute-especial",
    name: "Mute Especial",
    description: "Arroz, yuca, aguacate y carne asada",
    price: 22000,
    category: "especiales-domingo",
  },
  {
    id: "sancocho-pollo",
    name: "Sancocho de Pollo",
    description: "Arroz, yuca, aguacate y pernil de pollo",
    price: 21000,
    category: "especiales-domingo",
  },
  {
    id: "sancocho-costilla",
    name: "Sancocho de Costilla",
    description: "Arroz, yuca, aguacate y costilla",
    price: 21000,
    category: "especiales-domingo",
  },
  {
    id: "sancocho-mixto",
    name: "Sancocho Mixto",
    description: "Arroz, yuca, aguacate, costilla y pernil de pollo",
    price: 24000,
    category: "especiales-domingo",
  },
  {
    id: "cazuela-mariscos",
    name: "Cazuela de Mariscos",
    description: "Camaron, pulpo, palmito, robalo, almejas, anillos + arroz, aguacate y patacon",
    price: 27000,
    category: "especiales-domingo",
  },
]

// ─── Schedule data ───────────────────────────────────────────
export const schedule = [
  { day: "Lunes", hours: "4:00 p.m. - 11:00 p.m." },
  { day: "Martes", hours: "11:00 a.m. - 11:00 p.m." },
  { day: "Miercoles", hours: "11:00 a.m. - 11:00 p.m." },
  { day: "Jueves", hours: "11:00 a.m. - 11:00 p.m." },
  { day: "Viernes", hours: "11:00 a.m. - 12:00 a.m." },
  { day: "Sabado", hours: "11:00 a.m. - 12:00 a.m." },
  { day: "Domingo", hours: "11:00 a.m. - 11:00 p.m." },
]
