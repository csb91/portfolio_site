'use client'

import useSWR from 'swr';
import Tracks from './Tracks';
import { Track } from '@/lib/interfaces';

const RecentlyPlayed = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/spotify/recently-played', fetcher)

  if (!data) {
    return null;
  }

  return (
    <div className='container flex flex-col p-4 justify-center'>
      <div className='text-center text-lg font-bold underline'>
        Recently Played
      </div>
      <ol>
        {data.tracks.map((track: Track, index: number) => (
          <Tracks track={track} index={index + 1} key={index} />
        ))}
      </ol>
    </div>
  )
}

export default RecentlyPlayed;