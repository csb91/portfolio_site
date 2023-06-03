import Image from "next/image";

const Tracks = ({ track }) => {

  return (
    <li>
      <Image
        src={track.albumImageUrl}
        width='60'
        height='60'
        alt={track.album}
      />
      {track.artist}
    </li>
  )
}

export default Tracks;