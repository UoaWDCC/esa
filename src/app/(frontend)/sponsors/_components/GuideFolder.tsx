import React from 'react';

export default function GuideFolder() {
    return (
        <div className="relative">
            {/* Angled tab */}
            <div
                className="w-40 sm:w-56 md:w-[300px] h-10 sm:h-11 md:h-12 bg-[#DC6EA1] flex items-center px-2 sm:px-4 justify-center ml-4 sm:ml-8 md:ml-32 lg:ml-32"
                style={{
                    clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                }}
            >
                {/* Text positioned over the angled tab */}
                <span className="text-white font-bold text-xs sm:text-sm md:text-xl">
                    <span className="hidden sm:inline">Click Tabs for Info!</span>
                    <span className="sm:hidden">Info</span>
                </span>
            </div>

            {/* Main folder body */}
            <div
                className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#DC6EA1]"
                style={{
                    boxShadow: '0 -6px 20px rgba(0, 0, 0, 0.25), 0 -2px 8px rgba(0, 0, 0, 0.15)',
                }}
            >
                {/* Content */}
            </div>
        </div>
    );
}
