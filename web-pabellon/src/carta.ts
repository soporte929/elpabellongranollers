import { menuData, type Allergen } from './menu-data'
import { openModal } from './modal'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function getUsedAllergens(): Allergen[] {
  const used = new Set<Allergen>()
  menuData.forEach(category => {
    category.items.forEach(item => {
      item.allergens?.forEach(a => used.add(a))
    })
  })
  return Array.from(used).sort()
}

function applyFilter(container: HTMLElement, active: Allergen | null) {
  container.querySelectorAll<HTMLElement>('.accordion-item').forEach((accordionItem, catIdx) => {
    const rows = accordionItem.querySelectorAll<HTMLElement>('.menu-list-item')
    let visibleCount = 0

    rows.forEach(row => {
      const itemIdx = parseInt(row.dataset.item ?? '0')
      const item = menuData[catIdx]?.items[itemIdx]

      if (!active || !item) {
        row.classList.remove('hidden')
        visibleCount++
        return
      }

      const allergens = item.allergens
      // Sin registrar → ocultar cuando hay filtro activo
      if (allergens === undefined) {
        row.classList.add('hidden')
        return
      }
      // Contiene el alérgeno → ocultar
      if (allergens.includes(active)) {
        row.classList.add('hidden')
        return
      }

      row.classList.remove('hidden')
      visibleCount++
    })

    // Ocultar categoría entera si no hay platos visibles
    accordionItem.classList.toggle('category-empty', visibleCount === 0)
  })
}

function renderFilterBar(accordion: HTMLElement): Allergen | null {
  const allergens = getUsedAllergens()
  let activeFilter: Allergen | null = null

  const bar = document.createElement('div')
  bar.className = 'allergen-filter'
  bar.setAttribute('role', 'group')
  bar.setAttribute('aria-label', 'Filtrar por alérgeno')

  const label = document.createElement('span')
  label.className = 'allergen-filter-label'
  label.textContent = 'Sin:'
  bar.appendChild(label)

  allergens.forEach(allergen => {
    const btn = document.createElement('button')
    btn.className = 'allergen-btn'
    btn.textContent = allergen
    btn.setAttribute('aria-pressed', 'false')

    btn.addEventListener('click', () => {
      if (activeFilter === allergen) {
        activeFilter = null
        btn.classList.remove('active')
        btn.setAttribute('aria-pressed', 'false')
      } else {
        bar.querySelectorAll<HTMLButtonElement>('.allergen-btn').forEach(b => {
          b.classList.remove('active')
          b.setAttribute('aria-pressed', 'false')
        })
        activeFilter = allergen
        btn.classList.add('active')
        btn.setAttribute('aria-pressed', 'true')
      }
      applyFilter(accordion, activeFilter)
    })

    bar.appendChild(btn)
  })

  accordion.before(bar)
  return activeFilter
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

  renderFilterBar(container)

  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80

  container.querySelectorAll<HTMLElement>('.menu-list-item').forEach(row => {
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
