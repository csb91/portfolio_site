'use client'
import { useState } from "react";

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
    <div>
      <h1>
        Get In Touch
      </h1>
      <form onSubmit={handleSubmit}>
        <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}