import logo from "../assets/images/logo.svg";
import GradientButton from "../shared/button/GradientButton";
import { useNavigate } from "react-router";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="grid place-items-center mx-auto h-screen">
      <div className="w-full  text-center">
        <img src={logo} alt={logo} className="mx-auto mb-5" />
        <p className="mb-5 text-base">Welcome to KICK +234 7050 857 338,</p>
        <p className="text-sm mb-2">
          We've successfully detected your phone number.
        </p>
        <p className="text-sm">Let's set up your account</p>
        <GradientButton
          type="button"
          onClick={() => navigate("/onboarding")}
          className="mt-5 px-10"
        >
          Continue
        </GradientButton>
      </div>
    </section>
  );
};

export default WelcomePage;
