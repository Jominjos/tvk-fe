import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carouselpc({
  children: slides,
  autoSlide = !true,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative" style={{ height: `90vh` }}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)`, height: `100%` }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/pattiPc.jpg?alt=media&amp;token=3c0db5ae-2e52-4b30-a764-c9b5ee0d3c1e"
          style={{
            width: `100vw`,
            objectFit: ` cover`,
          }}
        />
      </div>
      {/* 
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-red-600 rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              key={i}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
