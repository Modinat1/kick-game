import logoImg from "../assets/images/ruined-king.svg";
import characterImg from "../assets/images/ruined-king-logo.svg";

import { Star, Plus } from "lucide-react";

const RuinedKingCardd = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0e1a] p-4">
      <div className="relative w-full max-w-3xl">
        {/* Card container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a3e42] to-[#1a3e42]/90 shadow-xl">
          {/* Character image overlays content */}
          <div className="absolute top-12 right-8 z-20 w-[400px] h-[400px] pointer-events-none">
            <img
              src={characterImg}
              alt="Ruined King character"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Rating circle */}
          <div className="absolute top-8 left-8 z-30">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-4 border-[#1a3e42] bg-[#0a0e1a]"></div>
              <div className="absolute inset-2 rounded-full border-2 border-[#3ad0bd]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">9,2</span>
              </div>
              <div className="absolute -top-2 -left-4">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              </div>
              <div className="absolute -top-4 left-2">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              </div>
              <div className="absolute -top-2 left-8">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              </div>
            </div>
          </div>

          {/* Free to play badge */}
          <div className="absolute top-6 right-6 z-30">
            <div className="px-3 py-1 rounded-full bg-[#1a3e42]/80 text-white text-sm">
              Free to play
            </div>
          </div>

          {/* Content area */}
          <div className="pt-40 pb-8 px-8 relative z-10">
            <div className="mt-16 mb-4">
              <h1 className="text-4xl font-bold text-white mb-2">
                Ruined King
              </h1>
              <p className="text-gray-300 max-w-md">
                There's a lot to learn about LOL, so we'll start with the
                essentials. Explore the guide below for an overview of the most
                popular game mode.
              </p>
            </div>

            <div className="flex items-center mt-4">
              <div className="mr-4">
                <span className="text-white">Reviews 3.4k</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center mt-6">
              <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 rounded-full text-white font-bold">
                PLAY NOW
              </button>
              <button className="ml-4 flex items-center justify-center w-12 h-12 bg-pink-600/30 rounded-full text-pink-500">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Game logo */}
          <div className="absolute right-8 bottom-24 z-10">
            <img
              src={logoImg}
              alt="Ruined King Logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuinedKingCardd;
