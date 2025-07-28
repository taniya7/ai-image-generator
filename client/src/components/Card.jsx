import React from "react";
import { downloadImage } from "../utils";
import download from "../assets/download.png";

const Card = ({ name, prompt, image }) => {
  return (
    /* Card */
    <div className="group relative rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={image}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      {/* Detail Box */}
      <div className="hidden group-hover:flex flex-col bg-[#10131f] max-h-[94%] absolute bottom-0 left-0 right-0 m-2 p-4 rounded-md">
        {/* Prompt */}
        <p className="text-white text-md overflow-y-auto">{prompt}</p>
        {/* Initial, Name and Download */}
        <div className="flex justify-between items-center mt-5">
          {/* Initial and Name */}
          <div className="flex items-center gap-2">
            {/* Initial */}
            <div className="w-7 h-7 rounded-full bg-green-700 text-white flex justify-center items-center text-xs font-bold">
              {name[0]}
            </div>
            {/* Name */}
            <p className="text-white text-sm">{name}</p>
          </div>
          {/* Download */}
          <button
            type="button"
            onClick={() => downloadImage(prompt, image)}
            className="outline-none border-none bg-transparent"
          >
            <img
              src={download}
              alt="download"
              className="w-6 w-7 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
