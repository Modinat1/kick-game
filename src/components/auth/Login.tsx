import logo from "../../assets/images/logo.svg";
import GradientButton from "../../shared/button/GradientButton";
import Input from "../../shared/form/Input";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="grid place-items-center mx-auto text-center h-screen px-6">
      <form className="space-y-5 w-full md:w-[35%]">
        <img className="block mx-auto" src={logo} alt="logo" />
        <h2 className="capitalize text-center font-semibold text-base">
          Welcome Back!
        </h2>
        <p className="text-sm text-center">Play Trivia and arcade games</p>

        <Input
          className="block w-full"
          type="text"
          placeholder="Enter your email address"
          name="email"
        />

        <GradientButton
          type="button"
          onClick={() => navigate("/kick-arcade")}
          className="w-full"
        >
          continue
        </GradientButton>
      </form>
    </section>
  );
};

export default Login;
