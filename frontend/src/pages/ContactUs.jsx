// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import {toast} from "react-toastify"
import {useSelector } from 'react-redux';

const ContactUs = () => {
  const token = useSelector(state=>state.auth.token)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("token is "+token)
    try{
      const response = await fetch("http://localhost:3000/api/contact/requestContact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+token
        },
        body:JSON.stringify({
          name:formData.name,
          email:formData.email,
          message:formData.message
        })
      })
      const data = await response.json()
      if(!response.ok){
        toast.error(data.message)
      }else{
      toast.success("contact details sent successfully !")     
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      }

    }catch(err){
      console.log(err.message)
    }
  };

  return (
      <Layout>
        <div className='grid place-items-center'>
        <div className="w-[50%] bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message/Query
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message or query"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
      </Layout>
  );
};

export default ContactUs;
