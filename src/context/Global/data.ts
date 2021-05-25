import { generatePanels } from '../../utils'
import { Project } from './types'

const main = [
  'home',
  'about'
]

export const projects: Project[] = [
  {
    panel: 'comments',
    title: 'React Comments',
    subTitle: 'Dynamic commenting application',
    description: 'Simple, Fully featured, comments built with react. engage with users, comment on posts and enjoy fun conversations.',
    bulletPoints: [
      'Multiple threads to organize discussions',
      'Post & Reply to comments',
      'Pin comments to top of threads',
      'Cursor based pagination',
      'Order comments by old or new',
      'Choose from multiple users',
      'Jwt for simple authentication',
    ],
    projectUrl: 'https://react-comments.netlify.app',
    reversed: false,
    image: 'comments',
    builtWith: [
      'React',
      'MongoDB',
      'Node.js',
    ],
    clientLink: {
      name: 'Comments',
      slug: 'comments',
      url: '/projects/comments'
    }
  },
  {
    panel: 'search',
    title: 'Pokésearch',
    subTitle: 'Pokémon search app',
    description: 'Search & discover over 800 pokémon. powered by PokéAPI.',
    bulletPoints: [
      'Search by ID or Name',
      'Randomize pokémon to simplify discovery',
      'Beautiful responsive design'
    ],
    projectUrl: 'https://pocketmonsters-search.netlify.app',
    reversed: true,
    image: 'pokesearch',
    builtWith: [
      'React',
      'Typescript',
      'Node.js',
    ],
    clientLink: {
      name: 'Search',
      slug: 'search',
      url: '/projects/search'
    }
  }
]

export const panels = generatePanels(main, projects)