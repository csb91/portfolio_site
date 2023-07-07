import Image from "next/image";
import Link from "next/link";
import CCP_Badge from '../../public/aws-certified-cloud-practitioner.png'

const Certifications = () => {
  return (
    <div className='container mx-auto flex flex-row justify-center mt-6 mb-20 max-w-6xl'>
      <div>
        <Link
          href='https://www.credly.com/badges/8e3f1048-c027-44cf-bd55-1b12fa38fac0/public_url'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='AWS Certified Cloud Practitioner Certification Link'
        >
        <Image
          src={CCP_Badge}
          height='200'
          width='200'
          alt='AWS Certified Cloud Practitioner Badge'
        />
        </Link>
      </div>
    </div>
  )
}

export default Certifications;