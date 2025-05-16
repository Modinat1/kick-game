// import { useState } from "react";
import { Plus, Star } from "lucide-react";
// import characterImg from "../assets/images/ruined-king.svg";
// import logoImg from "../assets/images/ruined-king-logo.svg";

export default function RuinedKingCard() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-[#0a0e1a] p-4">
    <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br">
      {/* <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a3e3e] to-[#1a3e3e]/80"> */}
      {/* Background image with character */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-14%20182819-mz4KELyfwZBMQ53cDSxil3DhzeKnu9.png"
          alt="Ruined King character"
          // fill
          className="object-cover"
          // priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
        {/* Top section with rating and free to play */}
        <div className="flex justify-between items-start">
          {/* Rating circle */}
          <div className="relative">
            {/* Stars */}
            <div className="absolute -top-2 -right-2">
              <div className="relative">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                <div className="absolute -top-1 -right-4">
                  <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                </div>
                <div className="absolute top-1 -right-8">
                  <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game info section */}
        <div className="mt-auto">
          <h1 className="text-5xl font-bold text-white mb-2">Ruined King</h1>
          <p className="text-gray-200 max-w-md mb-6">
            There's a lot to learn about LoL, so we'll start with the
            essentials. Explore the guide below for an overview of the most
            popular game mode.
          </p>

          {/* Reviews and action buttons */}
          <div className="flex items-center gap-4">
            <div>
              <div className="text-white mb-1">Reviews 3,4k</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-300 fill-yellow-300"
                  />
                ))}
              </div>
            </div>

            {/* Play now button */}
            <button className="px-8 py-3 bg-gradient-to-r from-[#e5267a] to-[#f23f43] rounded-full text-white font-bold uppercase tracking-wider">
              Play Now
            </button>

            {/* Plus button */}
            <button className="w-12 h-12 flex items-center justify-center bg-[#e5267a]/20 rounded-full">
              <Plus className="w-6 h-6 text-[#e5267a]" />
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
