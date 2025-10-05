'use client'

import Image from "next/image"
import Polaroid from "./Polaroid"
import { PolaroidProps} from "./Polaroid"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [polaroids, setPolaroids] = useState<PolaroidProps[]>([]);

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(9); // lg has 3x3 grid
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(4); // md has 2x2 grid
            } else {
                setItemsPerPage(2); //sm has 1x2 grid
            }
            setCurrentPage(1); // Reset to first page on resize
        };

        window.addEventListener('resize', handleResize);

        // Set initial items per page 
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const getTotalPages = (): number => {
        if (!polaroids || polaroids.length == 0) return 1;
        return Math.ceil(polaroids.length / itemsPerPage);
    };

    const getCurrentItems = (): PolaroidProps[] => {
        const startIndex: number = (currentPage - 1) * itemsPerPage;
        return polaroids.slice(startIndex, startIndex + itemsPerPage);
    };

    const handlePrevPage = (): void => {
        setCurrentPage((prev) => Math.max(1, prev - 1));
    };

    const handleNextPage = (): void => {
        setCurrentPage((prev) => Math.min(getTotalPages(), prev + 1));
    };

    return (
        <div className="w-full">
            {/* Gallery Board */}
            <div className="flex justify-center items-center"> 
                <div>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="py-2 text-[10vw] mr-[1rem] disabled:opacity-50 cursor-pointer hover:text-accent transition-colors"
                    >
                        <ChevronLeft className="lg:w-20 lg:h-20 md:w-15 md:h-15 w-10 h-10"/>
                    </button>
                </div>
            
                <div className="relative w-[60vw] h-[95vw] px-[5vw] py-[5vw] md:w-[80vw] md:h-[65vw]">
                    <Image
                        src="/images/gallery/board.png"
                        alt="Gallery Board Background"
                        fill
                        className="object-fill"
                        draggable={false}
                        priority
                    />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 1 }}   
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}     
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5vh] place-items-center relative z-10"
                        >
                            {getCurrentItems().map((polaroid: PolaroidProps, index: number) => (
                                <motion.div
                                    key={`${polaroid.eventName}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }}
                                >
                                    <Polaroid {...polaroid} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === getTotalPages()}
                        className="py-2 text-[10vw] ml-[1rem] disabled:opacity-50 cursor-pointer hover:text-accent transition-colors"
                    >
                        <ChevronRight className="lg:w-20 lg:h-20 md:w-15 md:h-15 w-10 h-10"/>
                    </button>
                </div>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center items-center my-4">
                {Array.from({ length: getTotalPages() }, (_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${currentPage === index + 1 ? 'bg-primary-red-400' : 'bg-gray-400'}`}
                        onClick={() => setCurrentPage(index + 1)}
                    />
                ))}
            </div>  
        </div>
    )
}