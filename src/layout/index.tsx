import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import MobileHeader from "../shared/MobileHeader";
import { IoIosArrowForward } from "react-icons/io";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <section>
      <ScrollToTop />
      <div className="flex h-screen">
        <div className="relative">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div
            // onClick={toggleSidebar}
            className="bg-[#090B17] cursor-pointer hidden md:flex items-center justify-center w-7 h-7 rounded-full border border-[#A33B3B] absolute top-[10%] left-[235px] transform -translate-y-1/2 z-50"
          >
            <IoIosArrowForward color="#ffffff" />
          </div>
        </div>

        <div className="flex-1 flex flex-col ml-0 md:ml-64">
          <Header />
          <MobileHeader
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {/* <main className="p-4 overflow-y-auto flex-1"> */}
          <main className="overflow-y-auto flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
}
