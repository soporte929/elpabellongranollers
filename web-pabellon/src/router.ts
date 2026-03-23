import { createIcons, icons } from 'lucide'

const VALID_ROUTES = ['inicio', 'carta', 'contacto'] as const
type Route = (typeof VALID_ROUTES)[number] | '404'

const PAGE_TITLES: Record<Route, string> = {
  inicio: 'El Pabellón - Bar Restaurante en Granollers',
  carta: 'Carta | El Pabellón Granollers',
  contacto: 'Contacto | El Pabellón Granollers',
  '404': 'Página no encontrada | El Pabellón Granollers',
}

const appContent = document.getElementById('app-content') as HTMLElement
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')
const menuToggle = document.querySelector('.menu-toggle') as HTMLButtonElement
const navLinksContainer = document.querySelector('.nav-links') as HTMLElement

let currentRoute = ''

function hideMenuMobile() {
  menuToggle.classList.remove('open')
  navLinksContainer.classList.remove('open')
}

function resolveRoute(raw: string): Route {
  const clean = raw.replace(/^\//, '').toLowerCase() || 'inicio'
  return (VALID_ROUTES as readonly string[]).includes(clean) ? (clean as Route) : '404'
}

export async function navigateTo(raw: string, pushState = true) {
  const route = resolveRoute(raw)
  if (currentRoute === route && appContent.innerHTML !== '') return

  appContent.classList.add('fade-out')
  hideMenuMobile()

  await new Promise(r => setTimeout(r, 300))

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-route') === route)
  })

  const template = document.getElementById(`tpl-${route}`) as HTMLTemplateElement | null
  if (template) {
    appContent.innerHTML = ''
    appContent.appendChild(template.content.cloneNode(true))

    if (route === 'carta') {
      const accordionContainer = document.getElementById('menu-accordion')
      if (accordionContainer) {
        // Lazy-load carta module only when needed
        const { renderCartaAccordion } = await import('./carta')
        renderCartaAccordion(accordionContainer)
      }
    }

    appContent.querySelectorAll<HTMLElement>('[data-route]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault()
        const r = el.getAttribute('data-route')
        if (r) navigateTo(r)
      })
    })

    try {
      createIcons({ icons })
    } catch (e) {
      console.error('Lucide icons failed to load:', e)
    }
  }

  currentRoute = route
  document.title = PAGE_TITLES[route]
  window.scrollTo(0, 0)
  appContent.classList.remove('fade-out')

  if (pushState) {
    const path = route === 'inicio' ? '/' : `/${route}`
    history.pushState({ route }, '', path)
  }
}

export function initRouter() {
  const initialPath = window.location.pathname
  navigateTo(initialPath, false)

  window.addEventListener('popstate', e => {
    const route: string = e.state?.route ?? 'inicio'
    navigateTo(route, false)
  })

  const logoLinks = document.querySelectorAll<HTMLAnchorElement>('.logo')
  ;[...navLinks, ...logoLinks].forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const r = link.getAttribute('data-route')
      if (r) navigateTo(r)
    })
  })

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open')
    navLinksContainer.classList.toggle('open')
  })
}
