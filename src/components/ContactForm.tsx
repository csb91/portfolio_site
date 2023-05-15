'use client'

import { produce } from "immer";
import clsx from "clsx";
import { contact } from "@/lib/api";
import Input from "./Input";
import { useState, ChangeEvent } from "react";
import { formData } from "@/interfaces/interfaces";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initial: formData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const ContactForm = () => {
  const [formState, setFormState] = useState(initial);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await contact(formState)
      .then(res => {
        console.log(res);
        toast.success('Email Sent!', {position: 'top-center', theme: 'colored'});
        setFormState(initial);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error, please try again.', {position: 'top-center', theme: 'colored'});
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
          className='border-solid border-gray border-2 px-6 py-2 text-md rounded-md shadow-md focus:outline-[#EE756A]'
          placeholder='Message'
          rows={4}
          value = {formState.message}
          onChange={handleInputChange}
        />
        <div className='flex justify-center align-self-end'>
          {!isLoading && <button
            type='submit'
            className={clsx(
              'border-2 rounded-md mt-4 h-8 w-1/4 shadow-md bg-white hover:border-[#EE756A]')}
          >
          Send
          </button>}
          {isLoading && <button
            type='submit'
            disabled
            className={clsx(
              'border-2 rounded-md mt-4 h-8 w-1/4 shadow-md bg-white hover:border-[#EE756A]')}
          >
            <div
              className="inline-block mt-0.5 h-6 w-6 animate-spin text-[#EE756A] rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >
              Loading...
              </span>
            </div>
          </button>}
          <ToastContainer/>
        </div>
      </form>
    </>
  )
}

export default ContactForm;