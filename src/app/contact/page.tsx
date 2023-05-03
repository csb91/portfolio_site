import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from 'react-feather';
import SocialLinks from "@/components/SocialLinks";


export default function Contact() {

  return (
    <div className='flex-col px-4'>
      <h1 className='text-4xl text-center'>
        Get In Touch!
      </h1>
      <p className='text-center mt-2 px-4 md:px-64'>
        I&apos;m currently looking for new opportunities. Please feel free to reach out via the contact form or using one of the other methods listed.
      </p>
      <div className='container flex flex-col-reverse mx-auto border-2 rounded-md md:flex-row mt-6 p-4 justify-evenly rainbow-mesh max-w-5xl'>
        <div className='container flex flex-col mb-4 md:mb-0 md:mr-10 border-2 rounded-md md:w-96 justify-center'>
          <div className='flex flex-row mx-4'>
            <Phone className='mr-4'/>
            <p>+1 (469) 443-6939</p>
          </div>
          <div className='flex flex-row mx-4'>
            <Mail className='mr-4'/>
            <p>carter.brooks91@gmail.com</p>
          </div>
          <div className='flex justify-end'>
            <SocialLinks classNameContainer='' classNameLinks='hover:text-white'/>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}