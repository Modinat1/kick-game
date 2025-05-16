import { BellIcon, SearchIcon, HamburgerIcon } from "../assets/svg";
import logo from "../assets/images/logo.svg";
interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen?: boolean;
}
const MobileHeader = ({ toggleSidebar, sidebarOpen }: HeaderProps) => {
  return (
    <header className="bg-[#0E1527] md:hidden w-full py-5 px-3 rounded-lg flex justify-between items-center">
      <div>{!sidebarOpen && <img src={logo} alt="logo" />}</div>

      <div className="flex items-center justify-between gap-x-2">
        <div className="bg-[#101728] rounded-[15px] p-2 w-12 h-12 flex items-center justify-center">
          <SearchIcon />
        </div>

        <div className="bg-[#101728] rounded-[15px] p-2 w-12 h-12 flex items-center justify-center">
          <BellIcon />
        </div>

        <div
          onClick={toggleSidebar}
          className="bg-[#101728] cursor-pointer rounded-[15px] p-2 w-12 h-12 flex items-center justify-center"
        >
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
