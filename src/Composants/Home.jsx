// import React from 'react'
// const Home= () => {
   
//     return (
//        <div>elcy</div>
//     )
// }

// export default Home
import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation' ;
import Swipper from "./Swipper";

import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Plus, X } from 'lucide-react'; 
import Icon from "../assets/images/Icon.png";
import Container from "../assets/images/container.png";
import Web from "../assets/images/web.png";
import User from "../assets/images/user.png";
import Ux from "../assets/images/ux.png";
import Responsive  from "../assets/images/responsive.png";
import Prototype from "../assets/images/prototype.png";
import Mobile from "../assets/images/mobile.png";
import Aura from "../assets/images/Aura.png";
import Aura1 from "../assets/images/Aura1.png";
import Aura2  from "../assets/images/Aura2.png";
import Aura3 from "../assets/images/Aura3.png";
import Aura4 from "../assets/images/Aura4.png";
import Website from "../assets/images/Website.png";
import Website1 from "../assets/images/Website1.png";
import Website2  from "../assets/images/Website2.png";
import Website3 from "../assets/images/Website3.png";
import Website4 from "../assets/images/Website4.png";
import Skill from "../assets/images/Skill.png";
import Skill1 from "../assets/images/Skill1.png";
import Skill2  from "../assets/images/Skill2.png";
import Skill3 from "../assets/images/Skill3.png";
import Skill4 from "../assets/images/Skill4.png";
import btn from "../assets/images/btn.png";
import btn1 from "../assets/images/btn1.png";
import btn2 from "../assets/images/btn2.png";
import btn3 from "../assets/images/btn3.png";
import btn4 from "../assets/images/btn4.png";
import etoile from "../assets/images/etoile.png";
import Shape from "../assets/images/Shape.png";
import { Star } from 'lucide-react';
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
const Section = [
    {
        image: Web,
        title: "Web Design Principles",
        description: "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
      },
      {
        image: User,
        title: "User Interface - UI Design",
        description: "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
      },
      {
        image: Ux,
        title: "User Experience - UX Design",
        description: "Understanding of user behavior and psychology to design seamless user experiences that meet user needs and goals.",
      },
      {
        image: Responsive,
        title: "Responsive Web Design",
        description: "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
      },
      {
        image: Prototype,
        title: "Wireframing and Prototyping",
        description: "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
      },
      {
        image: Mobile,
        title: "Mobile-Friendly Optimization",
        description: "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
      },
]

const testimoni = [
  {
    name: 'Sarah Thomp',
    website: 'produce-ui.com',
    text: 'Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence with .',
  },
  {
    name: 'Elcy Tognide',
    website: 'ichemella.com',
    text: 'Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence with .',
  },
 
  {
    name: 'Emily Roberts',
    website: 'produce-ui.com',
    text: 'I am thrilled with the website that Jeffery Cannon . His ability to translate my vision into a visually stunning and user-friendly website was impressive. Jefferys expertise in web design and user experience truly shines through in his work. He was responsive, professional, and delivered the project on time. I couldnt be happier with the outcome and highly recommend Jeffery to anyone in need of a top-notch web designer .',
  },
  {
    name: 'Laura Adams',
    website: 'produce-ui.com',
    text: 'I had the pleasure of collaborating with Jeffery Cannon on a web design project, and I am beyond impressed with the results. Jefferys creativity and technical expertise transformed our website into a visually stunning and highly functional platform. His understanding of user experience design and attention to detail made a significant impact on our websites performance and user engagement. Jefferys professionalism, timely delivery.',
  },
  {
    name: 'James Miller',
    website: 'produce-ui.com',
    text: 'Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence with .',
  },
  {
    name: 'Nina Patel',
    website: 'produce-ui.com',
    text: 'I am thrilled with the website that Jeffery Cannon . His ability to translate my vision into a visually stunning and user-friendly website was impressive. Jefferys expertise in web design and user experience truly shines through in his work. He was responsive, professional, and delivered the project on time. I couldnt be happier with the outcome and highly recommend Jeffery to anyone in need of a top-notch web designer .',
  },
  // Ajoute plus si besoin
];

 const Home= () => {


  

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <main className='w-full h-full bg-[#EEEBE5] mt-[60px] min-h-screen overflow-hidden  px-[30px] md:px-[100px] font-manrope '>
     <section className="md:flex md:py-[100px] py-[50px] relative">
  <div className="flex flex-col gap-y-7 text-start relative z-10">
    <span className="w-[110px] px-3 py-2 text-[#4D4D4D] bg-[#F5F3F0] rounded-[13px]">
      Hello There
    </span>

    <h1 className="font-medium text-4xl md:w-[500px]">
      Jeffery Cannon Welcome’s You!
    </h1>

    <p className="text-[#4D4D4D] md:w-[600px] text-[14px]">
      I am a passionate and experienced web designer, dedicated to creating
      visually stunning and highly functional websites. Explore my portfolio to
      see the power of effective design in action
    </p>

    <div className="flex gap-x-4 items-center">
      <button className="flex justify-center items-center gap-x-2 p-3 bg-[#5700FF] text-white rounded-[8px]">
        <img src={Icon} alt="" />
        <p className="text-[16px]">Book a call</p>
      </button>
      <p className="cursor-pointer hover:text-[#5700FF]">View Portfolio</p>
    </div>

    {/* div avec z-index faible */}
    <div className="bg-white p-4 md:flex gap-x-14 rounded-[12px] md:w-[700px] z-0 relative ">
      <div className="flex flex-col text-start">
        <h1 className="font-semibold text-[23px]">
          55 <span className="text-[#5700FF]">+</span>
        </h1>
        <p>Completed Projects</p>
      </div>
      <div className="flex flex-col text-start">
        <h1 className="font-semibold text-[23px]">
          20 <span className="text-[#5700FF]">+</span>
        </h1>
        <p>Happy Customers</p>
      </div>
      <div className="flex flex-col text-start">
        <h1 className="font-semibold text-[23px]">
          08 <span className="text-[#5700FF]">+</span>
        </h1>
        <p>Years of Experience</p>
      </div>
    </div>
  </div>

  {/* image avec z-index plus haut */}
  <div className="relative z-20 md:-ml-10 mt-[30px] md:mt-0 ">
    <img src={Container} alt="" />
  </div>
</section>

<section className="py-[30px] px-4 sm:px-6 flex flex-col items-center justify-center gap-y-5">
  <h1 className="text-[#333333] font-semibold text-3xl text-center">
    Creative Skills
  </h1>
  <p className="text-[16px] text-[#4D4D4D] text-center max-w-[800px]">
    As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life
  </p>

  <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-[30px]">
    {Section.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 mb-4 object-contain"
        />
        <h3 className="text-lg font-semibold text-[#333] mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-[#4D4D4D]">{item.description}</p>
      </div>
    ))}
  </div>
</section>

            <section className='py-[30px] justify-center items-center flex flex-col gap-y-5'>
                <h1 className='text-[#333333] font-semibold text-3xl'>Benefits</h1>
                <p className='text-[16px] text-[#4D4D4D]'>By choosing my web design service, you'll enjoy the following benefits</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white flex flex-col p-[30px] gap-y-3 text-start rounded-[8px] min-h-[300px]">
    <h1 className="font-semibold text-xl text-[#333333]">
      User-Centric Approach for Optimal Experience
    </h1>
    <p className="text-[#4D4D4D] text-[16px]">
      I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.
    </p>
  </div>

  <div className="bg-white flex flex-col p-[30px] gap-y-3 text-start rounded-[8px] min-h-[300px]">
    <h1 className="font-semibold text-xl text-[#333333]">
      Mobile-Friendly Designs for Broad Accessibility
    </h1>
    <p className="text-[#4D4D4D] text-[16px]">
      In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.
    </p>
  </div>

  <div className="bg-white flex flex-col p-[30px] gap-y-3 text-start rounded-[8px] min-h-[300px]">
    <h1 className="font-semibold text-xl text-[#333333]">
      Expertise in Cutting-Edge Technologies
    </h1>
    <p className="text-[#4D4D4D] text-[16px]">
      With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.
    </p>
  </div>
</div>

            </section>
           
            <section className="py-[30px] flex flex-col items-center gap-y-5">
  <h1 className="text-[#333333] font-semibold text-3xl text-center">My Works</h1>
  <p className="text-[16px] text-[#4D4D4D] text-center px-4">
    Here's what some of my satisfied clients have to say about my work
  </p>

  <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-10 gap-y-10 py-[30px]">
    {/* Project 1 */}
    <div className="bg-[#F7F6F3] flex flex-col p-[30px] text-start rounded-[12px] gap-y-5 w-full max-w-[335px]">
      <p className="text-[#333333] text-[16px]">Z - Aura Perfume Website Design</p>
      <img src={Aura} alt="" className="w-full h-[240px] object-cover rounded-[8px]" />
      <div className="flex gap-x-4 flex-wrap">
        <img src={Aura1} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Aura2} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Aura3} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Aura4} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-[#F7F6F3] flex flex-col p-[30px] text-start rounded-[12px] gap-y-5 w-full max-w-[335px]">
      <p className="text-[#333333] text-[16px]">Forhelp Charity Website Design</p>
      <img src={Website} alt="" className="w-full h-[240px] object-cover rounded-[8px]" />
      <div className="flex gap-x-4 flex-wrap">
        <img src={Website1} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Website2} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Website3} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Website4} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Website4} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-[#F7F6F3] flex flex-col p-[30px] text-start rounded-[12px] gap-y-5 w-full max-w-[335px]">
      <p className="text-[#333333] text-[16px]">Skill Bridge Website Design</p>
      <img src={Skill} alt="" className="w-full h-[240px] object-cover rounded-[8px]" />
      <div className="flex gap-x-4 flex-wrap">
        <img src={Skill1} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Skill2} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Skill3} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
        <img src={Skill4} alt="" className="w-[55px] h-[45px] object-cover rounded-[4px]" />
      </div>
    </div>
  </div>

  <button className="flex justify-center items-center gap-x-2 p-3 bg-[#5700FF] text-white rounded-[8px]">
    <p className="text-[16px]">View All Projects</p>
  </button>
</section>

<section className="py-[30px] flex flex-col items-center gap-y-5">
  <h1 className="text-[#333333] font-semibold text-3xl text-center">
    What My Clients Say About Me
  </h1>
  <p className="text-[16px] text-[#4D4D4D] text-center">
    Here's what some of my satisfied clients have to say about my work
  </p>
  <div className="w-full px-4 py-8 rounded-xl">
  <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
    <p className="text-sm sm:text-base">37 Total Reviews</p>
    <div className="flex space-x-2">
      <button className="prev">
        <img src={btn} alt="left" className="w-8 h-8 text-gray-700" />
      </button>
      <button className="next">
        <img src={btn1} alt="right" className="w-8 h-8 text-gray-700" />
      </button>
    </div>
  </div>

  <Swiper
  modules={[Navigation]}
  spaceBetween={25}
  slidesPerView={3}
  navigation={{
    prevEl: '.prev',
    nextEl: '.next',
  }}
  speed={600}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="px-" // padding horizontal réduit sur mobile
>
  {testimoni.map((review, index) => (
    <SwiperSlide
      key={index}
      className="flex justify-center bg-[#F7F6F3] mt-10"
      style={{ backgroundColor: '#F7F6F3' }}
    >
      <div className="bg-[#F7F6F3] w-full max-w-[360px] md:max-w-[360px] min-h-[280px] p-4 md:p-6 flex flex-col justify-between gap-4 rounded-[24px] shadow-md">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-800 text-[14px] md:text-[16px]">{review.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{review.website}</p>
          </div>
          <div className="flex gap-1">
            <img src={btn2} alt="" className="w-8 h-8 md:w-full md:h-full" />
            <img src={btn3} alt="" className="w-8 h-8 md:w-full md:h-full" />
            <img src={btn4} alt="" className="w-8 h-8 md:w-full md:h-full" />
          </div>
        </div>

        <div className="flex text-purple-600 mb-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="fill-current" />
            ))}
        </div>

        <p className="text-[14px] md:text-[15px] text-start text-gray-700">{review.text}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>

  
</section>
<section className="py-[30px]  flex flex-col items-center gap-y-5">
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
  <div className="bg-[#F7F6F3] h-[400px] md:h-[360px] p-6 flex flex-col items-start gap-4 rounded-[12px] md:max-w-sm w-full">
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
<Swipper />
</section>

      </main>
    )
}

export default Home