'use client'

import GlassPane from "./GlassPane";
import { contact } from "@/lib/api";
import Input from "./Input";
import { useState, useCallback } from "react";
import { formData } from "@/interfaces";

const initial: formData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const ContactForm = () => {
  const [formState, setFormState] = useState(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await contact(formState)
    .then(res => console.log(res))
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col border-2 md:w-1/2 p-1'>
        <label htmlFor='name'>Name</label>
        <Input
          required
          type='text'
          id='name'
          className=''
          placeholder='Name'
        />
        <label htmlFor='email'>Email</label>
        <Input
          required
          type='email'
          id='email'
          className=''
          placeholder='Email'
        />
        <label htmlFor='subject'>Subject</label>
        <Input
          required
          type='text'
          id='subject'
          className=''
          placeholder='Subject'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          required
          id='message'
          className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-md shadow-md'
          placeholder='Message'
          rows={4}
        />
        <button type='submit' className='border-2 rounded-md mt-4 w-1/3'>Send</button>
      </form>
    </>
  )
}

export default ContactForm;
