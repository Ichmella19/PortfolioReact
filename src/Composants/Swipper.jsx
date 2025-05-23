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
      {/* Flèche gauche */}
      <div className="swiper-button-prev z-10 cursor-pointer text-4xl text-black absolute left-4 top-1/2 -translate-y-1/2">
        &#8592;
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
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

      {/* Flèche droite */}
      <div className="swiper-button-next z-10 cursor-pointer text-4xl text-black absolute right-4 top-1/2 -translate-y-1/2">
        &#8594;
      </div>
    </section>
  );
}
