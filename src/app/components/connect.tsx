'use client';
import React, { useState } from "react";
import EmailJS from "@emailjs/browser";


const Connect = () =>{
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} =e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

      try{
        const res = await EmailJS.sendForm(
          'service_dh4tkai',
          'template_ec4ft7r',
          e.target as HTMLFormElement,
          'k_kO26QQCd1vAZFof'
        );
        if (res.status === 200)
        setStatus("message sent successfully");
        else 
          setStatus ('Message not sent, please try again');
        }catch (error) {
          setStatus("An error occured. Please try again.");
          console.error("EmailJS Error:", error);
      }      
  };

  return (
    <section className="flex flex-col items-center">
      <div className='flex flex-col items-center justify-center mt-16 mb-8'>
        <p className='text-xs font-semibold'>CONNECT</p>
        <h1 className='font-bold'>LET'S CHAT</h1>
        <p className='text-gray-500 text-sm sm:text-base mt-2'>Impressed yet? If yes, then let's connect!</p>
      </div>
    <div className="rounded-lg p-4 border bg-white max-w-full mx-auto">
    {/* Button to toggle form visibility */}
    <button onClick={()=> setShowForm(!showForm)} className="w-full py-2 px-4 bg-indigo-600 text-white hover:scale-105 transition-transform rounded-md">
    {showForm ? "Close" : "Connect"}
    </button>
    {showForm &&(
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Connect</h2>
        {status && <p className="text-center mb-4 text-green-500">{status}</p>}
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
            type="text"
            id="from_name"
            name="user_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Enter your full-name"
            className="w-full p-2 mt-1 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
            type="text"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full p-2 mt-1 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="What do yo wanna talk about?"
            className="w-full p-2 mt-1 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div className="justify-center flex">
            <button type="submit" className="w-full py-2 px-4 text-white bg-indigo-600 focus:outline-none focus:ring-2">
              Send
            </button>
          </div>
        </form>
      </div>
    )}
    </div>
    <div className="flex flex-col items-center">
      
      <div className="flex flex-row gap-2 mt-4">
        <a href="">LinkedIn</a>
        <a href="">Github</a>
      </div>
      
    </div>
    </section>
  )
}

export default Connect;