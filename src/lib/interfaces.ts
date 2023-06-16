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

export interface project {
  title: string;
  description: string;
  tech: string;
  github: string;
  image: string;
}

export interface StringArray {
  [index: number]: string;
}

export interface jonInfo {
  title: string;
  company: string;
  dates: string;
  description: StringArray;
}