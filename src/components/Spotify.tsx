import RecentlyPlayed from "./RecentlyPlayed";
import NowPlaying from "./NowPlaying";
import Image from 'next/image';
import Link from "next/link";
import clsx from "clsx";
import SpotifyLogo from '../../public/Spotify_Logo_RGB_Green.png';

const Spotify = ({ className }) => {
  return (
    <div className={clsx('container flex flex-col mx-auto max-w-5xl', className)}>
      <div className='container flex mx-auto justify-start'>
      <Link
        href='https://www.spotify.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Spotify Link'
      >
        <Image
          src={SpotifyLogo}
          width='150'
          height='auto'
          alt='Spotify Logo'
        />
      </Link>
      </div>
      <div className='candy-mesh rounded-md container flex flex-col md:flex-row mx-auto border-2 shadow-xl'>
        <div className='container flex justify-center mx-auto'>
          <NowPlaying />
        </div>
        <div className='container flex justify-center mx-auto'>
          <RecentlyPlayed />
        </div>
      </div>
    </div>
  )
}

export default Spotify;