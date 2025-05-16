import logo from "../../assets/images/logo.svg";
import GradientButton from "../../shared/button/GradientButton";
import { useNavigate } from "react-router";
import OtpInput from "../OtpInput";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const handleOtpSubmit = (code: string) => {
    console.log(code);
  };

  return (
    <section className="grid place-items-center h-screen mx-auto text-center px-6">
      <form className="space-y-5 w-full md:w-[35%]">
        <img className="block mx-auto" src={logo} alt="logo" />
        <h2 className="capitalize font-semibold text-base">
          Enter OTP and verify your account
        </h2>
        <p className="text-sm mb-2">
          We've sent a 6-digit code to your email. Please
        </p>
        <p className="text-sm">enter it below to continue</p>
        <OtpInput
          onSubmit={handleOtpSubmit}
          hasError={false}
          disabled={false}
        />

        <GradientButton
          type="button"
          onClick={() => navigate("/login")}
          className="w-full"
        >
          verify
        </GradientButton>

        <p className="text-sm text-center mt-5">
          Didn't receive OTP?{" "}
          <span className="text-secondary cursor-pointer">Resend</span>
        </p>
      </form>
    </section>
  );
};

export default VerifyOtp;
