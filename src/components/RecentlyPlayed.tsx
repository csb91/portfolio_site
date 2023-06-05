'use client'

import useSWR from 'swr';
import Tracks from './Tracks';
import Image from 'next/image';
import SpotifyLogo from '../../public/Spotify_Logo_RGB_Green.png'
import { fetcher } from '@/lib/api';

const RecentlyPlayed = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/spotify/recently-played', fetcher)

  if (!data) {
    return null;
  }

  return (
    <div className='container flex flex-col border w-1/2 p-10'>
      <div className='text-center font-bold justify-start'>
        Recently Played
      </div>
      <ol className='list-decimal'>
        {data.tracks.map((track, index) => (
          <Tracks track={track} key={index}/>
        ))}
      </ol>
    </div>
  )
}

export default RecentlyPlayed;