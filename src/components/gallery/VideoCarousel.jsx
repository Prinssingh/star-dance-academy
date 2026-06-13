"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Kavya Shukla Dance Kanhiya – Best Performance",
    description:
      "Delllaill’s standout moment: Kavya Shukla’s electrifying Kanhiya routine that stole the spotlight and crowned the night.",
    embed: "https://www.youtube.com/embed/xVSRX2pngNo?si=7waLi763wWcqt86H",
    tag: "best performance",
    tagColor: "pink",
  },
  {
    id: 2,
    title: "Zumba Performance",
    description:
      "Vibrant Garba performance celebrating traditional Gujarati folk dance with rhythmic claps and spirited movements.",

    embed: "https://www.youtube.com/embed/nTwoS7X7wWo",
    tag: "Zumba",
    tagColor: "orange",
    // https: "https://www.youtube.com/shorts/nTwoS7X7wWo",
  },
  {
    id: 3,
    title: "Kids republic day Showcase",
    description:
      "Our little stars shine bright in this heartwarming republic day performance filled with joy and pure talent.",
      embed: "https://www.youtube.com/embed/CgZq_ayV_jQ",
    tag: "Kids republic day",
    tagColor: "dark",
  },
  {
    id: 4,
    title: "couple dance",
    description:
      "Two hearts, one rhythm — watch our couple dance light up the floor with effortless connection and magnetic chemistry.",
    embed: "https://www.youtube.com/embed/HkmOtJIZh6A",
    tag: "Girls Batch",
    tagColor: "pink",
  },
  {
    id: 5,
    title: "Kids Batch Showcase",
    description:
      "Our youngest dancers take the stage with boundless energy and adorable moves that'll make your heart smile.",
    embed: "https://www.youtube.com/embed/P2sWmtuuvP4",
    tag: "Kids Batch",
    tagColor: "orange",
  },
];

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/xVSRX2pngNo?si=7waLi763wWcqt86H"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>;

const tagStyles = {
  pink: "bg-[#f6466c]/15 text-[#f6466c] border border-[#f6466c]/20",
  orange: "bg-[#f28b00]/15 text-[#f28b00] border border-[#f28b00]/20",
  dark: "bg-[#1a1a1a]/10 text-[#1a1a1a] border border-[#1a1a1a]/15",
};

const CARD_WIDTH_DESKTOP = 480;
const CARD_WIDTH_MOBILE = 300;
const GAP = 20;

export default function VideoCarousel({ className }) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef(null);

  const total = videos.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleDragStart = (e) => {
    setDragging(true);
    setDragStart(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };
  const handleDragEnd = (e) => {
    if (!dragging) return;
    const endX =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart - endX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setDragging(false);
  };

  return (
    <section
      className={`relative overflow-hidden py-20 bg-[#faf7f4]  ${className}`}
    >
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-125 h-125 rounded-full -top-32 -right-32 opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(246,70,108,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-100 h-100 rounded-full -bottom-20 -left-20 opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(242,139,0,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(246,70,108,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#f6466c]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#f6466c] dmsans">
                Our Studio
              </span>
              <span className="w-8 h-px bg-[#f6466c]" />
            </div>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6   text-[#1a1a1a]"
              style={{
                // fontSize: "clamp(48px, 8vw, 80px)",
                // letterSpacing: "0.02em",
              }}
            >
              Watch Us
              <span className="text-[#f6466c] block">Move</span>
            </h2>
          </div>
          <p className="playfair italic text-gray-400 text-base sm:text-lg max-w-xs text-left sm:text-right pb-1">
            Performances, masterclasses &amp; moments from our dance floor.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative no-select cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Cards Track */}
          <div
            className="flex justify-center items-center relative"
            style={{ height: "clamp(360px, 55vw, 540px)" }}
          >
            {videos.map((video, i) => {
              const offset = i - current;
              const wrappedOffset =
                ((offset + total + Math.floor(total / 2)) % total) -
                Math.floor(total / 2);

              const isCenter = wrappedOffset === 0;
              const isAdjacent = Math.abs(wrappedOffset) === 1;
              const isHidden = Math.abs(wrappedOffset) > 1;

              const xDesktop =
                wrappedOffset * (CARD_WIDTH_DESKTOP * 0.72 + GAP);
              const xMobile = wrappedOffset * (CARD_WIDTH_MOBILE * 0.78 + GAP);

              const scale = isCenter ? 1 : isAdjacent ? 0.82 : 0.68;
              const opacity = isCenter ? 1 : isAdjacent ? 0.55 : 0;
              const zIndex = isCenter ? 30 : isAdjacent ? 20 : 5;

              return (
                <motion.div
                  key={video.id}
                  animate={{
                    x:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? xMobile
                        : xDesktop,
                    scale,
                    opacity: isHidden ? 0 : opacity,
                    zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  className="absolute"
                  style={{ width: "clamp(290px, 45vw, 480px)" }}
                  onClick={() => {
                    if (!isCenter && isAdjacent) {
                      wrappedOffset > 0 ? next() : prev();
                    }
                  }}
                >
                  {/* Card */}
                  <div
                    className={`rounded-3xl overflow-hidden flex flex-col bg-white transition-shadow duration-300 ${
                      isCenter
                        ? "shadow-[0_24px_60px_rgba(246,70,108,0.18)]"
                        : "shadow-lg"
                    }`}
                  >
                    {/* Video iframe */}
                    <div
                      className="relative w-full bg-[#1a1a1a]"
                      style={{ paddingTop: "56.25%" }}
                    >
                      {isCenter ? (
                        <iframe
                          src={`${video.embed}?autoplay=1`}
                          title={video.title}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                          <div className="w-14 h-14 rounded-full bg-[#f6466c]/20 border border-[#f6466c]/30 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-[#f6466c] ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#f6466c] to-[#f28b00]" />
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <span
                        className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full  mb-3 ${tagStyles[video.tagColor]}`}
                      >
                        {video.tag}
                      </span>
                      <h3
                        className=" font-bold text-[#1a1a1a] mb-2"
                        style={{ fontSize: "clamp(15px, 2.5vw, 20px)" }}
                      >
                        {video.title}
                      </h3>
                      <p
                        className=" text-gray-400 leading-relaxed"
                        style={{ fontSize: "clamp(11px, 1.8vw, 13px)" }}
                      >
                        {video.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center items-center gap-5 mt-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              onClick={prev}
              className="w-12 h-12 cursor-pointer rounded-full bg-white border border-black/8 shadow-md flex items-center justify-center text-[#1a1a1a] hover:border-[#f6466c]/30 hover:shadow-[0_4px_20px_rgba(246,70,108,0.15)] transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {videos.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  animate={{
                    width: i === current ? 28 : 8,
                    backgroundColor: i === current ? "#f6466c" : "#d1d5db",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              onClick={next}
              className="w-12 h-12 cursor-pointer rounded-full bg-white border border-black/8 shadow-md flex items-center justify-center text-[#1a1a1a] hover:border-[#f6466c]/30 hover:shadow-[0_4px_20px_rgba(246,70,108,0.15)] transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Swipe hint — mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-[11px] text-gray-400 dmsans mt-4 sm:hidden tracking-wider"
          >
            ← swipe to explore →
          </motion.p>
        </div>

        {/* Counter */}
        <div className="flex justify-center mt-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bebas text-4xl tracking-wider"
            >
              <span className="text-[#f6466c]">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-300 mx-1">/</span>
              <span className="text-gray-300">
                {String(total).padStart(2, "0")}
              </span>
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
