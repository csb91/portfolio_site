'use client'

import useSWR from 'swr';
import Tracks from './Tracks';
import clsx from 'clsx';
import { Circle } from "react-feather";
import { fetcher } from '@/lib/api';

const RecentlyPlayed = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
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
        {data.tracks.map((track, index) => (
          <Tracks track={track} ind={index + 1} key={index} />
        ))}
      </ol>
    </div>
  )
}

export default RecentlyPlayed;