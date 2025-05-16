import logo from "../../assets/images/logo.svg";
import GradientButton from "../../shared/button/GradientButton";
import Input from "../../shared/form/Input";
import { useNavigate } from "react-router";

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <section className="grid place-items-center text-center mx-auto h-screen px-6">
      <form className="space-y-5 w-full md:w-[35%]">
        <img className="block mx-auto" src={logo} alt="logo" />

        <h2 className="capitalize font-semibold text-base">
          Set up Your KICK Account
        </h2>
        <p className="text-sm leading-5">
          We'll use your email to keep your account secure and send updates
        </p>
        <Input
          className="block w-full"
          type="text"
          placeholder="Enter your first name"
          name="firstName"
        />

        <Input
          className="block w-full"
          type="text"
          placeholder="Enter your last name"
          name="lastName"
        />

        <Input
          className="block w-full"
          type="text"
          placeholder="Enter your email address"
          name="email"
        />

        <GradientButton
          type="button"
          onClick={() => navigate("/sign-up")}
          className="w-full"
        >
          Continue
        </GradientButton>
      </form>
    </section>
  );
};

export default Onboarding;
