import { Link } from '@/types/link';

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: 'Home (Earth)',
    href: '/',
  },
  {
    title: 'Read Me',
    href: '/about',
  },
  // {
  //   title: 'Projects',
  //   href: '/projects',
  // },
  {
    title: 'Words',
    href: '/blog',
  }
];

export { linkLimit, links };
