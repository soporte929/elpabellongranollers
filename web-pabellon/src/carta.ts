import { menuData, type Allergen } from './menu-data'
import { openModal } from './modal'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function normalize(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
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

interface FilterState {
  allergen: Allergen | null
  query: string
}

function applyFilters(container: HTMLElement, state: FilterState) {
  const query = normalize(state.query.trim())
  const isFiltering = state.allergen !== null || query.length > 0

  container.querySelectorAll<HTMLElement>('.accordion-item').forEach((accordionItem, catIdx) => {
    const rows = accordionItem.querySelectorAll<HTMLElement>('.menu-list-item')
    let visibleCount = 0

    rows.forEach(row => {
      const itemIdx = parseInt(row.dataset.item ?? '0')
      const item = menuData[catIdx]?.items[itemIdx]

      if (!isFiltering || !item) {
        row.classList.remove('hidden')
        visibleCount++
        return
      }

      // Filtro de alérgeno
      if (state.allergen) {
        const allergens = item.allergens
        if (allergens === undefined || allergens.includes(state.allergen)) {
          row.classList.add('hidden')
          return
        }
      }

      // Filtro de búsqueda
      if (query) {
        const nameMatch = normalize(item.name).includes(query)
        const descMatch = item.desc ? normalize(item.desc).includes(query) : false
        if (!nameMatch && !descMatch) {
          row.classList.add('hidden')
          return
        }
      }

      row.classList.remove('hidden')
      visibleCount++
    })

    const isEmpty = visibleCount === 0
    accordionItem.classList.toggle('category-empty', isEmpty)

    // Al buscar: expandir categorías con resultados, colapsar las vacías
    if (query) {
      accordionItem.classList.toggle('open', !isEmpty)
    }
  })
}

function renderSearchBar(anchor: HTMLElement, state: FilterState, accordion: HTMLElement) {
  const wrapper = document.createElement('div')
  wrapper.className = 'search-bar'

  const input = document.createElement('input')
  input.type = 'search'
  input.className = 'search-input'
  input.placeholder = 'Buscar plato…'
  input.setAttribute('aria-label', 'Buscar plato en la carta')

  input.addEventListener('input', () => {
    state.query = input.value
    applyFilters(accordion, state)
  })

  wrapper.appendChild(input)
  anchor.before(wrapper)
}

function renderFilterBar(anchor: HTMLElement, state: FilterState, accordion: HTMLElement) {
  const allergens = getUsedAllergens()

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
      if (state.allergen === allergen) {
        state.allergen = null
        btn.classList.remove('active')
        btn.setAttribute('aria-pressed', 'false')
      } else {
        bar.querySelectorAll<HTMLButtonElement>('.allergen-btn').forEach(b => {
          b.classList.remove('active')
          b.setAttribute('aria-pressed', 'false')
        })
        state.allergen = allergen
        btn.classList.add('active')
        btn.setAttribute('aria-pressed', 'true')
      }
      applyFilters(accordion, state)
    })

    bar.appendChild(btn)
  })

  anchor.before(bar)
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

  // Estado compartido entre buscador y filtro de alérgenos
  const state: FilterState = { allergen: null, query: '' }

  // Orden de inserción inverso al orden visual deseado:
  // renderFilterBar inserta antes del accordion → [filter][accordion]
  // renderSearchBar inserta antes del filter bar → [search][filter][accordion]
  renderFilterBar(container, state, container)
  const filterBar = container.previousElementSibling as HTMLElement
  renderSearchBar(filterBar, state, container)

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
