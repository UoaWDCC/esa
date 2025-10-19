'use client';

import ExecCategory from './_components/ExecCategory';
import { useSortedCategory } from '@/features/execs/data/tanstack/useSortedCategory';

export default function Execs() {
  const { data: sortedCategories, isLoading, error } = useSortedCategory();

  return (
    <section className="flex flex-col items-center lg:px-[13%] md:px-[10%] px-[6%] py-28">
      <div className="flex flex-col items-center">
        <h2 className="text-primary-red">Our Execs</h2>
        <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
          <p className="text-primary-white mb-2">Check out our amazing team of executives at ESA!</p>
        </div>
        <hr className="mx-auto mb-15 mt-4 w-[1200px] h-px border-0 bg-white/50" />
      </div>

      {isLoading && <p>Loading execs…</p>}
      {error && <p>Error loading execs.</p>}

      {!isLoading &&
        !error &&
        (sortedCategories ?? []).map((category) => (
          <ExecCategory
            key={category.categoryId ?? category.title}
            title={category.title}
            blurb={category.description}
            execs={category.execs}
          />
        ))}
    </section>
  );
}
