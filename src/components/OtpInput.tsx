import { useRef, useState } from "react";

interface OtpInputProps {
  onSubmit?: (otp: string) => void;
  disabled?: boolean;
  hasError?: boolean;
}

const OtpInput: React.FC<OtpInputProps> = ({
  onSubmit,
  disabled,
  hasError,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newOtp.every((digit) => digit !== "") && onSubmit) {
        onSubmit(newOtp.join(""));
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <div className="flex justify-center gap-3 md:gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el!;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`w-10 h-10 md:w-[70px] md:h-[50px] text-center rounded-[10px] outline-none bg-[#0E1527] text-white border transition-all
            ${hasError ? "border-error" : "border-secondary"}
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "focus:ring-2 focus:ring-error"
            }`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
