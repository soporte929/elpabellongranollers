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
      { name: 'Lomo', price: '4,45€', desc: 'Lomo de cerdo a la plancha en pan crujiente', allergens: ['Gluten'] },
      { name: 'Bacón', price: '4,65€', desc: 'Bacón crujiente en pan tostado', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Pollo', price: '4,65€', desc: 'Pechuga de pollo a la plancha', allergens: ['Gluten'] },
      { name: 'Butifarra', price: '4,55€', desc: 'Butifarra catalana a la brasa', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Pinchos morunos', price: '5,15€', desc: 'Carne adobada con especias árabes', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Calamares Andaluza', price: '5,15€', desc: 'Calamares fritos rebozados en harina fina', allergens: ['Gluten', 'Moluscos'] },
      { name: 'Calamares a la romana', price: '4,25€', desc: 'Calamares en rebozado suave de huevo', allergens: ['Gluten', 'Huevos', 'Lácteos', 'Moluscos'] },
      { name: 'Tortilla francesa', price: '4,55€', desc: 'Tortilla de huevo esponjosa', allergens: ['Gluten', 'Huevos'] },
      { name: 'Serranito de lomo o pollo', price: '6,15€', desc: 'Con jamón serrano, pimiento verde y tomate', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Hamburguesa', price: '4,35€', desc: 'Hamburguesa de ternera sencilla', allergens: ['Gluten', 'Huevos', 'Mostaza'] },
      { name: 'Hamburguesa Completa', price: '10,45€', desc: 'Ternera con lechuga, tomate, queso y salsas', allergens: ['Gluten', 'Huevos', 'Lácteos', 'Mostaza'] },
      {
        name: 'Hamburguesa de la casa',
        price: '7,25€',
        desc: 'Cebolla caramelizada, lechuga y queso de cabra',
        allergens: ['Gluten', 'Huevos', 'Lácteos', 'Mostaza'],
      },
      {
        name: 'Vegetal de pollo',
        price: '6,00€',
        desc: 'Tomate rodaja, lechuga y salsas',
        allergens: ['Gluten', 'Huevos', 'Lácteos', 'Mostaza'],
      },
      { name: 'Milanesa de ternera', price: '6,50€', desc: 'Filete empanado de ternera', allergens: ['Gluten', 'Huevos'] },
      {
        name: 'Hot dog especial',
        price: '6,25€',
        desc: 'Cebolla crujiente, maíz dulce, queso, jalapeños y salsas',
        allergens: ['Gluten', 'Lácteos', 'Mostaza', 'Sulfitos'],
      },
      { name: 'Frankfurt', price: '4,35€', desc: 'Salchicha frankfurt clásica en pan', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Bikini', price: '3,55€', desc: 'Sándwich de jamón york y queso fundido', allergens: ['Gluten', 'Lácteos'] },
      { name: 'Tostadas', price: '2,80€', desc: 'Pan tostado con tomate y aceite', allergens: ['Gluten'] },
    ],
  },
  {
    title: 'Bocadillos Fríos',
    icon: 'sandwich',
    items: [
      { name: 'Fuet', price: '3,95€', desc: 'Embutido catalán curado', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Jamón serrano', price: '3,95€', desc: 'Jamón serrano loncheado', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Jamón York', price: '3,95€', desc: 'Jamón cocido en lonchas', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Jamón ibérico', price: '7,15€', desc: 'Jamón ibérico de bellota loncheado', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Queso curado', price: '4,35€', desc: 'Queso curado de oveja en lonchas', allergens: ['Gluten', 'Lácteos'] },
      { name: 'Chorizo picante', price: '3,75€', desc: 'Chorizo curado con un toque picante', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Atún', price: '3,95€', desc: 'Atún en conserva con aceite', allergens: ['Gluten', 'Pescado'] },
      { name: 'Vegetal de atún', price: '5,25€', desc: 'Atún con lechuga, tomate y mayonesa', allergens: ['Gluten', 'Pescado', 'Huevos', 'Mostaza'] },
    ],
  },
  {
    title: 'Tapas Calientes',
    icon: 'flame',
    items: [
      { name: 'Alitas de pollo', price: '8,30€', desc: 'Alitas crujientes rebozadas', allergens: ['Gluten', 'Huevos'] },
      { name: 'Pinchos moruno', price: '9,90€', desc: 'Brochetas de carne adobada con especias', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Mejillones a la marinera', price: '11,75€', desc: 'Mejillones en salsa de vino blanco y ajo', allergens: ['Gluten', 'Moluscos', 'Sulfitos'] },
      { name: 'Patatas bravas', price: '7,75€', desc: 'Patatas fritas con salsa brava picante', allergens: ['Gluten', 'Huevos'] },
      { name: 'Patatas fritas', price: '6,45€', desc: 'Patatas fritas caseras crujientes', allergens: [] },
      { name: 'Sepia a la plancha', price: '11,05€', desc: 'Sepia tierna cocinada a la plancha', allergens: ['Moluscos'] },
      { name: 'Calamares a la plancha', price: '11,05€', desc: 'Calamares a la plancha con un toque de limón', allergens: ['Moluscos'] },
      { name: 'Calamares a la romana', price: '8,35€', desc: 'Calamares en rebozado suave de huevo', allergens: ['Gluten', 'Huevos', 'Lácteos', 'Moluscos'] },
      { name: 'Calamares a la andaluza', price: '10,05€', desc: 'Calamares fritos rebozados en harina fina', allergens: ['Gluten', 'Moluscos'] },
      { name: 'Nuggets de pollo', price: '8,35€', desc: 'Trozos de pollo empanados y crujientes', allergens: ['Gluten', 'Huevos'] },
      { name: 'Morros fritos', price: '7,45€', desc: 'Morros de cerdo rebozados y fritos', allergens: ['Gluten'] },
      { name: 'Chocos', price: '9,65€', desc: 'Sepia pequeña frita en trozos', allergens: ['Gluten', 'Moluscos'] },
      { name: 'Rejos', price: '10,05€', desc: 'Tentáculos de calamar fritos', allergens: ['Gluten', 'Moluscos'] },
      { name: 'Ternera en salsa', price: '10,85€', desc: 'Guiso de ternera en salsa casera', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Callos', price: '9,35€', desc: 'Callos guisados en salsa tradicional', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Croquetas de jamón', price: '8,35€', desc: 'Croquetas caseras de jamón serrano', allergens: ['Gluten', 'Huevos', 'Lácteos'] },
      { name: 'Fajitas de ternera o pollo', price: '10,55€', desc: 'Tortilla de trigo con carne, pimientos y queso', allergens: ['Gluten', 'Lácteos', 'Sulfitos'] },
      { name: 'Fajitas mixtas', price: '11,35€', desc: 'Tortilla de trigo con ternera y pollo', allergens: ['Gluten', 'Lácteos', 'Sulfitos'] },
      { name: 'Chipirones', price: '10,55€', desc: 'Chipirones enteros fritos', allergens: ['Gluten', 'Moluscos'] },
      { name: 'Tiritas pio pio', price: '10,35€', desc: 'Tiras finas de pollo empanadas', allergens: ['Gluten', 'Huevos'] },
      { name: 'Nachos', price: '15,75€', desc: 'Nachos con queso fundido, jalapeños y salsas', allergens: ['Gluten', 'Lácteos'] },
      { name: 'Huevos rotos', price: '10,85€', desc: 'Huevos fritos sobre patatas con jamón', allergens: ['Huevos'] },
      { name: 'Salchipapa', price: '9,05€', desc: 'Patatas fritas con salchichas y salsas', allergens: ['Gluten', 'Sulfitos'] },
      {
        name: 'Patatas pituko',
        price: '9,95€',
        desc: 'Patatas redondas, beicon y queso cheddar',
        allergens: ['Lácteos', 'Sulfitos'],
      },
    ],
  },
  {
    title: 'Tapas Frías',
    icon: 'utensils',
    items: [
      { name: 'Olivas rellenas', price: '5,15€', desc: 'Aceitunas rellenas de anchoa', allergens: ['Sulfitos'] },
      { name: 'Plato de Queso curado', price: '9,75€', desc: 'Selección de queso curado en lonchas', allergens: ['Lácteos'] },
      { name: 'Boquerones en vinagre', price: '11,85€', desc: 'Boquerones marinados en vinagre y ajo', allergens: ['Pescado', 'Sulfitos'] },
      { name: 'Anchoas del Cantábrico', price: '13,85€', desc: 'Filetes de anchoa en aceite de oliva', allergens: ['Pescado'] },
      { name: 'Plato de Jamón ibérico', price: '14,35€', desc: 'Jamón ibérico de bellota loncheado', allergens: ['Sulfitos'] },
      { name: 'Berberechos', price: '10,35€', desc: 'Berberechos al natural en su jugo', allergens: ['Moluscos', 'Sulfitos'] },
    ],
  },
  {
    title: 'Ensaladas',
    icon: 'salad',
    items: [
      { name: 'Ensalada de queso cabra', price: '9,95€', desc: 'Mezclum, queso de cabra, nueces y vinagreta', allergens: ['Lácteos', 'Mostaza'] },
      { name: 'Ensalada de la casa', price: '10,35€', desc: 'Lechuga, tomate, atún, huevo y olivas', allergens: ['Huevos', 'Mostaza'] },
      { name: 'Ensalada con aguacate', price: '9,85€', desc: 'Mezclum, aguacate, tomate cherry y huevo', allergens: ['Huevos', 'Mostaza'] },
      { name: 'Ensalada mediterránea', price: '9,80€', desc: 'Tomate, pepino, cebolla, olivas y orégano', allergens: ['Mostaza', 'Sulfitos'] },
    ],
  },
  {
    title: 'Platos Combinados',
    icon: 'utensils-crossed',
    items: [
      { name: 'Pincho moruno', price: '16,15€', desc: 'Brochetas de carne adobada con guarnición', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Pollo a la plancha o rebozado', price: '14,85€', desc: 'Pechuga de pollo con guarnición a elegir', allergens: ['Gluten', 'Huevos'] },
      { name: 'Butifarra', price: '14,25€', desc: 'Butifarra catalana a la brasa con guarnición', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Bistec', price: '14,75€', desc: 'Bistec de ternera a la plancha con guarnición', allergens: [] },
      { name: 'Alitas de pollo', price: '16,15€', desc: 'Alitas crujientes rebozadas con guarnición', allergens: ['Gluten', 'Huevos'] },
      { name: 'Calamares a la plancha o rebozado', price: '17,15€', desc: 'Calamares con guarnición a elegir', allergens: ['Gluten', 'Huevos', 'Moluscos'] },
      { name: 'Sepia', price: '17,15€', desc: 'Sepia a la plancha con guarnición', allergens: ['Moluscos'] },
      { name: 'Dorada', price: '18,75€', desc: 'Dorada a la plancha con guarnición', allergens: ['Pescado'] },
      { name: 'Galta al horno', price: '14,15€', desc: 'Carrillera de cerdo asada al horno', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Librito de lomo o pollo', price: '15,15€', desc: 'Carne rellena de jamón y queso empanada', allergens: ['Gluten', 'Huevos', 'Lácteos'] },
      { name: 'Churrasco de ternera', price: '17,15€', desc: 'Churrasco a la brasa con guarnición', allergens: ['Sulfitos'] },
      { name: 'Ternera en salsa', price: '16,15€', desc: 'Guiso de ternera en salsa casera con guarnición', allergens: ['Gluten', 'Sulfitos'] },
      { name: 'Pollo asado', price: '15,15€', desc: 'Pollo asado al horno con guarnición', allergens: [] },
      { name: 'Milanesa de ternera', price: '16,25€', desc: 'Filete empanado de ternera con guarnición', allergens: ['Gluten', 'Huevos'] },
      {
        name: '— Guarniciones a elegir',
        price: '',
        desc: 'Arroz blanco · Patatas · Ensalada verde · Huevo frito · Pimiento frito / Tomate plancha',
      },
      { name: '— Guarnición extra', price: '2,35€', desc: 'Una guarnición adicional a elegir' },
      { name: '— Salsa extra', price: '1,35€', desc: 'Brava, alioli, kétchup, mostaza o barbacoa' },
    ],
  },
  {
    title: 'Suplementos para bocadillos',
    icon: 'plus',
    items: [
      { name: 'Cebolla caramelizada', price: '1,35€', desc: 'Cebolla pochada con un toque dulce' },
      { name: 'Queso clásico', price: '0,95€', desc: 'Loncha de queso fundido' },
      { name: 'Queso de cabra', price: '1,95€', desc: 'Rodaja de queso de cabra' },
      { name: 'Jamón york o serrano', price: '1,35€', desc: 'Loncha de jamón a elegir' },
      { name: 'Pimiento', price: '0,85€', desc: 'Pimiento verde frito' },
      { name: 'Lechuga', price: '0,85€', desc: 'Hojas de lechuga fresca' },
      { name: 'Huevo frito', price: '1,65€', desc: 'Huevo frito a la plancha' },
      { name: 'Atún', price: '1,65€', desc: 'Atún en conserva con aceite' },
      { name: 'Rodajas de tomate', price: '0,95€', desc: 'Tomate natural en rodajas' },
    ],
  },
  {
    title: 'Platos Especiales',
    icon: 'chef-hat',
    items: [
      { name: 'Paella mixta o de mariscos (por persona)', price: '14,85€', desc: 'Arroz con carne y marisco, mínimo 2 personas', allergens: ['Crustáceos', 'Moluscos', 'Pescado'] },
      { name: 'Paella de verdura (por persona)', price: '13,85€', desc: 'Arroz con verduras de temporada, mínimo 2 personas', allergens: [] },
      { name: 'Fideuá (por persona)', price: '14,85€', desc: 'Fideos con marisco al estilo mediterráneo, mínimo 2 personas', allergens: ['Gluten', 'Crustáceos', 'Moluscos', 'Pescado'] },
    ],
  },
  {
    title: 'Vinos',
    icon: 'wine',
    items: [
      { name: 'Tinto — Ramón Bilbao', price: 'copa 3,35€ / botella 15,50€', desc: 'Crianza D.O.Ca. Rioja' },
      { name: 'Tinto — Cosechero Joven Rioja', price: 'copa 2,35€ / botella 10,50€', desc: 'Vino joven D.O.Ca. Rioja' },
      { name: 'Blanco — Verdejo', price: 'copa 2,95€ / botella 14,00€', desc: 'Verdejo D.O. Rueda, fresco y afrutado' },
    ],
  },
  {
    title: 'Bebidas Especiales',
    icon: 'glass-water',
    items: [
      { name: 'Tinto de verano', price: '6,20€', desc: 'Vino tinto con gaseosa y limón' },
      { name: 'Sangría de vino', price: '15,50€', desc: 'Jarra de sangría con frutas de temporada' },
      { name: 'Sangría de cava', price: '17,50€', desc: 'Jarra de sangría con cava espumoso' },
      { name: 'Sangría de cava de fresa', price: '17,90€', desc: 'Sangría de cava con fresas naturales' },
    ],
  },
  {
    title: 'Postres',
    icon: 'cake-slice',
    items: [
      { name: 'Fresa con yogurt o nata', price: '5,80€', desc: 'Fresas frescas con yogurt natural o nata montada', allergens: ['Lácteos'] },
      { name: 'Crema catalana casera', price: '4,80€', desc: 'Crema de yema con costra de caramelo', allergens: ['Huevos', 'Lácteos'] },
      { name: 'Tarta de queso casera', price: '5,20€', desc: 'Tarta de queso cremosa hecha en casa', allergens: ['Gluten', 'Huevos', 'Lácteos'] },
      { name: 'Tarta Sacher', price: '4,80€', desc: 'Bizcocho de chocolate con mermelada de albaricoque', allergens: ['Gluten', 'Huevos', 'Lácteos', 'Frutos de cáscara'] },
      { name: 'Flan casero', price: '4,10€', desc: 'Flan de huevo con caramelo, hecho en casa', allergens: ['Huevos', 'Lácteos'] },
    ],
  },
]
