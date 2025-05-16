import splash from "../assets/images/SPLASH.svg";
import mobileImg from "../assets/images/SPLASH MOBILE.svg";
import { useNavigate } from "react-router";

const Splash = () => {
  const navigate = useNavigate();

  setTimeout(() => navigate("/verify-no"), 3000);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center">
      <img className="hidden md:block" src={splash} alt="splash screen" />
      <img
        className="block md:hidden object-contain"
        src={mobileImg}
        alt="splash screen image"
      />
    </div>
  );
};

export default Splash;
