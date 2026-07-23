"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import picone from "../../assets/gallarytwo/bollywood-night.webp";
import pictwo from "../../assets/DanceClassesSection/zumba.webp";
import picthree from "../../assets/gallarytwo/kids-showcase.png";
import picfour from "../../assets/gallarytwo/girlsbacth.png";
import picfive from "../../assets/gallarytwo/sunday.webp";
import picsix from "../../assets/gallarytwo/specialbatch.webp";
import picsaven from "../../assets/gallarytwo/imgseven.webp";

const images = [
  {
    id: 1,
    src: picone.src,
    title: "Bollywood Night",
    description:
      "An electric evening of Bollywood fusion that set the stage on fire.",
    tag: "Performance",
    tagColor: "pink",
    size: "tall",
    className: "sm:row-span-1",
  },
  {
    id: 2,
    src: pictwo.src,
    title: "Zumba Masterclass",
    description:
      "High-energy Latin rhythms with a crowd of 200+ dancing together.",
    tag: "Zumba",
    tagColor: "orange",
    size: "tall",
    className: "sm:col-span-2 hidden sm:block",
  },
  {
    id: 3,
    src: picthree.src,
    title: "Kids Showcase",
    description:
      "Little stars stealing every heart on the annual showcase stage.",
    tag: "Kids",
    tagColor: "dark",
    size: "tall",
    className: " ",
  },
  {
    id: 4,
    src: picfour.src,
    title: "Girls Batch",
    description:
      "Grace and power — the girls batch delivering breathtaking choreography.",
    tag: "Girls Batch",
    tagColor: "pink",
    size: "tall",
    className: "",
  },

  {
    id: 5,
    src: picsix.src,
    title: "Special Batch",
    description:
      "Premium training sessions pushing boundaries every single night.",
    tag: "Special",
    tagColor: "orange",
    size: "tall",
    className: "sm:col-span-1 ",
  },
  {
    id: 6,
    src: picfive.src,
    title: "Sunday Cultural Workshop",
    description:
      "Celebrate dance, culture, and expression through engaging group sessions featuring Bollywood and folk-inspired choreography.",
    tag: "Cultural",
    tagColor: "orange",
    size: "tall",
    className: "sm:col-span-1",
  },
  {
    id: 7,
    src: picsaven.src,
    title: "Bollywood Fusion",
    description:
      "Energetic Bollywood choreography blending expressive movements, vibrant formations, and powerful stage presence.",
    tag: "Bollywood",
    tagColor: "orange",
    size: "tall",
    className: "sm:col-span-1",
  },
];

const tagStyles = {
  pink: "bg-[#f6466c]/20 text-[#f6466c] border border-[#f6466c]/30",
  orange: "bg-[#f28b00]/20 text-[#f28b00] border border-[#f28b00]/30",
  dark: "bg-white/20 text-white border border-white/30",
};

// tall: "row-span-2",
//     wide: "col-span-2",
function ImageCard({ image, index, onClick }) {
  //   const sizeClasses = {
  //     tall: "row-span-2",
  //     wide: "sm:col-span-2",
  //     small: "",
  //     wides: "sm:col-span-2 sm:row-span-2",
  //   };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`relative group cursor-pointer  overflow-hidden rounded-2xl sm:rounded-3xl
  
      ${image.className || ""}`}
      style={{ minHeight: image.size === "tall" ? "420px" : "" }}
      onClick={() => onClick(image)}
    >
      {/* Image */}
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover "
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ minHeight: "inherit" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />

      {/* Pink accent top bar on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#f6466c] to-[#f28b00]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Tag */}
      <div className="absolute top-4 left-4">
        <span
          className={`text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full backdrop-blur-sm ${tagStyles[image.tagColor]}`}
        >
          {image.tag}
        </span>
      </div>

      {/* Expand icon */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
        initial={{ y: 8, opacity: 0.8 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3
          className="text-white  font-bold leading-tight mb-1"
          style={{
            fontSize:
              image.size === "wide" || image.size === "tall"
                ? "clamp(16px, 2.5vw, 22px)"
                : "15px",
          }}
        >
          {image.title}
        </h3>
        <p
          className="text-white/60 leading-snug line-clamp-2"
          style={{ fontSize: "11px" }}
        >
          {image.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({ image, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Card */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#f6466c] to-[#f28b00] z-20" />

            {/* Image */}
            <div
              className="relative w-full md:w-2/3 bg-black"
              style={{ minHeight: "300px" }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: "70vh" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent md:bg-linear-to-r" />
            </div>

            {/* Info panel */}
            <div className="flex flex-col justify-between p-8 md:w-1/3 bg-[#1a1a1a]">
              <div>
                <span
                  className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-5 ${tagStyles[image.tagColor]}`}

                >
                  {image.tag}
                </span>
                <h2
                  className="text-white font-bold leading-tight mb-4"
                  style={{

                    fontSize: "clamp(22px, 4vw, 32px)",
                  }}
                >
                  {image.title}
                </h2>
                <p
                  className="text-white/50 leading-relaxed text-sm"

                >
                  {image.description}
                </p>
              </div>

              {/* Nav */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={onPrev}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/8 border border-white/10 text-white/60 hover:bg-white/15 hover:text-white transition-all text-sm"

                >
                  <svg
                    className="w-4 h-4"
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
                  Prev
                </button>
                <button
                  onClick={onNext}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f6466c] text-white hover:bg-[#e03560] transition-all text-sm font-semibold"

                >
                  Next
                  <svg
                    className="w-4 h-4"
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
                </button>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>

          {/* Outer nav arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full bg-white/10 border border-white/15 items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
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
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full bg-white/10 border border-white/15 items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
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
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GallerySectionTwo({ className }) {
  const [selected, setSelected] = useState(null);
  const selectedIndex = images.findIndex((i) => i.id === selected?.id);

  const openImage = (img) => setSelected(img);
  const closeImage = () => setSelected(null);
  const prevImage = () =>
    setSelected(images[(selectedIndex - 1 + images.length) % images.length]);
  const nextImage = () =>
    setSelected(images[(selectedIndex + 1) % images.length]);

  return (
    <section
      className={`relative overflow-hidden py-20 bg-[#faf7f4]  ${className}`}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-150 h-150 rounded-full -top-40 -left-40 opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(246,70,108,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-125 h-125 rounded-full -bottom-24 -right-24 opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(242,139,0,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(246,70,108,0.2) 1px, transparent 1px)",
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
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#f6466c] dmsans">
                Gallery
              </span>
              <span className="w-8 h-px bg-[#f6466c]" />
            </div>
            <h2
              className="bebas leading-none text-[#1a1a1a]"
              style={{
                fontSize: "clamp(48px, 8vw, 80px)",
                letterSpacing: "0.02em",
              }}
            >
              Our Dance
              <span className="text-[#f6466c] block">Moments</span>
            </h2>
          </div>
          <p className="playfair italic text-gray-400 text-base sm:text-lg max-w-xs text-left sm:text-right pb-1">
            Every frame a story — performances, rehearsals & memories that last
            forever.
          </p>
        </motion.div>

        {/* MASONRY GRID — Desktop */}
        <div className="hidden sm:grid grid-cols-4  gap-4">
          {images.map((img, i) => (
            <ImageCard key={img.id} image={img} index={i} onClick={openImage} />
          ))}
        </div>

        {/* MOBILE GRID — stacked with alternating sizes */}
        <div className="grid sm:hidden grid-cols-2 gap-3 ">
          {images.map((img, i) => {
            const mobileSize = i === 0 || i === 4 ? "col-span-2" : "";
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${mobileSize}`}
                onClick={() => openImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full backdrop-blur-sm ${tagStyles[img.tagColor]}`}

                  >
                    {img.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3
                    className="text-white font-bold text-sm leading-tight"

                  >
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { num: "500+", label: "Students Trained", color: "pink" },
            { num: "50+", label: "Performances", color: "orange" },
            { num: "8", label: "Batch Timings", color: "pink" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-black/5 shadow-sm"
            >
              <p
                className="bebas leading-none mb-1"
                style={{
                  fontSize: "clamp(28px, 6vw, 44px)",
                  color:
                    stat.color === "pink"
                      ? "#f6466c"
                      : stat.color === "orange"
                        ? "#f28b00"
                        : "#1a1a1a",
                }}
              >
                {stat.num}
              </p>
              <p
                className="text-gray-400 dmsans"
                style={{ fontSize: "11px", letterSpacing: "0.05em" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selected}
        onClose={closeImage}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}
