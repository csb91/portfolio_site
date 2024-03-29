import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from 'react-feather';
import SocialLinks from "@/components/SocialLinks";

export const metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Contact | Carter Brooks',
    description: 'Carter Brooks Software Developer Contact Page',
    url: 'https://carterbrooks.dev',
    siteName: 'Carter Brooks',
    images: [
      {
        url: 'https://carterbrooks.dev/og.png',
        width: 1920,
        height: 1280,
      },
    ],
    locale: 'en-US',
    type: 'website'
  },
}

export default function Contact() {
  return (
    <div className='flex-col px-4 sm:px-0'>
      <h1 className='text-4xl text-center purple-orange bg-clip-text text-transparent'>
        Get In Touch!
      </h1>
      <h2 className='text-2xl text-center mt-2 px-4 lg:px-64 purple-orange bg-clip-text text-transparent'>
        I&apos;m currently looking for new opportunities. Please feel free to reach out via the contact form or using one of the other methods listed.
      </h2>
      <div className='container flex flex-col-reverse justify-evenly mx-auto border-2 rounded-md md:flex-row mt-6 mb-6 p-4 new-mesh dark:dark-mesh max-w-6xl shadow-lg'>
        <div className='container flex flex-col justify-center mt-6 md:mt-0 md:mb-0 md:mr-10 border-2 rounded-md md:w-96 p-4 dark:text-white'>
          <div className='flex flex-row mx-4 mb-6'>
            <Phone className='mr-4'/>
            <p>+1 (469) 443-6939</p>
          </div>
          <div className='flex flex-row mx-4 mb-10'>
            <a href='mailto:carter.brooks91@gmail.com' className='flex flex-row hover:text-white'>
              <Mail className='mr-4'/>
              <p>carter.brooks91@gmail.com</p>
            </a>
          </div>
          <div className='flex justify-end'>
            <SocialLinks classNameContainer='justify-evenly mx-4' classNameLinks='hover:text-white'/>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}