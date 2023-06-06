import Image from "next/image";
import Link from "next/link";

const Tracks = ({ track }) => {

  return (
    <li className='border'>
      <Link
        href={track.songUrl}
        target='_blank'
        rel='noreferrer'
        aria-label={`${track.title} spotify link`}
      >
        <div className='container flex flex-row'>
          <div>
          <Image
            src={track.albumImageUrl}
            width='60'
            height='60'
            alt={`${track.album} album art - ${track.artist}`}
          />
          </div>
          <div className='container flex flex-col text-left mt-auto mb-auto'>
            <div className='font-bold text-sm'>
            {track.title}
            </div>
            <div className='text-xs'>
            {track.artist}
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Tracks;


//Add custom numbering w/ circle and number enclosed