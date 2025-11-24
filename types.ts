export enum LinkType {
  TWITTER = 'Twitter',
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  GITHUB = 'GitHub',
  WHATSAPP = 'WhatsApp',
}

export interface SocialLink {
  id: string;
  type: LinkType;
  url: string;
  label: string;
  color: string; // Tailwind color class for accent
  textColor: string;
}

export interface UserProfile {
  name: string;
  age: number;
  role: string; // Sekretaris Umum
  organization: string; // DPC KESAN Sinjai
  interests: string[];
  favoriteGames: string[];
}
