import { LinkType, SocialLink, UserProfile } from './types';

export const USER_PROFILE: UserProfile = {
  name: "Agus",
  age: 18,
  role: "Sekretaris Umum",
  organization: "DPC KESAN Sinjai",
  interests: ["Filsafat", "Programming"],
  favoriteGames: ["Minecraft", "Mobile Legends"]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: '1',
    type: LinkType.TWITTER,
    url: 'https://x.com/aguss11082007?t=oeWMMLIh26HXLNnMF_5CIw&s=09',
    label: 'X / Twitter',
    color: 'bg-black',
    textColor: 'text-white'
  },
  {
    id: '2',
    type: LinkType.FACEBOOK,
    url: 'https://www.facebook.com/share/17mQUwZfEo/',
    label: 'Facebook',
    color: 'bg-blue-600',
    textColor: 'text-white'
  },
  {
    id: '3',
    type: LinkType.INSTAGRAM,
    url: 'https://www.instagram.com/agus11082007?igsh=MXducjhpaTU4Z2Y5bg==',
    label: 'Instagram',
    color: 'bg-pink-600',
    textColor: 'text-white'
  },
  {
    id: '4',
    type: LinkType.GITHUB,
    url: 'https://github.com/Agustin1108',
    label: 'GitHub',
    color: 'bg-gray-800',
    textColor: 'text-white'
  },
  {
    id: '5',
    type: LinkType.WHATSAPP,
    url: 'https://wa.me/6287731949761',
    label: 'WhatsApp',
    color: 'bg-green-500',
    textColor: 'text-black'
  }
];