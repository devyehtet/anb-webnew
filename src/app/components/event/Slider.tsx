"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { EqualHeight } from "react-equal-height";
import { events } from "../../../../constants/events";

interface AllEventsProps {
  day: "day1" | "day2" | "day3";
  uniqueId: string;
}

export default function MultipleSlideCarousel({
  day,
  uniqueId,
}: AllEventsProps) {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const initializeSwiperNavigation = () => {
      const swiperEl = document.querySelector(
        `.swiper-${uniqueId}`
      ) as HTMLElement & { swiper: SwiperInstance };
      if (swiperEl?.swiper && prevButtonRef.current && nextButtonRef.current) {
        swiperEl.swiper.params.navigation = {
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
          disabledClass: "swiper-button-disabled", // Ensure unique disabled class
        };
        swiperEl.swiper.navigation.init();
        swiperEl.swiper.navigation.update();
      }
    };

    setTimeout(initializeSwiperNavigation, 0);
  }, [uniqueId]);

  return (
    <div className="w-full py-10 relative">
      <EqualHeight>
        <Swiper
          loop={false}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          className={`multiple-slide-carousel swiper-${uniqueId} flex`}
        >
          {events.map((event, index) => (
            <div key={index}>
              {event.memory &&
                event.memory[day] &&
                event.memory[day].map((image, imgIndex) => (
                  <SwiperSlide key={`${day}-${index}-${imgIndex}`}>
                    <div className="!h-full">
                      <Image
                        src={image}
                        alt={`${event.programTitle} - ${
                          event.eventName
                        } - ${day} Image ${imgIndex + 1}`}
                        className="w-full h-[300px] object-cover shadow-md rounded-md"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </div>
          ))}
        </Swiper>
        <button
          ref={prevButtonRef}
          className="swiper-button-prev swiper-button-prev-${uniqueId} group !p-2 flex justify-center items-center border border-solid border-black rounded-md !w-8 !h-8 transition-all duration-500 md:!-translate-x-12 after:!text-black"
        ></button>
        <button
          ref={nextButtonRef}
          className="swiper-button-next swiper-button-next-${uniqueId} group !p-2 flex justify-center items-center border border-solid border-black rounded-md !w-8 !h-8 transition-all duration-500 md:!translate-x-12 after:!text-black"
        ></button>
      </EqualHeight>
    </div>
  );
}
