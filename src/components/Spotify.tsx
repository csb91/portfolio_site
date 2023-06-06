import RecentlyPlayed from "./RecentlyPlayed";
import NowPlaying from "./NowPlaying";
import Image from 'next/image';
import Link from "next/link";
import SpotifyLogo from '../../public/Spotify_Logo_RGB_Green.png'

const Spotify = () => {
  return (
    <div className='container flex flex-col mx-auto'>
      <div className='container flex mx-auto'>
      <Image
        src={SpotifyLogo}
        width='150'
        height='auto'
        alt='Spotify Logo'
        className='justify-start'
      />
      </div>
      <div className='container flex flex-colum md:flex-row'>
        <NowPlaying />
        <RecentlyPlayed />
      </div>
    </div>
  )
}

export default Spotify;



//Add link to spotify from logo