import { createIcons, icons } from 'lucide'
import type { MenuItem } from './menu-data'

// Color por alérgeno (fijo para consistencia visual)
const ALLERGEN_COLOR: Record<string, string> = {
  Gluten: '#c0392b',
  Crustáceos: '#e74c3c',
  Huevos: '#e67e22',
  Pescado: '#2980b9',
  Cacahuetes: '#8e44ad',
  Soja: '#27ae60',
  Lácteos: '#16a085',
  'Frutos de cáscara': '#d35400',
  Apio: '#2ecc71',
  Mostaza: '#f39c12',
  Sésamo: '#e91e63',
  Sulfitos: '#7f8c8d',
  Altramuces: '#1abc9c',
  Moluscos: '#2c3e50',
}

let overlay: HTMLElement | null = null

function getOrCreateOverlay(): HTMLElement {
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.className = 'modal-overlay'
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-modal', 'true')
    document.body.appendChild(overlay)

    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal()
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal()
    })
  }
  return overlay
}

function buildAllergensHtml(allergens: MenuItem['allergens']): string {
  if (allergens === undefined) {
    return `<p class="allergens-unknown">
      <i data-lucide="info"></i> Sin registrar — consulta con el personal
    </p>`
  }
  if (allergens.length === 0) {
    return `<p class="allergens-none">
      <i data-lucide="check-circle"></i> Sin alérgenos registrados
    </p>`
  }
  const tags = allergens
    .map(a => `<span class="allergen-tag" style="background:${ALLERGEN_COLOR[a] ?? '#555'}">${a}</span>`)
    .join('')
  return `<div class="allergen-tags">${tags}</div>`
}

export function openModal(item: MenuItem) {
  const el = getOrCreateOverlay()

  const imageHtml = item.image
    ? `<img src="${item.image}" alt="${item.name}" class="modal-img" loading="lazy" />`
    : `<div class="modal-image-placeholder">
        <i data-lucide="utensils"></i>
        <span>Imagen próximamente</span>
       </div>`

  el.innerHTML = `
    <div class="modal" role="document">
      <button class="modal-close" aria-label="Cerrar">&times;</button>
      <div class="modal-image">${imageHtml}</div>
      <div class="modal-body">
        <div class="modal-header-info">
          <h2 class="modal-title">${item.name}</h2>
          ${item.price ? `<span class="modal-price">${item.price}</span>` : ''}
        </div>
        ${item.desc ? `<p class="modal-desc">${item.desc}</p>` : ''}
        <div class="modal-allergens">
          <h3 class="allergens-title">
            <i data-lucide="triangle-alert"></i> Alérgenos
          </h3>
          ${buildAllergensHtml(item.allergens)}
        </div>
        <p class="allergens-disclaimer">
          Información orientativa. Consulta siempre con el personal ante cualquier alergia o intolerancia.
        </p>
      </div>
    </div>
  `

  el.querySelector('.modal-close')?.addEventListener('click', closeModal)
  document.body.style.overflow = 'hidden'

  requestAnimationFrame(() => {
    el.classList.add('open')
    try { createIcons({ icons }) } catch { /* silent */ }
  })
}

export function closeModal() {
  if (!overlay) return
  overlay.classList.remove('open')
  document.body.style.overflow = ''
}
