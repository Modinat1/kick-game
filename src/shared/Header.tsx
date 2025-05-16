import { BellIcon, SearchIcon, ArrowIcon } from "../assets/svg";
import profileImg from "../assets/images/profileImg.svg";

const Header = () => {
  return (
    <header className="hidden md:flex justify-between items-center w-full py-6 px-4">
      <div className="text-gray-100 leading-8 text-base font-normal">
        <h2>GMT-02-48</h2>
        <h2>12/04/24</h2>
      </div>

      <div className="flex items-center justify-between gap-x-2">
        <div className="flex-1 flex items-center gap-x-2 py-2 px-5 w-[381px] bg-[#101728] rounded-[11px]">
          <SearchIcon />
          <input
            className="w-full placeholder:text-white placeholder:font-light placeholder:text-xs  focus:outline-none border-none"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="bg-[#101728] rounded-[15px] p-2 w-12 h-12 flex items-center justify-center">
          <BellIcon />
        </div>

        <div className="flex gap-x-2 items-center">
          <div className="w-8 h-8 rounded-full">
            <img src={profileImg} alt="" className="w-full h-full" />
          </div>
          <ArrowIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
