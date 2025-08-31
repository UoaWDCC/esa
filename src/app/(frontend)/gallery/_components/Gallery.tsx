'use client'

import Image from "next/image"
import Polaroid from "./Polaroid"
import { PolaroidProps, PinColour } from "./Polaroid"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryProps {
    polaroids?: PolaroidProps[];
}

// Dummy data for the gallery
// TODO: Remove this
const PIN_COLOURS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'] as const;
const dummyPolaroids: PolaroidProps[] = Array(18).fill(null).map((_, index) => ({
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
    
    // Different items per page for different screen sizes
    const itemsPerPage = {
        lg: 9, // 3x3 grid
        md: 4, // 2x2 gris
        sm: 2  // 1x2 grid
    };

    const getTotalPages = (screenSize: 'sm' | 'md' | 'lg') => {
        return Math.ceil(polaroids.length / itemsPerPage[screenSize]);
    };

    const getCurrentItems = (screenSize: 'sm' | 'md' | 'lg') => {
        const startIndex = (currentPage - 1) * itemsPerPage[screenSize];
        return polaroids.slice(startIndex, startIndex + itemsPerPage[screenSize]);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(1, prev - 1));
    };

    const handleNextPage = (screenSize: 'sm' | 'md' | 'lg') => {
        setCurrentPage((prev) => Math.min(getTotalPages(screenSize), prev + 1));
    };

    return (
        <div>
            {/* Gallery Board */}
            <div className="relative w-[80vw] py-[8vh] px-[5vw]">
                <Image
                    src="/images/gallery/board.png"
                    alt="Gallery Board Background"
                    fill
                    className="object-fill"
                    priority
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center min-h-[600px] relative">
                    {/* Change grid format based on screen size */}
                    <AnimatePresence mode="wait">
                        <div key={`lg-${currentPage}`} className="hidden lg:contents">
                            {getCurrentItems('lg').map((polaroid, index) => (
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
                        </div>
                        <div key={`md-${currentPage}`} className="hidden md:contents lg:hidden">
                            {getCurrentItems('md').map((polaroid, index) => (
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
                        </div>
                        <div key={`sm-${currentPage}`} className="contents md:hidden">
                            {getCurrentItems('sm').map((polaroid, index) => (
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
                        </div>
                    </AnimatePresence>
                </div> 
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-black/20 hover:bg-black/30 disabled:opacity-50 rounded"
                >
                    Previous
                </button>
                <span className="text-lg">
                    Page {currentPage} of {getTotalPages('lg')}
                </span>
                <button
                    onClick={() => handleNextPage('lg')}
                    disabled={currentPage === getTotalPages('lg')}
                    className="px-4 py-2 bg-black/20 hover:bg-black/30 disabled:opacity-50 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    )
}