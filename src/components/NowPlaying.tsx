'use client'

import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import { VolumeX } from 'react-feather';


const NowPlaying = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/spotify/now-playing', fetcher)

  return (
    <div className='container flex flex-col p-4 items-center'>
      <div className='font-bold text-lg underline'>
        Now Playing
      </div>
      {data?.isPlaying &&
        <>
          <div className='flex flex-col my-auto items-center'>
            <Link
              href={data?.songUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Spotify link for ${data?.track} by ${data?.artist}`}
            >
              <div className='flex justify-center'>
                <Image
                  src={data?.albumImageUrl}
                  width={250}
                  height={250}
                  alt={`${data?.album} album art`}
                />
              </div>
              <div className='container flex flex-col items-center mt-4'>
                <div className='font-bold text-center'>
                  {data?.title}
                </div>
                <div className='text-sm text-center max-w-md'>
                  {data?.artist}
                </div>
              </div>
            </Link>
          </div>
        </>
      }
      {!data?.isPlaying &&
        <>
          <div className='flex flex-col my-auto items-center justify-center mt-24'>
            <VolumeX className='h-20 w-20'/>
            <div className='container flex flex-col items-center mt-20'>
              <div className='font-bold text-center'>
                No Music Currently Playing
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default NowPlaying;