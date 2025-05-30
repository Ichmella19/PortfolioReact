import React from 'react'
import Image from "../assets/images/Image.png";
import Expanding from "../assets/images/expanding.png";
import Collaborative from "../assets/images/collaborative.png";
import Entrepreneuria from "../assets/images/entrepreneuria.png";
import Corporate from "../assets/images/corporate.png";
import Learning from "../assets/images/learning.png";
import Icone from "../assets/images/Icone.png";
import Rectangle26 from "../assets/images/Rectangle26.png";
import Rectangle23 from "../assets/images/Rectangle23.png";
import Rectangle24 from "../assets/images/Rectangle24.png";
import Rectangle25 from "../assets/images/Rectangle25.png";
import Rectangle22 from "../assets/images/Rectangle22.png";
const timelineData = [
    {
      year: "Now",
      title: "Learning and Growing",
      description:
       " Expanding Horizons Continuing on my path of growth and exploration, I expanded my skill set by delving into emerging technologies ",
      img: Rectangle22,
      ima: Expanding,
      side: "left",
    
    },
    {
      year: "2024",
      title: "A Corporate Adventure",
      description:
        "I formed a strategic partnership with a digital marketing agency, combining my web design expertise with their marketing prowess. This collaboration",
      img: Rectangle23,
      ima: Collaborative,
      side: "right",
   
    },
    {
      year: "2023",
      title: " Entrepreneurial Pursuits",
      description:
        "Entrepreneurial Pursuits Fueled by a desire for creative freedom and the opportunity to work with diverse clients, I decided to venture into freelancing ",
      img: Rectangle24,
      ima: Entrepreneuria,
      side: "left",
     
    },
    {
      year: "2022",
      title: "A Collaborative Partnership",
      description:
        "I joined a leading technology company as their in-house web designer. This experience allowed me to work on large-scale projects, collaborating",
      img: Rectangle25,
      ima: Corporate,
      side: "right",
    
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description:
        " I had the opportunity to work with an innovative design agency, where I honed my skills and expanded my knowledge. Collaborating with talent",
      img: Rectangle26,
      ima: Learning,
      side: "left",
  
    },
   
  ];
  
const About= () => {
   
     return (
      <main className='w-full h-full bg-[#EEEBE5] md:mt-[60px] min-h-screen  gap-x-8  px-[30px] md:px-[100px] font-manrope '>
                <section className="md:flex py-[100px] relative mt-[5%] w-[100%]">
                    <div className='md:w-[50%] w-[100%] object-cover'>
                        <img src={Image} alt="" className='w-[500px] md:h-[400px]'/>
                    </div>
                    <div className='flex flex-col md:text-start text-center md:w-[50%] w-[100%] gap-y-4'>
                        <div className='bg-white text-center md:w-[440px] mt-[30px] md:mt-0 p-3 md:h-[40px] justify-center items-center flex rounded-[8px]'>
                            <p className='text-[#333333] text-[18px] '>Welcome to the world of captivating web design!</p>
                           
                        </div>
                        <h1 className='text-[#1A1A1A] text-4xl font-medium'>I'm Jeffery Cannon</h1>
                        <p className='text-[#4D4D4D] text-[16px] '>A skilled web designer with a passion for creating visually stunning and user-friendly websites. With a keen eye for detail and a commitment to excellence, I specialize in crafting online experiences that leave a lasting impression. From concept to launch, I collaborate closely with clients to bring their visions to life and ensure their digital presence stands out from the crowd. With my expertise and dedication, I am here to help you elevate your online presence and make a powerful impact in the digital landscape.</p>
                        <div className="  md:flex md:gap-x-14 gap-y-10">
      <div className="flex flex-col md:text-start text-center">
        <h1 className="font-semibold text-[23px]">
          55 <span className="text-[#5700FF]">+</span>
        </h1>
        <p>Completed Projects</p>
      </div>
      <div className="flex flex-col md:text-start text-center">
        <h1 className="font-semibold text-[23px]">
          20 <span className="text-[#5700FF]">+</span>
        </h1>
        <p>Happy Customers</p>
      </div>
      <div className="flex flex-col md:text-start text-center">
        <h1 className="font-semibold text-[23px]">
          08 <span className="text-[#5700FF]">+</span>
        </h1>
        <p>Years of Experience</p>
      </div>
    </div>
                    </div>
                </section>
                <section className="relative  py-20 px-4">
  <h2 className="text-3xl font-semibold text-center text-[#333] mb-4">Milestones of My Career</h2>
  <p className="text-center max-w-2xl mx-auto text-[#4D4D4D] mb-12">
  Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi. Elit amet sed velit auctor urna vitae nam ultricies massa.
  </p>

  <div className="relative max-w-6xl mx-auto px-4">
  {/* Trait violet central visible uniquement sur medium et plus */}
  <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-purple-400 z-0"></div>

  {timelineData.map((item, index) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        key={index}
        className="relative flex flex-col md:flex-row items-center justify-between mb-20"
      >
        {/* Bloc gauche (ou empilé en mobile) */}
        <div
          className={`w-full md:w-5/12 px-4 ${
            isLeft ? "order-1 md:order-1" : "order-3 md:order-3"
          }`}
        >
          {isLeft ? (
           <div className="relative bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start before:content-[''] before:absolute before:left-0 before:top-5 before:border-y-[10px] before:border-l-[10px] before:border-y-transparent before:border-l-white before:-translate-x-full max-w-full overflow-hidden">
           <p className="text-[13px] sm:text-[14px] text-gray-700 text-center sm:text-left">
             {item.description}
           </p>
           <img
             src={item.ima}
             alt=""
             className="w-20 h-20 sm:w-13 sm:h-13 object-contain"
           />
         </div>
         
          ) : (
            <div className="text-center md:text-right text-sm bg-white px-4 py-2 w-full md:w-[200px] mt-4 md:mt-[15%] rounded shadow inline-block md:ml-[65%]">
              {item.title}
            </div>
          )}
        </div>

        {/* Icône + année au centre */}
        <div className="relative flex flex-col items-center z-10 my-6 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          {/* Cercle image */}
          <div className="w-14 h-14 border-[5px] cursor-pointer rounded-full border-gray-100 shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
              <img src={item.img} alt="" className="w-5 h-5 rounded-full" />
            </div>
          </div>

          {/* Année */}
          <span className="mt-2 text-[14px] bg-white px-2 py-1 rounded shadow">
            {item.year}
          </span>
        </div>

        {/* Bloc droit (ou empilé en mobile) */}
        <div
          className={`w-full md:w-5/12 px-4 ${
            !isLeft ? "order-1 md:order-3" : "order-3 md:order-1"
          }`}
        >
          {!isLeft ? (
            <div className="relative bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start before:content-[''] before:absolute before:left-0 before:top-5 before:border-y-[10px] before:border-l-[10px] before:border-y-transparent before:border-l-white before:-translate-x-full max-w-full overflow-hidden">
            <p className="text-[13px] sm:text-[14px] text-gray-700 text-center sm:text-left">
              {item.description}
            </p>
            <img
              src={item.ima}
              alt=""
              className="w-20 h-20 sm:w-13 sm:h-13 object-contain"
            />
          </div>
          ) : (
            <div className="text-center md:text-left text-sm bg-white px-4 py-2 rounded shadow inline-block mt-4 md:mt-[13%]">
              {item.title}
            </div>
          )}
        </div>
      </div>
    );
  })}
</div>

</section>


      </main>
    )
 }

 export default About