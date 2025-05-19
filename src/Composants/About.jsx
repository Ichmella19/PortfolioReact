import React from 'react'
import Image from "../assets/images/Image.png";
import Expanding from "../assets/images/expanding.png";
import Collaborative from "../assets/images/collaborative.png";
import Entrepreneuria from "../assets/images/entrepreneuria.png";
import Corporate from "../assets/images/corporate.png";
import Learning from "../assets/images/learning.png";
import Icone from "../assets/images/Icone.png";

const timelineData = [
    {
      year: "2019",
      title: "Learning and Growing",
      description:
       " Expanding Horizons Continuing on my path of growth and exploration, I expanded my skill set by delving into emerging technologies ",
      img: Learning,
      side: "left",
    
    },
    {
      year: "2020",
      title: "A Corporate Adventure",
      description:
        "I formed a strategic partnership with a digital marketing agency, combining my web design expertise with their marketing prowess. This collaboration",
      img: Corporate,
      side: "right",
   
    },
    {
      year: "2021",
      title: " Entrepreneurial Pursuits",
      description:
        "Entrepreneurial Pursuits Fueled by a desire for creative freedom and the opportunity to work with diverse clients, I decided to venture into freelancing ",
      img: Entrepreneuria,
      side: "left",
     
    },
    {
      year: "2022",
      title: "A Collaborative Partnership",
      description:
        "I joined a leading technology company as their in-house web designer. This experience allowed me to work on large-scale projects, collaborating",
      img: Collaborative,
      side: "right",
    
    },
    {
      year: "Now",
      title: "Expanding Horizons",
      description:
        " I had the opportunity to work with an innovative design agency, where I honed my skills and expanded my knowledge. Collaborating with talent",
      img: Expanding,
      side: "left",
  
    },
  ];
  
const About= () => {
   
     return (
      <main className='w-full h-full bg-[#EEEBE5] mt-[60px] min-h-screen  gap-x-8  px-[100px] font-manrope '>
                <section className="md:flex py-[100px] relative mt-[5%] w-[100%]">
                    <div className='md:w-[50%]'>
                        <img src={Image} alt="" className='w-[500px] h-[400px]'/>
                    </div>
                    <div className='flex flex-col text-start md:w-[50%] gap-y-4'>
                        <div className='bg-white text-center w-[440px] h-[40px] justify-center items-center flex rounded-[8px]'>
                            <p className='text-[#333333] text-[18px] '>Welcome to the world of captivating web design!</p>
                           
                        </div>
                        <h1 className='text-[#1A1A1A] text-4xl font-medium'>I'm Jeffery Cannon</h1>
                        <p className='text-[#4D4D4D] text-[18px] '>A skilled web designer with a passion for creating visually stunning and user-friendly websites. With a keen eye for detail and a commitment to excellence, I specialize in crafting online experiences that leave a lasting impression. From concept to launch, I collaborate closely with clients to bring their visions to life and ensure their digital presence stands out from the crowd. With my expertise and dedication, I am here to help you elevate your online presence and make a powerful impact in the digital landscape.</p>
                        <div className="  flex gap-x-14  ">
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
                </section>
                <section className='py-[30px] flex flex-col items-center gap-y-5 px-4 lg:px-0'>
  <h1 className='text-[#333333] font-semibold text-2xl md:text-3xl text-center'>
    Milestones of My Career
  </h1>

  <p className='text-[16px] text-[#4D4D4D] text-center max-w-[900px]'>
    Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi. Elit amet sed velit auctor urna vitae nam ultricies massa.
  </p>

  <div className="relative w-full pt-12 flex flex-col items-center">
    {[...timelineData].reverse().map((item, index, arr) => (
      <div key={index} className="w-full flex flex-col md:flex-row justify-center relative mb-12 md:mb-6">
        {/* Ligne centrale */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-400 z-0" />

        {/* Bloc gauche ou haut sur mobile */}
        <div className={`flex items-center md:w-1/2 w-full px-4 ${item.side === "left" ? "md:justify-end" : "md:justify-start"} justify-center`}>
          {item.side === "left" ? (
            <div
              className="bg-white rounded-lg shadow-md p-4 max-w-md flex flex-col md:flex-row gap-4 items-center mr-0 md:mr-[7%]"
              style={{ backgroundColor: item.color }}
            >
              <p className="text-gray-700 text-[16px] text-center md:text-left">{item.description}</p>
              <img src={item.img} alt="Illustration" className="w-24 h-24 object-cover rounded" />
            </div>
          ) : (
            <p
              className="bg-white text-sm px-4 py-2 rounded shadow w-fit max-w-full mt-4 md:mt-0"
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </p>
          )}
        </div>

        {/* Centre : ligne + image + année */}
        <div className="relative flex flex-col items-center z-10 md:mx-4 my-4 md:my-0">
          {index === 0 && (
            <div className="bg-white text-sm px-3 py-1 rounded shadow mb-1">Now</div>
          )}
          <div className="h-24 w-[1px] relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={item.img}
                alt="Illustration centrale"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover bg-white"
              />
            </div>
          </div>
          {index !== arr.length - 1 && (
            <div className="bg-white text-sm px-3 py-1 rounded shadow mt-1">
              {item.year}
            </div>
          )}
        </div>

        {/* Bloc droit ou bas sur mobile */}
        <div className={`flex items-center md:w-1/2 w-full px-4 ${item.side === "right" ? "md:justify-start" : "md:justify-end"} justify-center`}>
          {item.side === "right" ? (
            <div
              className="bg-white rounded-lg shadow-md p-4 max-w-md flex flex-col md:flex-row gap-4 items-center md:ml-[10%]"
              style={{ backgroundColor: item.color }}
            >
              <img src={item.img} alt="Illustration" className="w-24 h-24 object-cover rounded" />
              <p className="text-gray-700 text-[16px] text-center md:text-left">{item.description}</p>
            </div>
          ) : (
            <p
              className="bg-white text-sm px-2 py-1 mt-4 md:mt-0 rounded shadow w-fit"
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* Dernier bloc "A World of Possibilities" */}
  <div className='flex flex-col md:flex-row justify-center items-center bg-white gap-4 md:gap-x-5 p-6 rounded-[12px] mt-[30px] w-full max-w-4xl'>
    <img src={Icone} alt="" className='w-16 h-16' />
    <div className='flex flex-col gap-y-2 text-center md:text-left'>
      <h1 className='text-[18px] font-semibold'>A World of Possibilities In 2018</h1>
      <p className='max-w-[500px] text-[15px]'>
        I embarked on an exhilarating journey into the world of web design. Fueled by a deep passion for creativity and technology, I took my first steps into this dynamic field. It w...Read More
      </p>
    </div>
  </div>
</section>

      </main>
    )
 }

 export default About