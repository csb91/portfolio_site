'use client'
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json',
        'Accept':  'application/json'
      }
    })
    console.log('hi')
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center'>
        Get In Touch
      </h1>
      <div className='container flex flex-col md:flex-row  md:w-full mt-10'>
        <form className='mr-10 border-2' onSubmit={handleSubmit}>
          <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <button type='submit'>submit</button>
        </form>
        <ContactForm />
      </div>
    </div>
  )
}