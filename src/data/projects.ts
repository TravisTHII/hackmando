export const projects = [
  {
    title: 'React Comments',
    subTitle: 'Dynamic commenting application',
    description:
      'Simple, Fully featured, comments built with react. engage with users, comment on posts and enjoy fun conversations.',
    bulletPoints: [
      'Multiple threads to organize discussions',
      'Post & Reply to comments',
      'Pin comments to top of threads',
      'Cursor based pagination',
      'Order comments by old or new',
      'Choose from multiple users',
      'Jwt for simple authentication',
    ],
    url: 'https://react-comments.netlify.app',
    reversed: false,
    image: '/images/react-comments.jpg',
    icon: '/images/react-comments-icon.png',
    color: '#6100b1',
    techStack: ['react', 'typescript', 'mongodb', 'nodejs'],
    year: '2020',
  },
  {
    title: 'Pokésearch',
    subTitle: 'Pokémon search app',
    description:
      'Search & discover over 800 pokémon, powered by PokéAPI. Gotta Search ‘Em All!',
    bulletPoints: [
      'Learn about your favorite pokémon',
      'Search by ID or Name',
      'Randomize pokémon to simplify discovery',
      'Beautiful responsive design',
      'React Query for simple data fetching logic',
    ],
    url: 'https://pocketmonsters-search.netlify.app',
    reversed: true,
    image: '/images/pokesearch.jpg',
    icon: '/images/pokesearch-icon.svg',
    color: '#ffcb05',
    techStack: ['react', 'typescript', 'nodejs'],
    year: '2020',
  },
]
