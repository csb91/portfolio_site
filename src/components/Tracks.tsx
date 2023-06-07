import Image from "next/image";
import Link from "next/link";

const Tracks = ({ track, ind }) => {

  return (
    <li className='container flex items-center border h-20'>
      <Link
        href={track.songUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Spotify link for ${track.title} by ${track.artist}`}
      >
        <div className='container flex flex-row items-center'>
          <div className='border rounded-full m-1 px-2.5 py-1.5 h-1.2'>
            <div className='text-xs font-bold m-1'>
              {ind}
            </div>
          </div>
          <div className='flex-shrink-0'>
            <Image
              src={track.albumImageUrl}
              width='60'
              height='60'
              alt={`${track.album} album art - ${track.artist}`}
            />
          </div>
          <div className='container flex flex-col text-left pl-1'>
            <div className='font-bold text-sm overflow-hidden text-ellipsis max-h-10'>
            {track.title}
            </div>
            <div className='text-xs overflow-hidden text-ellipsis max-h-9'>
            {track.artist}
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Tracks;