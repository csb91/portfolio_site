import Image from 'next/image';
import profilePic from '../../../public/profile-pic.png'

export default function About() {
  return (
    <>
      <div>About Me</div>
      <div className='flex-column justify-center'>
      <Image
      src={profilePic}
      alt='Carter Brooks Profile Picture'
      priority
      />
            <Image
      src={profilePic}
      alt='Carter Brooks Profile Picture'
      priority
      />
            <Image
      src={profilePic}
      alt='Carter Brooks Profile Picture'
      priority
      />
      </div>
    </>

  )
}