import { defineConfig } from 'vite'

export default defineConfig({
  // SPA fallback: sirve index.html para cualquier ruta desconocida
  // Necesario para que history.pushState funcione al refrescar la página
  appType: 'spa',
})
