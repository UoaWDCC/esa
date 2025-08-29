'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import TopTear from './TopTear';
import BotTear from './BotTear';
import ExecCard from './ExecCard';
import ExecPolaroid from './ExecPolaroid';
import { Button } from '@/components/ui/Button';
import { useExecs } from '@/features/execs/data/tanstack/useExecs';
import { AnimatePresence, motion } from "framer-motion";
import Carousel from './Carousel';

export default function MeetExecs() {
  const { data: execs } = useExecs();
  const [activeIndex, setActiveIndex] = useState(0);

  const importantExecs = useMemo(
    () => (execs ?? []).filter((e) => e.isImportant),
    [execs]
  );

  // Normalize image to string URL
  const normalized = useMemo(() => {
    return importantExecs.map((e, idx) => ({
      id: e._id as string | undefined,
      index: idx,
      name: e.name,
      role: e.role,
      about: e.about,
      image: typeof e.image === 'string' ? e.image : (e.image as any)?.src ?? '',
    }));
  }, [importantExecs]);

  // Duplicate so we have at least 6 items (bugs out with less than 6 for some reason)
  const carouselItems = useMemo(() => [...normalized, ...normalized], [normalized]);

  // The Carousel still wants just image URLs
  const carouselImages = useMemo(() => carouselItems.map(i => i.image), [carouselItems]);

  // Guard activeIndex in bounds
  const safeActive = carouselItems.length ? (activeIndex % carouselItems.length + carouselItems.length) % carouselItems.length : 0;
  const activeExec = carouselItems[safeActive];

  return (
  <div className="flex flex-col items-center justify-center gap-10 relative z-50 pt-8 pb-8 md:min-h-screen md:pt-25 md:pb-20">
      <h3 className="bg-primary-red-400 px-6 py-1 rounded-2xl">Meet The Execs</h3>

      {/* Original grid of cards */}
      <div className="hidden w-full md:flex flex-wrap justify-center gap-5 z-50">
        {normalized.map((exec) => (
          <ExecCard
            key={exec.id}
            index={exec.index}
            name={exec.name}
            role={exec.role}
            about={exec.about}
            image={exec.image}
          />
        ))}
      </div>

      {/* Image-only Carousel; we listen to which one is centered */}
      <div className="block md:hidden mt-10 -translate-x-1">
        <div className="App">
          <div className="carousel">
            <Carousel
              Data={carouselImages}
              onCenterChange={(i) => setActiveIndex(i)}
            />
          </div>
        </div>
      

        {/* Text section tied to the centered image */}
        <AnimatePresence mode="wait">
          {activeExec && (
            <motion.div
              key={activeExec.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-[20rem]"
            >
              <h4 className="text-2xl font-semibold -mb-1 mt-4">{activeExec.name}</h4>
              <p className="text-sm font-smeltex-medium">{activeExec.role}</p>
              <div className="h-[1px] w-[80%] bg-white mb-5"></div>
              <p className="text-center max-w-md text-sm">{activeExec.about}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button href="/execs">Meet More Execs</Button>

      <Image
        src="/images/aboutus/path.svg"
        unoptimized
        width={400}
        height={400}
        alt=""
        className="absolute right-0 top-45 hidden md:block"
      />

      <TopTear />
      <BotTear />
    </div>
  );
}
