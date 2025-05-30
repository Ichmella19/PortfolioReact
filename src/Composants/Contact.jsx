import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Plus } from "lucide-react";

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation' ;
import Swipper from "./Swipper";
import etoile from "../assets/images/etoile.png";
import Contain from "../assets/images/Contain.png";
import Subtrac from "../assets/images/Subtrac.png";
import Vecto from "../assets/images/Vecto.png";
import Bolt from "../assets/images/bolt.png";
import btn7 from "../assets/images/btn7.png";
import linkdin from "../assets/images/linkdin.png";
import twitter from "../assets/images/twitter.png";
import rond from "../assets/images/rond.png";
// ✅ Corriger ici : utiliser `yup` et non `Yup`
const SignupSchema = yup.object().shape({
  firstName: yup.string()
    .min(2, 'Trop court !')
    .max(50, 'Trop long !')
    .required('Champ requis'),
  lastName: yup.string()
    .min(2, 'Trop court !')
    .max(50, 'Trop long !')
    .required('Champ requis'),
  email: yup.string()
    .email('Email invalide')
    .required('Champ requis'),
    phone: yup
  .string()
  .matches(/^\+?\d{10,15}$/, 'Numéro invalide')
  .required('Champ requis'),
  message: yup.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .required('Le message est requis'),
});
const faqData = [
  {
    question: "Can you work with clients remotely?",
    answer: "Yes, I work with clients all over the world using tools like Zoom, Slack, and email to stay connected throughout the project."
  },
  {
    question: "How long does it typically take to complete a web design project?",
    answer: "The timeline varies, but most projects take between 4 to 8 weeks depending on complexity and responsiveness."
  },
  {
    question: "Do you offer website maintenance services?",
    answer: "Yes, I offer ongoing maintenance packages to ensure your website remains up-to-date and secure."
  },
  {
    question: "Can you optimize my website for search engines?",
    answer: "Absolutely. SEO best practices are integrated into all my web designs, including performance, accessibility, and meta-data."
  },
  {
    question: "Can you integrate third-party tools or platforms into my website?",
    answer: "Yes, I can integrate tools like payment gateways, CRM systems, analytics, booking platforms, and more."
  }
];

 const Contact= () => {
    const [openIndex, setOpenIndex] = useState(null);
   
       const toggleFAQ = (index) => {
         setOpenIndex(openIndex === index ? null : index);
       };
     
     return (
       <main className='w-full min-h-screen bg-[#EEEBE5] mt-[60px] md:px-[100px] px-[30px] font-manrope overflow-hidden'>
         
         <section className="flex flex-col py-[60px] px-4 sm:px-6 md:px-10 justify-center rounded-[12px] items-center relative w-full max-w-[1200px] mx-auto bg-[#F7F6F3] shadow-md">
  <img src={Contain} alt="icon" className="w-12 sm:w-16 md:w-20" />
  <h1 className="text-[#333333] font-semibold text-2xl sm:text-3xl text-center py-[15px]">
    My Creative Portfolios
  </h1>
  <p className="text-base sm:text-[16px] text-[#4D4D4D] text-center max-w-[800px] px-2">
    Here's what some of my satisfied clients have to say about my work
  </p>
  
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-[20px] w-full">
    <div className="flex gap-x-2 items-center min-w-[160px] sm:min-w-[200px] md:min-w-[220px]">
      <img src={Subtrac} alt="" className="w-5 sm:w-6" />
      <p className="text-sm sm:text-[16px] text-[#4D4D4D] whitespace-nowrap">
        55+ Completed Projects
      </p>
    </div>
    <div className="flex gap-x-2 items-center min-w-[160px] sm:min-w-[200px] md:min-w-[220px]">
      <img src={Vecto} alt="" className="w-5 sm:w-6" />
      <p className="text-sm sm:text-[16px] text-[#4D4D4D] whitespace-nowrap">
        20+ Happy Customers
      </p>
    </div>
    <div className="flex gap-x-2 items-center min-w-[160px] sm:min-w-[200px] md:min-w-[220px]">
      <img src={Bolt} alt="" className="w-5 sm:w-6" />
      <p className="text-sm sm:text-[16px] text-[#4D4D4D] whitespace-nowrap">
        08+ Years of Experience
      </p>
    </div>
  </div>
</section>

             <section className='md:flex gap-x-10 mt-[10%]'>
                  <div className='flex flex-col gap-y-6'>
                      <div className='flex justify-between items-center bg-[#F7F6F3] gap-x-10 p-3 rounded-[8px]'>
                          <div className='flex flex-col gap-y-2'>
                              <h1 className='text-[16px] text-[#4D4D4D]'>You can Email Me Here</h1>
                              <p className='text-[16px] text-[#333333]'>jefferycannon@gmail.com</p>
                          </div>
                          <img src={btn7} alt="" />
                      </div>
                      <div className='flex justify-between items-center bg-[#F7F6F3] gap-x-10 p-3 rounded-[8px]'>
                          <div className='flex flex-col gap-y-2'>
                              <h1 className='text-[16px] text-[#4D4D4D]'>Give Me a Call on</h1>
                              <p className='text-[16px] text-[#333333]'>+91 91813 23 2309</p>
                          </div>
                          <img src={btn7} alt="" />
                      </div>
                      <div className='flex justify-between items-center bg-[#F7F6F3] gap-x-10 p-3 rounded-[8px]'>
                          <div className='flex flex-col gap-y-2'>
                              <h1 className='text-[16px] text-[#4D4D4D]'>Location</h1>
                              <p className='text-[16px] text-[#333333]'>Somewhere in the World</p>
                          </div>
                          <img src={btn7} alt="" />
                      </div>
                      <div className='flex flex-col gap-y-3 '>
                        <p className='text-[16px] text-[#333333]'>My Social Profiles</p>
                        <div className='bg-white flex gap-x-3 p-3 rounded-[8px] w-max'>
  <img src={linkdin} alt="" />
  <img src={twitter} alt="" />
  <img src={rond} alt="" />
</div>

                      </div>
                  </div>
                  <Formik
  initialValues={{
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }}
  validationSchema={SignupSchema}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  {({ errors, touched }) => (
    <Form className="flex flex-col mt-[30px] md:mt-0 gap-4 w-full max-w-[700px] mx-auto bg-[#F7F6F3] rounded-[12px] p-6 sm:p-8 md:p-12 shadow">
      
      {/* Row: FirstName / LastName */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 text-black">
          <Field name="firstName" placeholder="FirstName" className="p-2 border rounded w-full bg-[#EBE7E0]" />
          {errors.firstName && touched.firstName && (
            <div className="text-red-500 text-sm">{errors.firstName}</div>
          )}
        </div>
        <div className="flex-1">
          <Field name="lastName" placeholder="LastName" className="p-2 border rounded w-full bg-[#EBE7E0]" />
          {errors.lastName && touched.lastName && (
            <div className="text-red-500 text-sm">{errors.lastName}</div>
          )}
        </div>
      </div>

      {/* Row: Email / Phone */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Field name="email" type="email" placeholder="Email" className="p-2 border rounded w-full bg-[#EBE7E0]" />
          {errors.email && touched.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>
        <div className="flex-1">
          <Field name="phone" placeholder="Phone Number" className="p-2 border rounded w-full bg-[#EBE7E0]" />
          {errors.phone && touched.phone && (
            <div className="text-red-500 text-sm">{errors.phone}</div>
          )}
        </div>
      </div>

      {/* Checkbox Section */}
      <div className="bg-[#EBE7E0] p-4 sm:p-6 rounded-[12px]">
        <h2 className="text-black mb-4 text-[16px]">Why are you contacting us?</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { value: 'webDesign', label: 'Web Design' },
            { value: 'collaboration', label: 'Collaboration' },
            { value: 'mobileApp', label: 'Mobile App' },
            { value: 'others', label: 'Others' },
          ].map((topic) => (
            <label
              key={topic.value}
              className="flex items-center gap-2 w-full sm:w-[calc(50%-0.5rem)]"
            >
              <Field type="checkbox" name="topics" value={topic.value} />
              <span className="text-[#4D4D4D] text-[16px]">{topic.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message Field */}
      <div className="w-full">
        <Field
          as="textarea"
          name="message"
          placeholder="Your message here"
          className="w-full h-[150px] p-3 border rounded bg-[#EBE7E0] resize-none"
        />
        {errors.message && touched.message && (
          <div className="text-red-500 text-sm">{errors.message}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-violet-600 text-white px-4 py-2 rounded text-[16px] hover:bg-violet-700 transition w-[80px] text-center"
        >
          Send
        </button>
      </div>
    </Form>
  )}
</Formik>

             </section>
             <section className="py-[30px]  flex flex-col items-center gap-y-5 mt-[30px]">
  <h1 className="text-[#333333] font-semibold text-3xl text-center">
    Frequently Asked Questions
  </h1>
  <p className="text-[16px] text-[#4D4D4D] text-center">
    Here are answers to some common questions
  </p>

  <div className="flex flex-col md:flex-row gap-6 w-full px-4 md:px-8 max-w-7xl">
  {/* FAQ Section */}
  <div className="space-y-4 bg-white p-[20px] md:p-[30px] rounded-[12px] w-full md:w-auto">
    {faqData.map((faq, index) => (
      <div key={index} className="bg-[#EEEBE5] p-6 rounded-xl shadow-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="md:text-lg text-[16px] font-medium">{faq.question}</h3>
          {openIndex === index ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Plus className="w-5 h-5 text-gray-600" />
          )}
        </div>
        {openIndex === index && (
          <p className="mt-4 text-gray-700 text-[16px]">{faq.answer}</p>
        )}
      </div>
    ))}
  </div>

  {/* Client Testimonial */}
  <div className="bg-[#F7F6F3] h-[350px] p-6 flex flex-col items-start gap-4 rounded-[12px] md:max-w-sm w-full">
    <img src={etoile} alt="Illustration" />
    <h2 className="text-xl font-semibold text-[#333]">
      Still have any Questions?
    </h2>
    <p className="text-[14px] text-[#333] leading-relaxed">
      Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!
    </p>
    <button className="mt-2 bg-[#5700FF] text-white px-4 py-2 rounded-md hover:bg-[#111] transition">
      Contact Me
    </button>
  </div>
</div>

</section>

       
             </main>
     )
 }

 export default Contact