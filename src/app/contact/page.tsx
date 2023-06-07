import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from 'react-feather';
import SocialLinks from "@/components/SocialLinks";


export default function Contact() {

  return (
    <div className='flex-col px-4 sm:px-0'>
      <h1 className='text-4xl text-center'>
        Get In Touch!
      </h1>
      <h2 className='text-2xl text-center mt-2 px-4 md:px-64'>
        I&apos;m currently looking for new opportunities. Please feel free to reach out via the contact form or using one of the other methods listed.
      </h2>
      <div className='container flex flex-col-reverse justify-evenly mx-auto border-2 rounded-md md:flex-row mt-6 mb-6 p-4 rainbow-mesh max-w-5xl shadow-lg'>
        <div className='container flex flex-col justify-center mt-6 md:mt-0 md:mb-0 md:mr-10 border-2 rounded-md md:w-96 p-4'>
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