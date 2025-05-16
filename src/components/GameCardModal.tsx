import { IoClose } from "react-icons/io5";
import Biomutant from "../assets/images/Biomutantt.svg";
import GradientButton from "../shared/button/GradientButton";
import previewImg from "../assets/images/previewImg.svg";

const GameCardModal = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="relative flex items-center min-h-screen w-full justify-center">
      <div className="hidden lg:block fixed left-1/2 transform -translate-x-[calc(50%+200px)] top-1/2 -translate-y-1/2 z-40">
        <img src={previewImg} alt="preview" className="h-[500px]" />
      </div>

      <div className="relative z-50 md:ml-[300px] bg-[#ffffff] rounded-xl md:rounded-none p-6 w-full md:max-w-[30%]">
        <div className="md:flex justify-between items-center">
          <button
            onClick={onClose}
            className="cursor-pointer block ml-auto md:hidden"
          >
            <IoClose size={20} color="#000" />
          </button>

          <div className="flex justify-center md:justify-between items-start">
            <p className="bungee-regular font-bold text-black-400 text-2xl">
              🎮 BIOMUTANT
            </p>
          </div>

          <button onClick={onClose} className="hidden md:block cursor-pointer">
            <IoClose size={20} color="#000" />
          </button>
        </div>

        <div className="w-full md:w-[75%] my-4">
          <img src={Biomutant} alt="cover image" className="w-full" />
        </div>

        <p className="bungee-regular font-bold text-black-400 text-sm leading-5">
          GET READY TO FIGHT, MUTATE, AND SURVIVE!
        </p>
        <p className="text-sm font-semibold text-primary my-3 leading-6">
          Dive into the post-apocalyptic world of Biomutant — an action-packed
          arcade game where your skills evolve with every battle.
        </p>

        <GradientButton type="button">PLAY NOW</GradientButton>
      </div>
    </div>
  );
};

export default GameCardModal;
