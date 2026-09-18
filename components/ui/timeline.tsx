"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative w-full bg-gradient-to-b from-white via-rose-50 to-pink-100 dark:from-neutral-950 dark:via-zinc-900 dark:to-zinc-800 font-sans md:px-10 px-4 py-10 rounded-xl shadow-lg"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Left Sticky Timeline Marker */}
            <div className="sticky z-40 flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-md">
                <div className="h-4 w-4 rounded-full bg-rose-400 dark:bg-amber-400 border-2 border-white dark:border-black" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-semibold text-rose-600 dark:text-amber-300">
                {item.title}
              </h3>
            </div>

            {/* Right Content */}
            <div className="relative pl-12 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-3 font-semibold text-rose-600 dark:text-amber-300">
                {item.title}
              </h3>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 shadow-sm border border-neutral-100 dark:border-neutral-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-[30px] top-0 w-[3px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mask-image [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-rose-500 via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};