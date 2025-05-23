import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Iconcontaine from "../assets/images/Iconcontaine.png";
import Subtract from "../assets/images/Subtract.png";
import Vector from "../assets/images/Vector.png";
import Union from "../assets/images/Union.png";
import btn from "../assets/images/btn.png";
import btn1 from "../assets/images/btn1.png";

import Aura from "../assets/images/Aura.png";
import Aura1 from "../assets/images/Aura1.png";
import Aura2 from "../assets/images/Aura2.png";
import Aura3 from "../assets/images/Aura3.png";
import Aura4 from "../assets/images/Aura4.png";

import Website from "../assets/images/Website.png";
import Website1 from "../assets/images/Website1.png";
import Website2 from "../assets/images/Website2.png";
import Website3 from "../assets/images/Website3.png";
import Website4 from "../assets/images/Website4.png";

import Skill from "../assets/images/Skill.png";
import Skill1 from "../assets/images/Skill1.png";
import Skill2 from "../assets/images/Skill2.png";
import Skill3 from "../assets/images/Skill3.png";
import Skill4 from "../assets/images/Skill4.png";
import Current from "../assets/images/Current.png";
import Current1 from "../assets/images/Current1.png";
import Current2 from "../assets/images/Current2.png";
import Current3 from "../assets/images/Current3.png";
import Current4 from "../assets/images/Current4.png";
import Fusion from "../assets/images/Fusion.png";
import Fusion1 from "../assets/images/Fusion1.png";
import Fusion2 from "../assets/images/Fusion2.png";
import Fusion3 from "../assets/images/Fusion3.png";
import Fusion4 from "../assets/images/Fusion4.png";
import Digital from "../assets/images/Digital.png";
import Digital1 from "../assets/images/Digital1.png";
import Digital2 from "../assets/images/Digital2.png";
import Digital3 from "../assets/images/Digital3.png";
import Digital4 from "../assets/images/Digital4.png";
import Little from "../assets/images/Little.png";
import Little1 from "../assets/images/Little1.png";
import Little2 from "../assets/images/Little2.png";
import Little3 from "../assets/images/Little3.png";
import Little4 from "../assets/images/Little4.png";
import Design from "../assets/images/Design.png";
import Design1 from "../assets/images/Design1.png";
import Design2 from "../assets/images/Design2.png";
import Design3 from "../assets/images/Design3.png";
import Design4 from "../assets/images/Design4.png";
import Bank from "../assets/images/Bank.png";
import Bank1 from "../assets/images/Bank1.png";
import Bank2 from "../assets/images/Bank2.png";
import Bank3 from "../assets/images/Bank3.png";
import Bank4 from "../assets/images/Bank4.png";
import Button from "../assets/images/Button.png";
const projects = [
  {
    title: 'Z - Aura Perfume Website Design',
    mainImage: Aura,
    thumbnails: [Aura1, Aura2, Aura3, Aura4],
  },
  {
    title: 'Forhelp Charity Website Design',
    mainImage: Website,
    thumbnails: [Website1, Website2, Website3, Website4],
  },
  {
    title: 'Skill Bridge Website Design',
    mainImage: Skill,
    thumbnails: [Skill1, Skill2, Skill3, Skill4],
  },
  {
    title: 'Z - Aura Perfume Website Design',
    mainImage: Aura,
    thumbnails: [Aura1, Aura2, Aura3, Aura4],
  },
  {
    title: 'Forhelp Charity Website Design',
    mainImage: Website,
    thumbnails: [Website1, Website2, Website3, Website4],
  },
  {
    title: 'Skill Bridge Website Design',
    mainImage: Skill,
    thumbnails: [Skill1, Skill2, Skill3, Skill4],
  },
  {
    title: 'Z - Aura Perfume Website Design',
    mainImage: Aura,
    thumbnails: [Aura1, Aura2, Aura3, Aura4],
  },
  {
    title: 'Forhelp Charity Website Design',
    mainImage: Website,
    thumbnails: [Website1, Website2, Website3, Website4],
  },
  {
    title: 'Skill Bridge Website Design',
    mainImage: Skill,
    thumbnails: [Skill1, Skill2, Skill3, Skill4],
  },
];
const fusions = [
  {
    title: 'Current Vandi Website Design',
    mainImage: Current,
    thumbnails: [Current1, Current2, Current3, Current4],
  },
  {
    title: 'Fit Fusion Gym Website Design',
    mainImage: Fusion,
    thumbnails: [Fusion1, Fusion2, Fusion3, Fusion4],
  },
  {
    title: 'DX Digital Agency Website Design',
    mainImage: Digital,
    thumbnails: [Digital1, Digital2, Digital3, Digital4],
  },
  {
    title: 'Current Vandi Website Design',
    mainImage: Current,
    thumbnails: [Current1, Current2, Current3, Current4],
  },
  {
    title: 'Fit Fusion Gym Website Design',
    mainImage: Fusion,
    thumbnails: [Fusion1, Fusion2, Fusion3, Fusion4],
  },
  {
    title: 'DX Digital Agency Website Design',
    mainImage: Digital,
    thumbnails: [Digital1, Digital2, Digital3, Digital4],
  },
  {
    title: 'Current Vandi Website Design',
    mainImage: Current,
    thumbnails: [Current1, Current2, Current3, Current4],
  },
  {
    title: 'Fit Fusion Gym Website Design',
    mainImage: Fusion,
    thumbnails: [Fusion1, Fusion2, Fusion3, Fusion4],
  },
  {
    title: 'DX Digital Agency Website Design',
    mainImage: Digital,
    thumbnails: [Digital1, Digital2, Digital3, Digital4],
  },
];
const banks = [
  {
    title: 'Little Learners Website Design',
    mainImage: Little,
    thumbnails: [Little1, Little2, Little3, Little4],
  },
  {
    title: 'StreamVibe Website Design',
    mainImage: Design,
    thumbnails: [Design1, Design2, Design3, Design4],
  },
  {
    title: 'YourBank Website Design',
    mainImage: Bank,
    thumbnails: [Bank1, Bank2, Bank3, Bank4],
  },
  {
    title: 'Little Learners Website Design',
    mainImage: Little,
    thumbnails: [Little1, Little2, Little3, Little4],
  },
  {
    title: 'StreamVibe Website Design',
    mainImage: Design,
    thumbnails: [Design1, Design2, Design3, Design4],
  },
  {
    title: 'YourBank Website Design',
    mainImage: Bank,
    thumbnails: [Bank1, Bank2, Bank3, Bank4],
  },
  {
    title: 'Little Learners Website Design',
    mainImage: Little,
    thumbnails: [Little1, Little2, Little3, Little4],
  },
  {
    title: 'StreamVibe Website Design',
    mainImage: Design,
    thumbnails: [Design1, Design2, Design3, Design4],
  },
  {
    title: 'YourBank Website Design',
    mainImage: Bank,
    thumbnails: [Bank1, Bank2, Bank3, Bank4],
  },
];
const Portfolio = () => {
  return (
    <main className='w-full min-h-screen bg-[#EEEBE5] mt-[60px] px-[100px] font-manrope'>

      {/* Portfolio Section */}
      <section className="flex flex-col py-[60px] px-[20px] justify-center rounded-[12px] items-center relative w-full max-w-[1200px] mx-auto bg-[#F7F6F3] shadow-md">
        <img src={Iconcontaine} alt="icon" />
        <h1 className="text-[#333333] font-semibold text-3xl text-center py-[15px]">
          My Creative Portfolios
        </h1>
        <p className="text-[16px] text-[#4D4D4D] text-center max-w-[800px]">
          Here's what some of my satisfied clients have to say about my work
        </p>
        <div className='flex flex-wrap justify-center gap-6 py-[20px]'>
          <div className='flex gap-x-2 items-center min-w-[220px]'>
            <img src={Subtract} alt="" />
            <p className="text-[16px] text-[#4D4D4D] whitespace-nowrap">
              55+ Completed Projects
            </p>
          </div>
          <div className='flex gap-x-2 items-center min-w-[220px]'>
            <img src={Vector} alt="" />
            <p className="text-[16px] text-[#4D4D4D] whitespace-nowrap">
              20+ Happy Customers
            </p>
          </div>
          <div className='flex gap-x-2 items-center min-w-[220px]'>
            <img src={Union} alt="" />
            <p className="text-[16px] text-[#4D4D4D] whitespace-nowrap">
              08+ Years of Experience
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="mt-[40px] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
          <p className="text-sm sm:text-base">Project Done in 2023</p>
          <div className="flex space-x-2">
            <button className="prev">
              <img src={btn} alt="left" className="w-8 h-8" />
            </button>
            <button className="next">
              <img src={btn1} alt="right" className="w-8 h-8" />
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
        >
          {projects.map((project, index) => (
           <SwiperSlide key={index} className="flex justify-center p-6  rounded-[12px]" style={{ backgroundColor: '#F7F6F3' }}>
           <div className="bg-[#F7F6F3] w-full max-w-[320px] min-h-[300px] flex flex-col  gap-4 p-4 rounded-[16px] ">
           <p className='text-start text-[16px]'>{project.title}</p>
             {/* Image principale réduite */}
             <div className="relative w-full h-[180px]">
  <img
    src={project.mainImage}
    alt={project.title}
    className="w-full h-full object-cover rounded-[8px]"
  />
  <img
    src={Button}
    alt="Button"
    className="absolute bottom-2 right-2 "
    style={{ width: '25px', height: '25px' }} // ajuste la taille si nécessaire
  />
</div>

             {/* Thumbnails en ligne, pas de débordement */}
             <div className="flex gap-2 justify-center">
               {project.thumbnails.map((thumb, i) => (
                 <img
                   key={i}
                   src={thumb}
                   alt={`thumb-${i}`}
                   className=" max-w-[65px] max-h-[100px] object-cover rounded-[4px]"
                 />
               ))}
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </section>
      <section className="mt-[60px] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
          <p className="text-sm sm:text-base">Project Done in 2022</p>
          <div className="flex space-x-2">
            <button className="previ">
              <img src={btn} alt="left" className="w-8 h-8" />
            </button>
            <button className="nexti">
              <img src={btn1} alt="right" className="w-8 h-8" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={3}
          navigation={{
            prevEl: '.previ',
            nextEl: '.nexti',
          }}
          speed={600}
         
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {fusions.map((fusion, index) => (
           <SwiperSlide key={index} className="flex justify-center p-6  rounded-[12px]" style={{ backgroundColor: '#F7F6F3' }}>
           <div className="bg-[#F7F6F3] w-full max-w-[320px] min-h-[300px] flex flex-col  gap-4 p-4 rounded-[16px] ">
           <p className='text-start text-[16px]'>{fusion.title}</p>
             {/* Image principale réduite */}
             <div className="relative w-full h-[180px]">
  <img
    src={fusion.mainImage}
    alt={fusion.title}
    className="w-full h-full object-cover rounded-[8px]"
  />
  <img
    src={Button}
    alt="Button"
    className="absolute bottom-2 right-2 "
    style={{ width: '25px', height: '25px' }} // ajuste la taille si nécessaire
  />
</div>
         
             {/* Thumbnails en ligne, pas de débordement */}
             <div className="flex gap-2 justify-center">
               {fusion.thumbnails.map((thumb, i) => (
                 <img
                   key={i}
                   src={thumb}
                   alt={`thumb-${i}`}
                   className=" max-w-[65px] max-h-[100px] object-cover rounded-[4px]"
                 />
               ))}
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </section>
      <section className="mt-[60px] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
          <p className="text-sm sm:text-base">Project Done in 2021</p>
          <div className="flex space-x-2">
            <button className="previe">
              <img src={btn} alt="left" className="w-8 h-8" />
            </button>
            <button className="nextie">
              <img src={btn1} alt="right" className="w-8 h-8" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={3}
          navigation={{
            prevEl: '.previe',
            nextEl: '.nextie',
          }}
          speed={600}
         
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {banks.map((bank, index) => (
           <SwiperSlide key={index} className="flex justify-center p-6  rounded-[12px]" style={{ backgroundColor: '#F7F6F3' }}>
           <div className="bg-[#F7F6F3] w-full max-w-[320px] min-h-[300px] flex flex-col  gap-4 p-4 rounded-[16px]">
           <p className='text-start text-[16px]'>{bank.title}</p>
             {/* Image principale réduite */}
             <div className="relative w-full h-[180px]">
  <img
    src={bank.mainImage}
    alt={bank.title}
    className="w-full h-full object-cover rounded-[8px]"
  />
  <img
    src={Button}
    alt="Button"
    className="absolute bottom-2 right-2 "
    style={{ width: '25px', height: '25px' }} // ajuste la taille si nécessaire
  />
</div>
         
             {/* Thumbnails en ligne, pas de débordement */}
             <div className="flex gap-2 justify-center">
               {bank.thumbnails.map((thumb, i) => (
                 <img
                   key={i}
                   src={thumb}
                   alt={`thumb-${i}`}
                   className=" max-w-[65px] max-h-[100px] object-cover rounded-[4px]"
                 />
               ))}
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Portfolio;
