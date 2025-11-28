// app/testimonials/TestimonialsCarousel.tsx
"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { UserCircle, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

export type Recommendation = {
  index: number;
  name: string;
  profileUrl: string;
  headline: string;
  text: string;
  date?: string;
  connection?: string;
  relationship?: string | null;
  imageDataSavepageSrc?: string | null;
};

export default function TestimonialsCarousel({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 1 card/slide on mobile, 2 on desktop
  const slides = useMemo(() => {
    const perSlide = isMobile ? 1 : 2;
    const arr: Recommendation[][] = [];
    for (let i = 0; i < recommendations.length; i += perSlide) {
      arr.push(recommendations.slice(i, i + perSlide));
    }
    return arr;
  }, [recommendations, isMobile]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= slides.length) setCurrent(0);
  }, [slides.length, current]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX.current) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev() : next());
    startX.current = null;
  };

  if (!recommendations?.length) return null;
  const total = slides.length;

  return (
    <div className="relative w-[300px] lg:w-full mx-auto">
      {/* Terminal Frame */}
      <div
        className="overflow-hidden rounded-xl border border-emerald-500/40 bg-black shadow-[0_0_25px_-10px_rgba(16,185,129,0.9)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-black/60">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] md:text-xs tracking-wider text-emerald-300/90">
            testimonials.log
          </span>
        </div>

        {/* Slide Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((group, i) => (
            <div
              key={i}
              className="w-full p-4 md:px-6 md:py-6 shrink-0 bg-black"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {group.map((t) => (
                  <article
                    key={t.index}
                    className="
                      rounded-lg border border-emerald-500/30 bg-black/40
                      p-4 md:p-5 flex flex-col gap-3 md:gap-4 text-emerald-100 font-mono
                    "
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3">
                      {t.imageDataSavepageSrc ? (
                        <img
                          src={t.imageDataSavepageSrc}
                          alt={t.name}
                          className="h-12 w-12 md:h-16 md:w-16 rounded border border-emerald-500/60 object-cover grayscale shrink-0"
                        />
                      ) : (
                        <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center border border-emerald-500/60 rounded text-emerald-400 shrink-0">
                          <UserCircle className="h-8 w-8 md:h-10 md:w-10" />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p className="text-emerald-300 text-sm md:text-base font-semibold mb-0.5">
                          &gt; {t.name}
                        </p>
                        <p className="text-[11px] md:text-xs text-emerald-400/80 line-clamp-2 leading-relaxed">
                          // {t.headline}
                        </p>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="border-l-2 border-emerald-500/40 pl-3 md:pl-4 flex-1">
                      <p className="text-xs md:text-sm leading-relaxed text-emerald-200/90 max-h-40 md:max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/30 scrollbar-track-transparent">
                        {t.text}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-emerald-500/30 pt-3 text-[10px] md:text-xs space-y-1.5">
                      {t.relationship && (
                        <p className="text-emerald-300/70 line-clamp-1">
                          :: {t.relationship}
                        </p>
                      )}
                      {t.date && (
                        <p className="text-emerald-400/90 font-semibold text-[10px]">
                          [{t.date}]
                        </p>
                      )}

                      <a
                        href={t.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-2 inline-flex items-center justify-center gap-2 w-full
                          border border-emerald-500/60 px-4 py-2 rounded
                          text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400
                          transition-all text-xs md:text-sm font-medium
                        "
                      >
                        <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        <span>OPEN PROFILE</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {total > 1 && (
        <>
          {/* Desktop arrows - positioned outside on left/right */}
          <div className="hidden lg:block">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full border border-emerald-500/40 bg-black/80 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full border border-emerald-500/40 bg-black/80 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile navigation - below carousel */}
          <div className="lg:hidden mt-5 flex justify-center items-center gap-3">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => {
                // On mobile, show max 5 dots with current in center
                const shouldShow = slides.length <= 5 || 
                  idx === current || 
                  idx === current - 1 || 
                  idx === current + 1 ||
                  idx === 0 || 
                  idx === slides.length - 1;
                
                if (!shouldShow) return null;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === current 
                        ? 'w-8 bg-emerald-400' 
                        : 'w-2 bg-emerald-500/40 hover:bg-emerald-500/60'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}