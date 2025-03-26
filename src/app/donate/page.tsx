import Image from "next/image";
import { images } from "../../../constants";
import Header from "../components/Header";
import DonateButton from "../components/DonateButton";
export default function Support() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen justify-center items-center md:px-0 px-1">
        <Image
          src={images.img_a_new_burma_is}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=""
        />
        <main className="max-w-6xl min-h-screen flex flex-col justify-center items-center text-center relative">
          <div className="flex justify-center items-center flex-col p-6 rounded-sm shadow-sm bg-black/45 text-white">
            <h2 className="text-4xl font-bold mb-6">Support Us</h2>
            <p className="text-xl mb-8">
              Building a New Burma Together... This project is proudly created
              by the A New Burma Team, a group dedicated to raising awareness
              and fostering change in Myanmar. In the face of ongoing challenges
              such as airstrikes and human rights violations, our artists have
              taken the initiative to create impactful works.These efforts aim
              to highlight the struggles and resilience of the people while
              inspiring hope for a brighter future. By supporting our artists,
              you&quot;re directly contributing to their mission of creating
              meaningful art that drives change, uplifts communities, and builds
              a new Burma. Join us in supporting this cause. Every contribution
              makes a difference.
            </p>
            <DonateButton />
          </div>
        </main>
      </div>
    </>
  );
}
