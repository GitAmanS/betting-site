import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePassword } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineLocalPolice } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import PageLocationBar from './PageLocationBar';
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Header = ({ element }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='flex flex-col min-h-screen'>
            

            <header className="header sticky top-0 left-0 right-0 w-full bg-gray-100 shadow-lg font-roboto border-b-4 border-purple-600 z-50">
                <div className="container mx-auto px-4 max-w-screen-lg">
                    <nav className="flex justify-between items-center h-20">
                        <div className="logo font-display text-3xl text-black flex items-center ">Logo</div>

                        <div className="balance rounded-lg p-2 bg-white shadow-md flex items-center">
                            <span className="text-green-500 text-lg rounded font-semibold">Balance: 5000₹</span>
                        </div>

                        <button
                            className="focus:outline-none sidebar-toggle text-black flex justify-center items-center text-4xl"
                            onClick={toggleSidebar}
                        >
                            <IoMenu />
                        </button>
                    </nav>
                </div>
            </header>

            <div className="overflow-y-scroll flex-grow no-scrollbar bg-gray-100 md:px-4 md:py-2">
            <PageLocationBar />
                {element}
            </div>

            <aside
                className={`sidebar border-t-4  border-purple-600 fixed md:ml-40 top-20 left-0 z-40 h-full w-64 md:w-64 lg:w-64 overflow-auto transition duration-300 transform bg-white text-black ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-100 '
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex flex-col sidebar-content px-2 py-2">
                        <button onClick={()=>{navigate("/dashboard")}} className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <RxDashboard />    Dashboard
                        </button>
                        <button className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <MdOutlinePassword />Change Password
                        </button>
                        <button onClick={()=>{navigate("/deposite")}} className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <GrMoney /> Deposit
                        </button>
                        <button onClick={()=>{navigate("/withdrawal")}} className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <BiMoneyWithdraw />Withdrawal
                        </button>
                        <button className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <TbReportSearch /> Bet Details
                        </button>
                        <button className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <BiSolidReport />Account Statement
                        </button>
                        <button className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <FaTelegram />Telegram Channel
                        </button>
                        <button className="flex items-center sidebar-button gap-2 rounded text-black text-xl  px-4 py-2 mb-2 hover:bg-gray-300">
                            <MdOutlineLocalPolice />Bet Rules
                        </button>
                        <button className="flex mt-auto items-center sidebar-button gap-2 rounded text-black text-xl font-semibold px-4 py-2  hover:bg-gray-300">
                            <CiLogout />Logout
                        </button>
                    </div>
                </div>
            </aside>

            
        </div>
    );
};

export default Header;
