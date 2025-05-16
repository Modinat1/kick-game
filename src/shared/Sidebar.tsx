import type { FC } from "react";
import { Link, useLocation } from "react-router";
import { sidebarRoutes, sidebarProfileRoutes } from "./SidebarItems";
import type { SidebarProps } from "../interfaces/common";
import logo from "../assets/images/logo.svg";
import bonus from "../assets/images/bonus.svg";

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  // Checking if a route is active
  const isRouteActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`fixed z-50 overflow-y-auto left-0 w-[250px] h-screen bg-white border-r border-gray-400 py-5 px-3 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 flex flex-col`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="mx-auto">
        <img src={logo} alt="logo" />
      </div>

      <ul className="bg-[#111829] mt-4 p-3 rounded-lg">
        <div className="bg-[#171E2F] py-3 px-2 flex items-center gap-x-3 rounded-lg">
          <div>
            <img src={bonus} alt="bonus" />
          </div>
          <div>
            <h2 className="text-sm font-bold mb-3">Bonus</h2>
            <p className="text-[#616161] text-xs font-normal">
              Get everyday extra points
            </p>
          </div>
        </div>

        <div className="bg-[#171E2F] rounded-lg py-3 my-3">
          {sidebarRoutes.map((route) => {
            const isActive = isRouteActive(route.path);

            return (
              <li key={route.name} className="w-full px-3">
                <Link
                  to={route.path}
                  className={`w-full rounded-xl py-4 px-5 flex items-center gap-x-2 
                  ${
                    isActive
                      ? "bg-[#451D3D] text-[#ffffff]"
                      : "text-[#898D95] hover:bg-[#451D3D] hover:text-white transition-colors"
                  }
                `}
                >
                  <span
                    className={`hover:text-white transition-colors ${
                      isActive
                        ? "text-[#ffffff] brightness-100"
                        : "text-[#898D95]"
                    }`}
                  >
                    {route.icon}
                  </span>
                  <span
                    className={`text-sm hover:text-white transition-colors ${
                      isActive
                        ? "text-[#ffffff] font-normal"
                        : "text-[#898D95] font-normal"
                    }`}
                  >
                    {route.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </div>

        {/* profile routes */}
        <div className="bg-[#171E2F] rounded-lg py-3 my-3">
          {sidebarProfileRoutes.map((route) => {
            const isActive = isRouteActive(route.path);
            return (
              <li key={route.name} className="w-full px-3">
                <Link
                  to={route.path}
                  className={`w-full rounded-xl py-4 px-5 flex items-center gap-x-2 
                  ${
                    isActive
                      ? "bg-[#451D3D] text-[#ffffff]"
                      : "text-[#898D95] hover:bg-[#451D3D] hover:text-white transition-colors"
                  }
                `}
                >
                  <span
                    className={`hover:text-white transition-colors${
                      isActive ? "text-[#ffffff]" : "text-[#898D95]"
                    }`}
                  >
                    {route.icon}
                  </span>
                  <span
                    className={`text-sm hover:text-white transition-colors ${
                      isActive
                        ? "text-[#ffffff] font-normal"
                        : "text-[#898D95] font-normal"
                    }`}
                  >
                    {route.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
