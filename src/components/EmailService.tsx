'use client'
import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BsFillSendFill } from "react-icons/bs";

const EmailService = () => {
  const form = useRef<HTMLFormElement>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Send email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) {
      toast.error('Form reference not found!', { position: 'top-right' })
      return
    }

    const formData = new FormData(form.current)
    const templateParams = {
      title: formData.get('subject'),
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
      time: new Date().toLocaleString(),
    }

    emailjs
      .send('service_fooyh6w', 'template_pl0ne2s', templateParams, 'LkMkvFKOmlkML4B4f')
      .then(
        () => {
          toast.success('Message sent successfully!', { position: 'top-right' })
          form.current?.reset()
        },
        (error) => {
          toast.error('Failed to send message. Try again later.', { position: 'top-right' })
          console.error(error.text)
        }
      )
  }

  // Determine colors based on theme
  const inputBg = theme === 'dark' ? '#252525' : '#f0f0f0';
  const inputText = theme === 'dark' ? '#fff' : '#171717';
  const iconColor = theme === 'dark' ? '#fff' : '#171717';

  return (
    <div className="p-6 mx-auto rounded-xl mb-10">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
        <div className='grid lg:grid-cols-2 gap-4'>
          <input
            type="text"
            name="user_name"
            placeholder="YOUR NAME"
            required
            style={{ backgroundColor: inputBg, color: inputText }}
            className="p-3 rounded-4xl hover:outline-amber-200 hover:outline-1 lg:w-xs"
          />

          <input
            type="email"
            name="user_email"
            placeholder="YOUR EMAIL"
            required
            style={{ backgroundColor: inputBg, color: inputText }}
            className="p-3 rounded-4xl hover:outline-amber-200 hover:outline-1 lg:w-xs"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="SUBJECT"
          required
          style={{ backgroundColor: inputBg, color: inputText }}
          className="p-3 rounded-4xl hover:outline-amber-200 hover:outline-1"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="YOUR MESSAGE"
          required
          style={{ backgroundColor: inputBg, color: inputText }}
          className="p-3 rounded-xl hover:outline-amber-200 hover:outline-1"
        />

        <button
          type="submit"
          style={{ borderColor: inputBg, color: inputText }}
          className="hover:bg-amber-300 w-fit p-2 font-semibold py-2 rounded-xl cursor-pointer flex justify-between items-center gap-5"
        >
            <BsFillSendFill size={20} color={iconColor}/>
            <p className='uppercase'>{'Send Message'}</p>
        </button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default EmailService
