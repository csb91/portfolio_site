'use client'

import useSWR from 'swr';
import Tracks from './Tracks';
import { fetcher } from '@/lib/api';

const RecentlyPlayed = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify/recently-played', fetcher)

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.tracks.map((track, index) => (
        <Tracks track={track} key={index}/>
      ))}
    </ul>
  )
}

export default RecentlyPlayed;