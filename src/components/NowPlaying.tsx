'use client'

import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';

const NowPlaying = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/spotify/now-playing', fetcher)

  if (!data) {
    console.log('test', data?.isPlaying)
  }

  return (
    <div className='container flex flex-col border w-1/2 p-10 items-center'>
      <div className='font-bold'>
      Now Playing
      </div>
      {console.log(data)}
      {data?.isPlaying &&
      <>
        <div>
          <Image
            src={data?.albumImageUrl}
            width='200'
            height='200'
            alt={`${data?.album} album art`}
          />
        </div>
        <div className='container flex flex-col text-left mt-auto mb-auto items-center'>
          <div className='font-bold'>
            {data?.title}
          </div>
          <div className='text-sm'>
            {data?.artist}
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default NowPlaying;

//Add link to current song playing
//Add something for nothing currently playing
//Add equalizer??