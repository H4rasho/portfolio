import memoriceSpacial from '../assets/memorice_spacial.webp'
import monogatariApiProject from '../assets/monogatari-quotes.webp'
import rickAndMorty from '../assets/rickandmorty.webp'

export const PROJECTS = [
  {
    id: 'monogatari_api',
    title: 'Monogatari Quotes API',
    description:
      'An API for the Monogatari Series, with search and filter options.',
    image: monogatariApiProject,
    repository: 'https://github.com/H4rasho/monogatari-quotes',
    web: 'https://monogatari-quotes.vercel.app/',
  },
  {
    id: 'rick_and_morty',
    title: 'Rick and Morty Wiki',
    description:
      'A project with SEO Optimization, using SSR and GraphQL query language. Search by Character and other options. Persistent data with LocalStorage',
    image: rickAndMorty,
    repository: 'https://github.com/H4rasho/Rick-and-Morty-App',
    web: 'https://rick-and-morty-app-1d6t.vercel.app/',
  },
  {
    id: 'memorice_spacial',
    title: 'Memorice Spacial',
    description:
      'Memorice game with gobal state management. My first project with React',
    image: memoriceSpacial,
  },
]
