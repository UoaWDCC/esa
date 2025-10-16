import React from 'react';

export default function RestaurantsFolder() {
    return (
        <div className="relative group cursor-pointer transition-all duration-500 ease-out">
            {/* Angled tab */}
            <div
                className="relative z-10 w-40 sm:w-56 md:w-[300px] h-10 sm:h-11 md:h-12 bg-[#FFC857] flex items-center px-2 sm:px-4 justify-center ml-6 sm:ml-12 md:ml-24 lg:ml-96 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-3 group-active:-translate-y-7"
                style={{
                    clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                }}
            >
                {/* Text positioned over the angled tab */}
                <span className="text-white font-bold text-xs sm:text-sm md:text-xl">
                    <span className="hidden sm:inline">Restaurants</span>
                    <span className="sm:hidden">Food</span>
                </span>
            </div>

            {/* Main folder body */}
            <div
                className="z-0 w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#FFC857] p-4 overflow-y-auto transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:-translate-y-3 group-hover:shadow-xl group-active:-translate-y-8"
                style={{
                    boxShadow: '0 -6px 30px rgba(0, 0, 0, 0.4), 0 -2px 8px rgba(0, 0, 0, 0.3)',
                }}
            >
                {/* Content */}
            </div>
        </div>
    );
}
