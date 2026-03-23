# El Pabellón — Web Restaurante

Sitio web con menú digital para **El Pabellón Bar Restaurante** (Granollers, Barcelona).

## Stack

- **TypeScript** + **Vite** (vanilla, sin frameworks)
- **Lucide** para iconos
- **CSS** modular con variables

## Estructura

```
src/
├── main.ts          # Punto de entrada
├── router.ts        # Enrutador SPA con history API
├── carta.ts         # Renderizado del menú acordeón (lazy-loaded)
├── menu-data.ts     # Datos del menú (categorías y platos)
├── style.css        # CSS principal (importa los módulos)
└── css/
    ├── base.css     # Variables, reset, utilidades globales
    ├── nav.css      # Barra de navegación
    ├── home.css     # Página de inicio
    ├── carta.css    # Página de carta / menú
    ├── contacto.css # Página de contacto
    ├── footer.css   # Footer
    └── responsive.css # Media queries
```

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Scripts

| Comando         | Descripción                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desarrollo con HMR     |
| `npm run build` | Compilar TypeScript y empaquetar   |
| `npm run preview` | Previsualizar el build de producción |
| `npm run lint`  | Analizar código con ESLint         |
| `npm run format` | Formatear código con Prettier      |

## Rutas

| Ruta        | Página                    |
| ----------- | ------------------------- |
| `/`         | Inicio                    |
| `/carta`    | Menú completo (acordeón)  |
| `/contacto` | Teléfono, dirección, mapa |
| `/*`        | 404 — Página no encontrada |

## Actualizar el menú

Los datos de la carta están en `src/menu-data.ts`. Cada categoría sigue la estructura:

```ts
{
  title: 'Nombre categoría',
  icon: 'nombre-icono-lucide',
  items: [
    { name: 'Plato', price: '0,00€' },
    { name: 'Plato con descripción', price: '0,00€', desc: 'Descripción corta' },
  ]
}
```

## Nota sobre el servidor de producción

Al usar `history.pushState`, el servidor debe redirigir cualquier ruta desconocida a `index.html`. Ejemplo con Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
