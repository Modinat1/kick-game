// import React from 'react'
import FortniteCharacter from "../assets/images/FortniteCharacter.svg";

const Fortnite = () => {
  return (
    <div className="relative w-[350px] bg-gradient-to-br from-[#2B2B40] to-[#1A1A2E] p-5 rounded-3xl overflow-hidden text-white shadow-lg">
      {/* Rating Badge */}
      <div className="absolute top-[-20px] left-[-20px] w-[120px] h-[120px] rounded-full bg-gradient-to-tr from-[#FF5E5E] via-[#845EC2] to-[#00C9A7] flex items-center justify-center shadow-2xl z-10">
        <div className="text-4xl font-bold">9,4</div>
      </div>

      {/* Character Image */}
      <img
        src={FortniteCharacter}
        alt="Fortnite"
        className="absolute -top-10 right-[-20px] w-[220px] z-0"
      />

      {/* Card Content */}
      <div className="relative z-10 mt-[150px]">
        <h2 className="text-2xl font-bold mb-2">Fortnite</h2>
        <p className="text-sm text-gray-300 mb-4">
          There's a lot to learn about LoL, so we'll start with the essentials.
          Explore the guide below for an overview of the most popular game mode.
        </p>

        {/* Review + Stars */}
        <div className="text-sm text-gray-400 mb-3">
          Reviews 10k
          <span className="text-yellow-400 ml-2">★★★★★</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-gradient-to-r from-[#FF005C] to-[#845EC2] rounded-xl text-white font-bold shadow-[0_0_20px_rgba(255,0,92,0.5)]">
            PLAY NOW
          </button>
          <button className="bg-[#ff005c] w-10 h-10 rounded-xl text-xl font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,0,92,0.4)]">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fortnite;
