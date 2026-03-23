// Los 14 alérgenos de declaración obligatoria (Reglamento UE 1169/2011)
export type Allergen =
  | 'Gluten'
  | 'Crustáceos'
  | 'Huevos'
  | 'Pescado'
  | 'Cacahuetes'
  | 'Soja'
  | 'Lácteos'
  | 'Frutos de cáscara'
  | 'Apio'
  | 'Mostaza'
  | 'Sésamo'
  | 'Sulfitos'
  | 'Altramuces'
  | 'Moluscos'

export interface MenuItem {
  name: string
  price: string
  desc?: string
  image?: string         // ruta a la imagen, ej: '/images/bravas.webp'
  allergens?: Allergen[] // undefined = sin registrar | [] = sin alérgenos
}

export interface MenuCategory {
  title: string
  icon: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    title: 'Bocadillos Calientes',
    icon: 'sandwich',
    items: [
      { name: 'Lomo', price: '4,25€', allergens: ['Gluten'] },
      { name: 'Bacón', price: '4,45€', allergens: ['Gluten'] },
      { name: 'Pollo', price: '4,45€', allergens: ['Gluten'] },
      { name: 'Butifarra', price: '4,35€', allergens: ['Gluten'] },
      { name: 'Pinchos morunos', price: '4,95€', allergens: ['Gluten'] },
      { name: 'Calamares Andaluza', price: '4,95€', allergens: ['Gluten', 'Huevos'] },
      { name: 'Calamares a la romana', price: '4,05€', allergens: ['Gluten', 'Huevos'] },
      { name: 'Tortilla francesa', price: '4,35€', allergens: ['Gluten', 'Huevos'] },
      { name: 'Serranito de lomo o pollo', price: '5,95€', allergens: ['Gluten'] },
      { name: 'Hamburguesa', price: '4,15€', allergens: ['Gluten'] },
      { name: 'Hamburguesa Completa', price: '10,25€', allergens: ['Gluten', 'Huevos', 'Lácteos', 'Mostaza'] },
      {
        name: 'Hamburguesa de la casa',
        price: '7,05€',
        desc: 'Cebolla caramelizada, lechuga y queso de cabra',
        allergens: ['Gluten', 'Huevos', 'Lácteos', 'Mostaza'],
      },
      {
        name: 'Vegetal de pollo',
        price: '5,80€',
        desc: 'Tomate rodaja, lechuga y salsas',
        allergens: ['Gluten'],
      },
      { name: 'Milanesa de ternera', price: '6,30€', allergens: ['Gluten', 'Huevos'] },
      {
        name: 'Hot dog especial',
        price: '6,05€',
        desc: 'Cebolla crujiente, maíz dulce, queso, jalapeños y salsas',
        allergens: ['Gluten', 'Lácteos', 'Mostaza'],
      },
      { name: 'Frankfurt', price: '4,15€', allergens: ['Gluten'] },
      { name: 'Bikini', price: '3,35€', allergens: ['Gluten', 'Lácteos'] },
      { name: 'Tostadas', price: '2,60€', allergens: ['Gluten'] },
    ],
  },
  {
    title: 'Bocadillos Fríos',
    icon: 'sandwich',
    items: [
      { name: 'Fuet', price: '3,95€' },
      { name: 'Jamón serrano', price: '3,95€' },
      { name: 'Jamón York', price: '3,95€' },
      { name: 'Jamón ibérico', price: '7,15€' },
      { name: 'Queso curado', price: '4,35€' },
      { name: 'Chorizo picante', price: '3,75€' },
      { name: 'Atún', price: '3,95€' },
      { name: 'Vegetal de atún', price: '5,25€' },
    ],
  },
  {
    title: 'Tapas Calientes',
    icon: 'flame',
    items: [
      { name: 'Alitas de pollo', price: '7,30€' },
      { name: 'Pinchos moruno', price: '8,90€' },
      { name: 'Pollo americano', price: '9,80€' },
      { name: 'Mejillones a la marinera', price: '10,75€', allergens: ['Moluscos', 'Sulfitos'] },
      { name: 'Patatas bravas', price: '6,75€', allergens: ['Sulfitos'] },
      { name: 'Patatas fritas', price: '5,45€', allergens: [] },
      { name: 'Sepia a la plancha', price: '10,05€', allergens: ['Moluscos'] },
      { name: 'Calamares a la plancha', price: '10,05€', allergens: ['Moluscos'] },
      { name: 'Calamares a la romana', price: '7,35€', allergens: ['Gluten', 'Huevos', 'Moluscos'] },
      { name: 'Calamares a la andaluza', price: '9,05€', allergens: ['Gluten', 'Huevos', 'Moluscos'] },
      { name: 'Nuggets de pollo', price: '7,35€', allergens: ['Gluten', 'Huevos'] },
      { name: 'Morros fritos', price: '6,45€', allergens: ['Gluten'] },
      { name: 'Chocos', price: '8,65€', allergens: ['Moluscos'] },
      { name: 'Rejos', price: '9,05€', allergens: ['Moluscos'] },
      { name: 'Ternera en salsa', price: '9,85€', allergens: ['Gluten'] },
      { name: 'Callos', price: '8,35€', allergens: ['Gluten'] },
      { name: 'Croquetas de jamón', price: '7,35€', allergens: ['Gluten', 'Huevos', 'Lácteos'] },
      { name: 'Fajitas de ternera o pollo', price: '9,55€' },
      { name: 'Fajitas mixtas', price: '10,35€' },
      { name: 'Chipirones', price: '9,55€' },
      { name: 'Tiritas pio pio', price: '9,35€' },
      { name: 'Nachos', price: '14,75€' },
      { name: 'Huevos rotos', price: '9,85€' },
      { name: 'Salchipapa', price: '8,05€' },
      {
        name: 'Patatas pituko',
        price: '8,95€',
        desc: 'Patatas redondas, beicon y queso cheddar',
      },
    ],
  },
  {
    title: 'Tapas Frías',
    icon: 'utensils',
    items: [
      { name: 'Olivas rellenas', price: '4,15€' },
      { name: 'Plato de Queso curado', price: '8,75€' },
      { name: 'Boquerones en vinagre', price: '10,85€', allergens: ['Pescado', 'Sulfitos'] },
      { name: 'Anchoas del Cantábrico', price: '12,85€', allergens: ['Pescado', 'Sulfitos'] },
      { name: 'Plato de Jamón ibérico', price: '13,35€', allergens: ['Sulfitos'] },
      { name: 'Berberechos', price: '9,35€', allergens: ['Moluscos'] },
    ],
  },
  {
    title: 'Ensaladas',
    icon: 'salad',
    items: [
      { name: 'Ensalada de queso cabra', price: '9,95€' },
      { name: 'Ensalada de la casa', price: '10,35€' },
      { name: 'Ensalada con aguacate', price: '9,85€' },
      { name: 'Ensalada mediterránea', price: '9,80€' },
    ],
  },
  {
    title: 'Platos Combinados',
    icon: 'utensils-crossed',
    items: [
      { name: 'Pincho moruno', price: '15,15€' },
      { name: 'Pollo a la plancha o rebozado', price: '13,85€' },
      { name: 'Butifarra', price: '13,25€' },
      { name: 'Bistec', price: '13,75€' },
      { name: 'Alitas de pollo', price: '15,15€' },
      { name: 'Calamares a la plancha o rebozado', price: '16,15€' },
      { name: 'Sepia', price: '16,15€' },
      { name: 'Dorada', price: '17,75€' },
      { name: 'Galta al horno', price: '13,15€' },
      { name: 'Librito de lomo o pollo', price: '14,15€' },
      { name: 'Churrasco de ternera', price: '16,15€' },
      { name: 'Ternera en salsa', price: '15,15€' },
      { name: 'Pollo asado', price: '14,15€' },
      { name: 'Milanesa de ternera', price: '15,25€' },
      { name: 'Hamburguesa de ternera', price: '15,25€' },
      {
        name: '— Guarniciones a elegir',
        price: '',
        desc: 'Arroz blanco · Patatas · Ensalada verde · Huevo frito · Pimiento frito / Tomate plancha',
      },
      { name: '— Guarnición extra', price: '2,35€' },
      { name: '— Salsa extra', price: '1,35€' },
    ],
  },
  {
    title: 'Suplementos para bocadillos',
    icon: 'plus',
    items: [
      { name: 'Cebolla caramelizada', price: '1,35€' },
      { name: 'Queso clásico', price: '0,95€' },
      { name: 'Queso de cabra', price: '1,95€' },
      { name: 'Jamón york o serrano', price: '1,35€' },
      { name: 'Pimiento', price: '0,85€' },
      { name: 'Lechuga', price: '0,85€' },
      { name: 'Huevo frito', price: '1,65€' },
      { name: 'Atún', price: '1,65€' },
      { name: 'Rodajas de tomate', price: '0,95€' },
    ],
  },
  {
    title: 'Platos Especiales',
    icon: 'chef-hat',
    items: [
      { name: 'Paella mixta o de mariscos (por persona)', price: '14,85€' },
      { name: 'Paella de verdura (por persona)', price: '13,85€' },
      { name: 'Fideuá (por persona)', price: '14,85€' },
    ],
  },
  {
    title: 'Vinos',
    icon: 'wine',
    items: [
      { name: 'Tinto — Ramón Bilbao', price: 'copa 3,20€ / botella 14,50€' },
      { name: 'Tinto — Cosechero Joven Rioja', price: 'copa 2,20€ / botella 9,50€' },
      { name: 'Blanco — Verdejo', price: 'copa 2,80€ / botella 13,00€' },
    ],
  },
  {
    title: 'Bebidas Especiales',
    icon: 'glass-water',
    items: [
      { name: 'Mojito de menta o fresa', price: '7,50€' },
      { name: 'Tinto de verano', price: '5,20€' },
      { name: 'Sangría de vino', price: '14,50€' },
      { name: 'Sangría de cava', price: '16,50€' },
      { name: 'Sangría de cava de fresa', price: '16,90€' },
    ],
  },
  {
    title: 'Postres',
    icon: 'cake-slice',
    items: [
      { name: 'Fresa con yogurt o nata', price: '4,80€', allergens: ['Lácteos'] },
      { name: 'Crema catalana casera', price: '3,80€', allergens: ['Huevos', 'Lácteos'] },
      { name: 'Tarta de queso casera', price: '4,20€', allergens: ['Gluten', 'Huevos', 'Lácteos'] },
      { name: 'Tarta Sacher', price: '3,80€', allergens: ['Gluten', 'Huevos', 'Lácteos', 'Frutos de cáscara'] },
      { name: 'Flan casero', price: '3,10€', allergens: ['Huevos', 'Lácteos'] },
    ],
  },
]
