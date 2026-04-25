import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#0b1220] text-white">

      {/* Sidebar */}
      <div className="w-64 fixed h-full">
        <Sidebar />
      </div>

      {/* Right Side */}
      <div className="flex-1 ml-64 flex flex-col">

        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 h-16 z-50">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="mt-16 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}