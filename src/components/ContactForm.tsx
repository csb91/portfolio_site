'use client'

import { produce } from "immer";
import { contact } from "@/lib/api";
import Input from "./Input";
import { useState, ChangeEvent } from "react";
import { formData } from "@/interfaces/interfaces";

const initial: formData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const ContactForm = () => {
  const [formState, setFormState] = useState(initial);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await contact(formState)
      .then(res => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = e.target;
    setFormState(produce(draft => {
      draft[id] = value;
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col border-2 rounded-md md:w-1/2 p-2'>
        <label htmlFor='name'>Name</label>
        <Input
          required
          type='text'
          id='name'
          className=''
          placeholder='Name'
          value = {formState.name}
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Email</label>
        <Input
          required
          type='email'
          id='email'
          className=''
          placeholder='Email'
          value = {formState.email}
          onChange={handleInputChange}
        />
        <label htmlFor='subject'>Subject</label>
        <Input
          required
          type='text'
          id='subject'
          className=''
          placeholder='Subject'
          value = {formState.subject}
          onChange={handleInputChange}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          required
          id='message'
          className='border-solid border-gray border-2 px-6 py-2 text-md rounded-md shadow-md'
          placeholder='Message'
          rows={4}
          value = {formState.message}
          onChange={handleInputChange}
        />
        <div className='flex justify-center align-self-end'>
          <button type='submit' className='border-2 rounded-md mt-4 w-1/4 shadow-md bg-white'>Send</button>
        </div>
      </form>
    </>
  )
}

export default ContactForm;