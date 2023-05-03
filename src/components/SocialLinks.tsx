import clsx from "clsx";
import Link from "next/link";
import { Twitter, GitHub, Linkedin } from "react-feather";
import { socialMedia } from "@/interfaces/interfaces";

const socials: socialMedia[] = [
  {platform: 'Twitter', url: 'https://twitter.com/CarterBrooksDev'},
  {platform: 'GitHub', url: 'https://github.com/csb91'},
  {platform: 'Linkedin', url: 'https://www.linkedin.com/in/carterbrooks91/'}
]

const SocialLinks = ({ classNameContainer, classNameLinks }) => {

  return (
    <div className={clsx('container flex flex-row justify-evenly', classNameContainer)}>
      {socials.map((social, index) =>
        <Link
          href={social.url}
          target='_blank'
          rel='noreferrer'
          aria-label={`${social.platform} profile`}
          key={index}
          className={clsx(classNameLinks)}
        >
          {social.platform === 'Twitter' && <Twitter />}
          {social.platform === 'GitHub' && <GitHub />}
          {social.platform === 'Linkedin' && <Linkedin />}
        </Link>
        )}
    </div>
  )
}

export default SocialLinks;