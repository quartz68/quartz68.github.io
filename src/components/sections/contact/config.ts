import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiBluesky,
  SiX,
  SiYoutube,
  SiInstagram
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'hi@ste.wang',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/quartz68',
      Icon: SiGithub
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/stevenwang34',
      Icon: SiInstagram
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/@Steven-xt5zn',
      Icon: SiYoutube
    },
    {
      name: 'X',
      href: 'https://x.com/quarttz127531',
      Icon: SiX
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app/profile/quartz68.bsky.social',
      Icon: SiBluesky
    }
  ]
};

export { contact };
