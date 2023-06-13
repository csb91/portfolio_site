export interface linkInfo {
  label: string;
  link: string;
}

export interface NavbarLinksProps {
  link: linkInfo;
}

export interface formData {
  name: string;
  email: string;
  subject: string;
  message: string
}

export interface socialMedia {
  platform: string;
  url: string;
}

export interface skillBadges {
  label: string;
  url: string;
}