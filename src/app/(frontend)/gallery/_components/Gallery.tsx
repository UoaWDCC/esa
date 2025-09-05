'use client'

import Image from "next/image"
import Polaroid from "./Polaroid"
import { PolaroidProps, PinColour } from "./Polaroid"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryProps {
    polaroids?: PolaroidProps[];
}

// Dummy data for the gallery
// TODO: Remove this
const PIN_COLOURS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'] as const;
const dummyPolaroids: PolaroidProps[] = Array(19).fill(null).map((_, index) => ({
    image: "/images/contact-us-image.png",
    eventName: `Event ${index + 1}`,
    eventDate: new Date(2025, Math.floor(index / 3), (index % 28) + 1).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }),
    pinColour: PIN_COLOURS[index % PIN_COLOURS.length] as PinColour,
    variation: index % 3 === 2 ? 'large' : 'small'
}));

export default function Gallery({polaroids = dummyPolaroids}: GalleryProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

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
        <div>
            {/* Gallery Board */}
            <div className="flex justify-center items-center"> 
                <div>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-[10vw] mr-[3vw] disabled:opacity-50"
                    >
                        &lt;
                    </button>
                </div>
            
                <div className="relative w-[60vw] h-[95vw] px-[5vw] py-[5vw] md:w-[80vw] md:h-[65vw]">
                    <Image
                        src="/images/gallery/board.png"
                        alt="Gallery Board Background"
                        fill
                        className="object-fill"
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
                        className="px-4 py-2 text-[10vw] ml-[3vw] disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center items-center my-4">
                {Array.from({ length: getTotalPages() }, (_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => setCurrentPage(index + 1)}
                    />
                ))}
            </div>  
        </div>
    )
}