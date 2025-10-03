import React from 'react';

export default function EntertainmentFolder() {
    return (
        <div className="relative group cursor-pointer transition-all duration-500 ease-out">
            {/* Angled tab - responsive */}
            <div
                className="relative z-10 w-40 sm:w-56 md:w-[300px] h-10 sm:h-11 md:h-12 bg-[#ED433B] flex items-center px-2 sm:px-4 justify-center ml-8 sm:ml-16 md:ml-32 lg:ml-160 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:shadow-lg group-active:-translate-y-7 group-active:scale-110"
                style={{
                    clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                }}
            >
                {/* Text positioned over the angled tab - responsive text */}
                <span className="text-white font-bold text-xs sm:text-sm md:text-xl">
                    <span className="hidden sm:inline">Entertainment</span>
                    <span className="sm:hidden">Fun</span>
                </span>
            </div>

            {/* Main folder body - responsive height */}
            <div
                className="relative z-0 w-full h-[150px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#ED433B] p-4 overflow-y-auto transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:-translate-y-3 group-hover:shadow-xl group-active:-translate-y-8"
                style={{
                    boxShadow: '0 -6px 30px rgba(0, 0, 0, 0.4), 0 -2px 8px rgba(0, 0, 0, 0.3)',
                }}
            >
                {/* Content */}
            </div>
        </div>
    );
}
