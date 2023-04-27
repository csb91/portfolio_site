'use client'

import GlassPane from "./GlassPane";
import Input from "./Input";

const ContactForm = () => {

  return (
    <>
      <form className='flex flex-col border-2 md:w-1/2 p-1'>
        <label htmlFor='name'>Name</label>
        <Input
          required
          id='name'
          className='bg-transparent'
          placeholder='Name'
        />
        <label htmlFor='email'>Email</label>
        <Input
          required
          type='email'
          id='email'
          className='bg-transparent'
          placeholder='Email'
        />
        <label htmlFor='subject'>Subject</label>
        <Input
          required
          id='subject'
          className='bg-transparent'
          placeholder='Subject'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          required
          id='message'
          className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-md bg-transparent'
          placeholder='Message'
          rows='4'
        />
        <button className='border-2 rounded-md mt-4 w-1/3'>Send</button>
      </form>
    </>
  )
}

export default ContactForm;
