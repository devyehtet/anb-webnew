"use client";
import { useState } from "react";
import Image from "next/image";
import { images } from "../../../constants";

function DonateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDonateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="text-white px-6 py-3 text-lg font-bold border hover:border-black shadow-[8px_8px_white] hover:text-black hover:shadow-[8px_8px_black] bg-black hover:bg-white transition-all ease-in"
        onClick={handleDonateClick}
      >
        Donate Now
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center gap-2 items-center z-50">
          <div className="bg-white mx-5 relative p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <button
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white bg-red-500 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleCloseClick}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Scan QR</h2>
            <Image
              src={images.img_pay_pal_qr}
              alt="PayPal QR Code"
              className="mb-4 max-w-xs w-full h-auto"
            />
            <a
              href="https://www.paypal.com/donate/buttons"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold hover:bg-blue-400 transition-colors mb-4 inline-block"
            >
              Donate via PayPal
            </a>
            <button
              className="bg-red-500 text-white px-4 py-2 ml-2 rounded-full text-lg font-bold hover:bg-red-400 transition-colors"
              onClick={handleCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonateButton;
