import Image from "next/image";
import Link from "next/link";

const Tracks = ({ track }) => {

  return (
    <li className='border'>
      <Link href={track.songUrl}>
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
            <div className='font-bold'>
            {track.title}
            </div>
            <div>
            {track.artist}
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Tracks;