# El Pabellón — Contexto del proyecto

Bar Restaurante en Granollers (Barcelona). Sitio web con menú digital.

## Arrancar el proyecto

```bash
cd web-pabellon && npm install && npm run dev
# → http://localhost:5173
```

Otros comandos desde `web-pabellon/`:

```bash
npm run build    # producción
npm run preview  # previsualizar build
npm run lint     # ESLint
npm run format   # Prettier
```

## Stack

- TypeScript + Vite (vanilla, sin frameworks)
- CSS modular con variables (sin Tailwind ni nada externo)
- Lucide para iconos
- Sin dependencias de UI

## Estructura

```
web-pabellon/src/
├── main.ts          # Entrada — inicializa router
├── router.ts        # SPA router con history.pushState
├── carta.ts         # Renderizado acordeón (lazy-loaded en /carta)
├── menu-data.ts     # ÚNICA fuente de verdad del menú
├── modal.ts         # Modales de detalle de plato
├── style.css        # Importa todos los módulos CSS
└── css/             # Un archivo por sección/componente
```

## Rutas

| Ruta        | Módulo cargado        |
| ----------- | --------------------- |
| `/`         | home (inline)         |
| `/carta`    | carta.ts (lazy)       |
| `/contacto` | contacto (inline)     |
| `/*`        | 404                   |

## Decisiones arquitectónicas

**Sin frameworks** — proyecto pequeño y de larga vida, vanilla TS minimiza deuda técnica y dependencias.

**Lazy loading de la carta** — el módulo `carta.ts` solo se importa cuando el usuario navega a `/carta`. Mantiene el bundle inicial pequeño.

**Patrón de alérgenos** (Reglamento UE 1169/2011):
- `allergens: undefined` → sin registrar (requiere consultar al personal)
- `allergens: []` → confirmado sin alérgenos
- `allergens: ['Gluten', ...]` → alérgenos concretos

**CSS modular** — cada sección tiene su propio archivo en `css/`. No usar clases globales fuera de `base.css`.

## Deploy

El servidor debe redirigir cualquier ruta a `index.html` (SPA). Ejemplo Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Flujo de trabajo

- Commits convencionales: `feat:` `fix:` `style:` `content:` `chore:`
- Tareas en `TASKS.md`
- `main` directo (sin branches de feature)
