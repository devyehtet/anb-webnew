"use client";
import Header from "@/app/components/Header";
import { events } from "../../../../constants/events";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AllEvents from "@/app/components/event/Slider";
import MultipleSlideCarousel from "@/app/components/event/ActivityPhotoSlider";
export default function EventDetail({ params }: { params: { name: string } }) {
  const router = useRouter();
  const event = events.find((event) => event.url === params.name);

  if (!event) {
    return <div>Event not found!</div>;
  }
  return (
    <>
      <Header />
      <section className="mx-10 md:mx-28 lg:mx-80 pt-16">
        <div className="flex items-center gap-4 my-14">
          <button
            onClick={() => router.back()}
            className="rounded border w-12 py-1 border-black "
          >
            ←
          </button>
          <span className="text-black font-medium">Back</span>
        </div>
        <div className="flex justify-center">
          <div className="shadow-md rounded-none border-none">
            <Image src={event.photo} alt={event.title}></Image>
          </div>
        </div>
        <span className="block mt-10 mb-2 text-sm leading-4 font-light text-red-800">
          {event.eventName}
        </span>
        <h4 className="font-neutraface text-4xl md:text-4xl leading-10 mb-2 font-bold">
          {event.title}
        </h4>
        <h3 className="font-neutraface font-bold text-3xl leading-8 mb-2 text-gray-700">
          {event.programTitle}
        </h3>
        <span className="block mt-4 text-sm leading-4 mb-10">{event.date}</span>
        <h4 className="font-neutraface text-3xl font-bold text-black leading-7 mb-6 text-center">
          {event.activityTitleOne}
        </h4>
        <p className="leading-7 mb-10 text-justify">
          {event.activityContentOne}
        </p>
        {event.artistData && (
          <div className="space-y-12 px-6">
            {Object.entries(event.artistData).map(([key, artist]) => (
              <div key={key} className="mb-12">
                {/* Text Block */}
                <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg shadow-md">
                  <h4 className="font-neutraface text-4xl font-extrabold text-black mb-4 text-center">
                    Created by{" "}
                    <span className="text-[#f2905c] underline">
                      {artist.artistName}
                    </span>
                  </h4>
                  <p className="text-gray-700 text-justify leading-relaxed border-l-4 border-[#f2905c] pl-4">
                    {artist.artistProfie}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex justify-center">
                    <MultipleSlideCarousel
                      photos={artist.artistArtwork}
                      uniqueId={key}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {event.activityPhotos && event.activityPhotos.photosFirst && (
          <div className="row flex flex-col md:flex-row items-center justify-between gap-12 leading-7 md:px-10">
            <div className="w-full">
              <MultipleSlideCarousel
                photos={event.activityPhotos.photosFirst}
                uniqueId={"one"}
              />
            </div>
          </div>
        )}
        <h4 className="font-neutraface text-3xl font-bold text-black leading-7 mb-6 text-center">
          {event.activityTitleTwo}
        </h4>
        <p className="leading-7 text-justify">{event.activityContentTwo}</p>
        {event.activityPhotos && event.activityPhotos.photosSecond && (
          <div className="row flex flex-col md:flex-row items-center justify-between gap-12 leading-7 md:px-10">
            <div className="w-full">
              <MultipleSlideCarousel
                photos={event.activityPhotos.photosSecond}
                uniqueId={"two"}
              />
            </div>
          </div>
        )}
      </section>
      {event.memory && (
        <section className="mx-6 md:mx-28 lg:mx-80 pt-16">
          <div className="container space-y-8">
            {event.memory && event.memory.day1 && (
              <div className="row flex flex-col md:flex-row items-center justify-between gap-12 leading-7 md:px-10 bg-white shadow-md md:shadow-sm rounded-sm hover:shadow-md transition-shadow">
                <div className="column w-full md:w-1/2">
                  <AllEvents day="day1" uniqueId="dayOne" />
                </div>
                <div className="column md:w-1/2 p-4">
                  <h2 className="text-2xl font-bold text-left">
                    Day 1: A Celebration of Solidarity and Cultural Rebirth
                  </h2>
                </div>
              </div>
            )}
            {event.memory && event.memory.day2 && (
              <div className="row flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:px-10 bg-white shadow-md md:shadow-sm rounded-sm hover:shadow-md transition-shadow ">
                <div className="column w-full md:w-1/2">
                  <AllEvents day="day2" uniqueId="dayTwo" />
                </div>
                <div className="column md:w-1/2 p-4">
                  <h2 className="text-2xl font-bold text-left">
                    Day 2: Amplifying Voices Through Film
                  </h2>
                </div>
              </div>
            )}
            {event.memory && event.memory.day3 && (
              <div className="row flex flex-col md:flex-row items-center justify-between gap-12 md:px-10 bg-white shadow-md md:shadow-sm rounded-sm hover:shadow-md transition-shadow">
                <div className="column w-full md:w-1/2">
                  <AllEvents day="day3" uniqueId="dayThree" />
                </div>
                <div className="column md:w-1/2 p-4">
                  <h2 className="text-2xl font-bold">
                    Day 3: Reflection and Future Steps
                  </h2>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      <section className=" mx-8 md:mx-20 pb-16 lg:py-24">
        <div className="container m-auto">
          <div className="mt-10 md:mt-20 flex flex-col gap-20">
            {event.featuredImage &&
              event.featuredImage.length > 0 && ( // Check if featuredImage exists
                <div className="my-8">
                  <h2 className="font-neutraface text-3xl font-bold text-black leading-7 mb-6 text-center">
                    Featured Images
                  </h2>
                  {event.featuredImage.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                      style={{
                        top: `calc(64px + ${imageIndex * 40}px)`,
                      }}
                    >
                      <div className="p-5 bg-black rounded-lg shadow-md border-4 border-white">
                        <Image
                          src={image}
                          alt={`Event Image ${imageIndex + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      </section>
    </>
  );
}
