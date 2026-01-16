'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import ExecCard from './ExecCard';
import { Button } from '@/components/ui/Button';
import { useExecs } from '@/features/execs/data/tanstack/useExecs';
import { useSortedCategory } from '@/features/execs/data/tanstack/useSortedCategory';
import { AnimatePresence, motion } from 'framer-motion';
import Carousel from './Carousel';

export default function MeetExecs() {
    const { data: execs } = useExecs();
    const { data: sortedCategories } = useSortedCategory();
    const [activeIndex, setActiveIndex] = useState(0);

    // build map execId -> roles[] from sorted categories (execRoleCategory)
    const rolesMap = useMemo(() => {
        const map = new Map<string, string[]>();
        if (!Array.isArray(sortedCategories)) return map;
        for (const cat of sortedCategories) {
            for (const e of cat.execs ?? []) {
                if (!e?.id) continue;
                const arr = map.get(e.id) ?? [];
                if (e.role && !arr.includes(e.role)) arr.push(e.role);
                map.set(e.id, arr);
            }
        }
        return map;
    }, [sortedCategories]);

    const importantExecs = useMemo(() => (execs ?? []).filter((e) => e.isImportant), [execs]);

    // normalize image to string URL and attach roles from rolesMap
    const normalized = useMemo(() => {
        const extractRolesFallback = (e: any) => {
            if (!e) return [];
            if (Array.isArray(e.roles) && e.roles.length) {
                return e.roles.map((r: any) => (typeof r === 'string' ? r : r.roleName ?? r.name ?? '')).filter(Boolean);
            }
            if (Array.isArray(e.role) && e.role.length) {
                return e.role.map((r: any) => (typeof r === 'string' ? r : r.roleName ?? r.name ?? '')).filter(Boolean);
            }
            if (typeof e.role === 'string' && e.role.trim()) return [e.role.trim()];
            if (e.role && typeof e.role === 'object') return [e.role.roleName ?? e.role.name].filter(Boolean);
            return [];
        };

        const items = importantExecs.map((e, idx) => {
            const firstName = e.firstName ?? '';
            const lastName = e.lastName ?? '';
            const name = `${firstName} ${lastName}`.trim() || e.name || '';
            // prefer roles from execRoleCategory (rolesMap), fallback to existing shape
            const rolesFromMap = rolesMap.get(String(e._id ?? e.id)) ?? [];
            const fallbackRoles = extractRolesFallback(e);
            const roles = rolesFromMap.length ? rolesFromMap : fallbackRoles;

            return {
                id: (e._id ?? e.id) as string | undefined,
                index: idx,
                firstName,
                lastName,
                name,
                roles,
                role: roles.join(', '), // single string for simple display
                about: e.about,
                image: typeof e.image === 'string' ? e.image : ((e.image as any)?.src ?? (e.image as any)?.url ?? ''),
            };
        });

        // ensure president-like roles appear first,
        const isPresidentRole = (roles?: string[]) => {
            if (!Array.isArray(roles) || roles.length === 0) return false;
            const looksLikePresident = (s?: string) => {
                if (!s) return false;
                // normalize, split into tokens (removes punctuation)
                const tokens = String(s).toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(Boolean);
                for (let i = 0; i < tokens.length; i++) {
                    const t = tokens[i];
                    // handle "copresident", "co president", "co-president", and "president"
                    if (t === 'president' || t === 'copresident' || t === 'co') {
                        // exclude if preceded by "vice"
                        const prev = tokens[i - 1];
                        if (prev === 'vice') return false;
                        // if token is "co" ensure next token is "president"
                        if (t === 'co' && tokens[i + 1] !== 'president') continue;
                        return true;
                    }
                }
                return false;
            };
            return roles.some((r) => looksLikePresident(r));
        };

        items.sort((a, b) => {
            const aPres = isPresidentRole(a.roles);
            const bPres = isPresidentRole(b.roles);
            if (aPres && !bPres) return -1;
            if (bPres && !aPres) return 1;
            // fallback alphabetical by name
            return String(a.name ?? '').localeCompare(String(b.name ?? ''));
        });

        return items;
    }, [importantExecs, rolesMap]);

    // Duplicate so we have at least 6 items (bugs out with less than 6 for some reason)
    const carouselItems = useMemo(() => [...normalized, ...normalized], [normalized]);

    // The Carousel still wants just image URLs
    const carouselImages = useMemo(() => carouselItems.map((i) => i.image), [carouselItems]);

    // Guard activeIndex in bounds
    const safeActive = carouselItems.length
        ? ((activeIndex % carouselItems.length) + carouselItems.length) % carouselItems.length
        : 0;
    const activeExec = carouselItems[safeActive];

    return (
        <div className="flex flex-col items-center justify-center gap-10 relative pt-8 pb-8 md:min-h-screen md:pt-25 md:pb-20 overflow-hidden">
            {/* Background star */}
            <div className="hidden md:block absolute bottom-[-15%] left-[-20%] -z-10 overflow-hidden">
                <Image
                    src="/images/signup/background_star_white.png"
                    alt="background star white"
                    width={700}
                    height={700}
                    className="w-[400px] md:w-[600px] lg:w-[700px]"
                />
            </div>

            <h3 className="bg-primary-red-400 rounded-2xl px-10 py-2 md:px-6 md:py-1 text-center max-[470px]:!text-xl">
                Meet The Execs
            </h3>
            {/* Original grid of cards */}
            <div className="relative hidden w-full md:flex items-start flex-wrap justify-center gap-5 min-[1490px]:px-[12%]">
                {normalized.map((exec) => (
                    <div key={exec.id} className="flex flex-col items-center">
                        <ExecCard
                            index={exec.index}
                            firstName={exec.firstName}
                            lastName={exec.lastName}
                            about={exec.about}
                            image={exec.image}
                            roles={exec.roles}
                        />
                    </div>
                ))}
                <div className="absolute -right-80 -top-50 hidden md:block -z-10 overflow-hidden">
                    <Image
                        src="/images/signup/background_star.png"
                        unoptimized
                        width={700}
                        height={700}
                        alt=""
                        className="w-[400px] md:w-[600px] lg:w-[700px]"
                    />
                </div>
            </div>
            {/* Image-only Carousel; we listen to which one is centered */}
            <div className="block md:hidden mt-8 -translate-x-1">
                <div className="App">
                    <div className="carousel">
                        <Carousel Data={carouselImages} onCenterChange={(i) => setActiveIndex(i)} />
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
                            <div className="h-[1px] w-[80%] bg-white mb-5 mt-3"></div>
                            <p className="text-center max-w-md text-sm">{activeExec.about}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Button href="/execs" className="my-5 md:mb-0">
                Meet More Execs
            </Button>
        </div>
    );
}
