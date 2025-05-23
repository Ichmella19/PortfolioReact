import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";

import Contain from "../assets/images/Contain.png";
import Subtrac from "../assets/images/Subtrac.png";
import Vecto from "../assets/images/Vecto.png";
import Bolt from "../assets/images/bolt.png";

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
});

 const Contact= () => {
   
     return (
       <main className='w-full min-h-screen bg-[#EEEBE5] mt-[60px] px-[100px] font-manrope'>
         
             {/* Portfolio Section */}
           <section className="flex flex-col py-[60px] px-[20px] justify-center rounded-[12px] items-center relative w-full max-w-[1200px] mx-auto bg-[#F7F6F3] shadow-md">
               <img src={Contain} alt="icon" />
               <h1 className="text-[#333333] font-semibold text-3xl text-center py-[15px]">
                 My Creative Portfolios
               </h1>
               <p className="text-[16px] text-[#4D4D4D] text-center max-w-[800px]">
                 Here's what some of my satisfied clients have to say about my work
               </p>
               <div className='flex flex-wrap justify-center gap-6 py-[20px]'>
                 <div className='flex gap-x-2 items-center min-w-[220px]'>
                   <img src={Subtrac} alt="" />
                   <p className="text-[16px] text-[#4D4D4D] whitespace-nowrap">
                     55+ Completed Projects
                   </p>
                 </div>
                 <div className='flex gap-x-2 items-center min-w-[220px]'>
                   <img src={Vecto} alt="" />
                   <p className="text-[16px] text-[#4D4D4D] whitespace-nowrap">
                     20+ Happy Customers
                   </p>
                 </div>
                 <div className='flex gap-x-2 items-center min-w-[220px]'>
                   <img src={Bolt} alt="" />
                   <p className="text-[16px] text-[#4D4D4D] whitespace-nowrap">
                     08+ Years of Experience
                   </p>
                 </div>
               </div>
             </section> 
             <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded shadow">
            <div>
              <Field name="firstName" placeholder="Prénom" className="p-2 border rounded w-full" />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500 text-sm">{errors.firstName}</div>
              )}
            </div>

            <div>
              <Field name="lastName" placeholder="Nom" className="p-2 border rounded w-full" />
              {errors.lastName && touched.lastName && (
                <div className="text-red-500 text-sm">{errors.lastName}</div>
              )}
            </div>

            <div>
              <Field name="email" type="email" placeholder="Email" className="p-2 border rounded w-full" />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Envoyer
            </button>
          </Form>
        )}
      </Formik>
       
             </main>
     )
 }

 export default Contact