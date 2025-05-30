import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 

export default function Swipper() {
  useEffect(() => {
    // Forcer le rendu correct des flèches après montage
    setTimeout(() => {
      const nextBtn = document.querySelector('.swiper-button-next');
      const prevBtn = document.querySelector('.swiper-button-prev');
      if (nextBtn && prevBtn) {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
      }
    }, 0);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center px-8 py-16 ">
    
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={false} // pas de points
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{

          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="max-w-5xl w-full"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white aspect-square flex items-center justify-center rounded-md shadow-md text-xl font-semibold">
              Slide {i + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </section>
  );
}
