export interface MenuItem {
  id: string
  name: string
  description: string
  pricePan?: number
  priceTortilla?: number
  price?: number
  image: string
  category: string
}

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "clasica",
    name: "Clasica",
    description:
      "1/4 lb carne o filete de pechuga, vegetales (cebolla grille, lechuga, tomate), jamon y queso",
    pricePan: 23000,
    priceTortilla: 24000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg",
    category: "burgers",
  },
  {
    id: "de-la-casa",
    name: "De la Casa",
    description:
      "1/4 lb carne, filete de pechuga, carne desmechada, tocineta, vegetales, jamon y queso fundido",
    pricePan: 30000,
    priceTortilla: 31000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg",
    category: "burgers",
  },
  {
    id: "tiky-burger",
    name: "Tiky Burger",
    description:
      "1/4 lb carne, cerdo ahumado al barril, mermelada de tocineta, pina asada y queso fundido",
    pricePan: 31000,
    priceTortilla: 32000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg",
    category: "burgers",
  },
  {
    id: "bbq-burger",
    name: "BBQ Burger",
    description:
      "1/4 lb carne, tocineta crocante, aros de cebolla, queso cheddar y salsa BBQ ahumada",
    pricePan: 28000,
    priceTortilla: 29000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg",
    category: "burgers",
  },
  {
    id: "doble-carne",
    name: "Doble Carne",
    description:
      "Doble carne 1/4 lb, doble queso, tocineta, vegetales frescos y salsas especiales",
    pricePan: 35000,
    priceTortilla: 36000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg",
    category: "burgers",
  },
  // Perros
  {
    id: "perro-sencillo",
    name: "Perro Sencillo",
    description:
      "Salchicha premium, salsas de la casa, papitas, queso y vegetales frescos",
    price: 15000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "perros",
  },
  {
    id: "perro-de-la-casa",
    name: "Perro de la Casa",
    description:
      "Salchicha premium, carne desmechada, queso fundido, tocineta y salsas especiales",
    price: 22000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "perros",
  },
  // Otros
  {
    id: "alitas-x10",
    name: "Alitas x10",
    description:
      "10 piezas de alitas apanadas crujientes con salsas a eleccion y papas fritas",
    price: 25000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482081073_18053078198156067_7077819390944091041_n-VzNX5a4ffAFCUrloMzF4euz1IW1ioR.jpg",
    category: "otros",
  },
  {
    id: "alitas-x20",
    name: "Alitas x20",
    description:
      "20 piezas de alitas apanadas crujientes con salsas a eleccion y papas fritas",
    price: 40000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482081073_18053078198156067_7077819390944091041_n-VzNX5a4ffAFCUrloMzF4euz1IW1ioR.jpg",
    category: "otros",
  },
  {
    id: "boneless-x10",
    name: "Boneless x10",
    description:
      "10 piezas de boneless crujientes banados en salsa a eleccion",
    price: 23000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482111952_18053147114156067_7714590438776273013_n-4hDpuZ9zkHUdWAujvppVIXKnunaQXH.jpg",
    category: "otros",
  },
  // Papas
  {
    id: "papas-francesa",
    name: "Papas a la Francesa",
    description: "Porcion generosa de papas crujientes con sal y salsas de la casa",
    price: 10000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482111952_18053147114156067_7714590438776273013_n-4hDpuZ9zkHUdWAujvppVIXKnunaQXH.jpg",
    category: "papas",
  },
  {
    id: "papas-cargadas",
    name: "Papas Cargadas",
    description:
      "Papas fritas con queso cheddar fundido, tocineta, carne desmechada y salsas",
    price: 22000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482111952_18053147114156067_7714590438776273013_n-4hDpuZ9zkHUdWAujvppVIXKnunaQXH.jpg",
    category: "papas",
  },
  // Bebidas
  {
    id: "limonada-maracuya",
    name: "Limonada de Maracuya",
    description: "Limonada natural con pulpa de maracuya, hielo y toque de menta",
    price: 8000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "bebidas",
  },
  {
    id: "malteada",
    name: "Malteada",
    description:
      "Malteada cremosa con helado artesanal. Sabores: chocolate, vainilla, fresa",
    price: 14000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "bebidas",
  },
  {
    id: "gaseosa",
    name: "Gaseosa",
    description: "Coca-Cola, Sprite, Fanta o Manzana Postobon. 400ml",
    price: 5000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "bebidas",
  },
]

export const almuerzos: MenuItem[] = [
  {
    id: "almuerzo-ejecutivo",
    name: "Almuerzo Ejecutivo",
    description:
      "Sopa del dia, arroz, proteina a eleccion (pollo, res o cerdo), ensalada, jugo natural",
    price: 18000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "almuerzos",
  },
  {
    id: "almuerzo-especial",
    name: "Almuerzo Especial",
    description:
      "Sopa del dia, arroz, proteina premium (chuleta, costilla BBQ), maduro, ensalada y jugo",
    price: 22000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    category: "almuerzos",
  },
]
