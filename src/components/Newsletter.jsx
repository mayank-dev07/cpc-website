
import React, { useState } from "react";

const Newsletter = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Paths to your PDF documents
  const documents = {
    october: "/public/Ed1.pdf",
    novDec: "/public/Ed2.pdf",
    janMar: "/public/Ed3.pdf",
  };

  return (
    <>
      <div className="w-full h-full bg-cover bg-no-repeat bg-fixed">
        <div className="flex flex-col justify-center items-center backdrop-grayscale w-full h-full py-12 gap-6">
          <div className="w-full flex flex-col justify-center items-center gap-4 pt-4">
            <p className="text-cyan-500 text-2xl">Our Newsletters</p>
            <p className="text-4xl">Club Preview</p>
          </div>

          {/* Container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
            <div className="min-h-[280px] bg-slate-800 p-5 rounded flex flex-col md:flex-row rounded-xl gap-8">
              <div className="w-full lg:w-1/2">
                <img
                  src="/cpced1.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center ">
                <span className="text-xl text-center font-bold underline underline-offset-4 ">
                  October Edition, 2023
                </span>
                <span className="py-3">
                  Trending Roles in the Domain of Cyber Security and Mitigating DDoS
                  with Blockchain
                </span>
                <button
                  className="border-[1px] border-slate-700 py-2 text-xl"
                  onClick={() => setSelectedDocument(documents.october)}
                >
                  Preview
                </button>
              </div>
            </div>

            <div className="min-h-[280px] bg-slate-800 p-5 rounded flex flex-col md:flex-row rounded-xl gap-8">
              <div className="w-full lg:w-1/2">
                <img
                  src="/cpced1.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-xl text-center font-bold underline underline-offset-4">
                  Nov-Dec Edition, 2023
                </span>
                <span className="py-3">
                  Rising Tide of Crypto-Related Frauds Sparks Concerns in Financial Markets
                </span>
                <button
                  className="border-[1px] border-slate-700 py-2 text-xl"
                  onClick={() => setSelectedDocument(documents.novDec)}
                >
                  Preview
                </button>
              </div>
            </div>

            <div className="min-h-[280px] bg-slate-800 p-5 rounded flex flex-col md:flex-row rounded-xl gap-8">
              <div className="w-full lg:w-1/2">
                <img
                  src="/cpced1.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-xl text-center font-bold underline underline-offset-4">
                  Jan-Mar Edition, 2024
                </span>
                <span className="py-3">
                  Navigating the Cyber Battlefield: Addressing Challenges in Cybersecurity for 2024
                </span>
                <button
                  className="border-[1px] border-slate-700 py-2 text-xl"
                  onClick={() => setSelectedDocument(documents.janMar)}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>

          {/* Conditionally rendered document preview using iframe */}
          {selectedDocument && (
            <div className="w-11/12 lg:w-8/12 mt-8 p-6 bg-white rounded-lg shadow-lg relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedDocument(null)}
                className="absolute -top-6 right-0 text-6xl text-red-500 font-bold"
              >
                &times;
              </button>
              <iframe
                src={selectedDocument}
                title="Document Preview"
                className="w-full h-[600px] border-0"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Newsletter;

