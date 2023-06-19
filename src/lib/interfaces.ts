import HamburgerMenu from "@/components/HamburgerMenu";
import Spotify from "@/components/Spotify";
import { SetStateAction } from "react";
import { StringLiteral } from "typescript";

export interface linkInfo {
  label: string;
  link: string;
}

export interface NavbarLinksProps {
  link: linkInfo;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface formData {
  [key: string]: any;
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

export interface jobInfo {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

export interface Artist {
  name: string;
}

export interface Track {
  artists: Artist[];
  external_urls: {spotify: string};
  name: string;
  album: {images: {url: string}[]};
}

export interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  required?: boolean;
}

export interface JobCardProps {
  selectedJob: string;
  title: string;
  company: string;
  dates: string;
  description: string[];
  key: number;
}

export interface JobSelectorProps {
  selectedJob: string;
  setSelectedJob: React.Dispatch<React.SetStateAction<string>>;
  company: string;
}

export interface ProjectContainerProps {
  title: string;
  description: string;
  tech: string;
  github: string;
  image: string;
  index: string;
  key: string;
}

export interface SocialLinksProps {
  classNameContainer: string;
  classNameLinks: string;
}

export interface SpotifyProps {
  className: string;
}

export interface FetcherProps {
  url: string;
  method: string;
  body: string;
}