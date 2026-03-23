import { menuData } from './menu-data'
import { openModal } from './modal'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function renderCartaAccordion(container: HTMLElement) {
  let html = ''

  menuData.forEach((category, idx) => {
    let itemsHtml = ''
    category.items.forEach((item, itemIdx) => {
      itemsHtml += `
        <li class="menu-list-item" data-cat="${idx}" data-item="${itemIdx}" role="button" tabindex="0" aria-label="Ver detalles de ${escapeHtml(item.name)}">
          <div class="dish-info">
            <span class="dish-name">${escapeHtml(item.name)}</span>
            ${item.desc ? `<span class="dish-desc">${escapeHtml(item.desc)}</span>` : ''}
          </div>
          <span class="dish-price">${escapeHtml(item.price)}</span>
        </li>
      `
    })

    html += `
      <div class="accordion-item" data-index="${idx}">
        <div class="accordion-header">
          <span class="accordion-icon"><i data-lucide="${category.icon}"></i></span>
          <span class="accordion-title">${escapeHtml(category.title)}</span>
          <span class="accordion-chevron"><i data-lucide="chevron-down"></i></span>
        </div>
        <div class="accordion-content">
          <ul class="menu-list">
            ${itemsHtml}
          </ul>
        </div>
      </div>
    `
  })

  container.innerHTML = html

  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80

  // Hace clickable cada plato para abrir su popup
  container.querySelectorAll<HTMLElement>('.menu-list-item').forEach(row => {
    // Recupera categoría e ítem por índices almacenados en data-*
    const catIdx = parseInt(row.dataset.cat ?? '0')
    const itemIdx = parseInt(row.dataset.item ?? '0')
    const item = menuData[catIdx]?.items[itemIdx]
    if (item) {
      row.addEventListener('click', () => openModal(item))
    }
  })

  const items = container.querySelectorAll<HTMLElement>('.accordion-item')
  items.forEach(item => {
    item.querySelector('.accordion-header')?.addEventListener('click', () => {
      const isOpening = !item.classList.contains('open')

      items.forEach(other => {
        if (other !== item) other.classList.remove('open')
      })
      item.classList.toggle('open')

      if (isOpening) {
        const top = item.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    })
  })
}
