interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
}
const Input = ({ type, placeholder, name, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`bg-[#0E1527] border-1 border-secondary rounded-[10px] p-3  focus:outline-none ${className} placeholder:text-sm placeholder:text-[#ffffff] placeholder:font-300`}
    />
  );
};

export default Input;
