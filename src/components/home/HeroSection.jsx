"use client";
import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import CountUP from "../latout/CountUP";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import ZigZagText1 from "../latout/ZigZagText1";
import HeroDialog from "../HeroDialog";
import HeroPicOne from "../../assets/thume-showcase.webp"
import HeroPicTwo from "../../assets/gallarytwo/imgsix.jpg"
import HeroPicThree from "../../assets/thume-showcase.png"

const images = [
  "/assets/hero/dance-1.webp",
  HeroPicThree.src,
  HeroPicOne.src,
  HeroPicTwo.src,
  "/assets/hero/dance-5.webp",
];

const DanceAcademyHero = () => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();
  const handleEnrollButton = () => {
    router.push("enroll-now");
  };
  return (
    <div
      className="relative
    min-h-full sm:min-h-full
    text-white
    overflow-hidden
    bg-black

    px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
    py-1   sm:py-12 md:py-16 lg:py-2
  "
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`
        absolute inset-0
        bg-center bg-no-repeat mb-20 lg:mb-0
        transition-opacity duration-1000
        ${index === current ? "opacity-100" : "opacity-0"}

        bg-contain sm:bg-cover 
      `}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}

        <div className="absolute inset-0  bg-linear-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Decorative Elements */}

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-1"></nav>

      {/* Main Content */}
      <div className="relative z-10 px-4  lg:px-16  flex flex-col justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-7xl w-full ">
          <div className="max-w-2xl ">
            <div
              className="mb-6 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            ></div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              DANCE
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                ACADEMY
              </span>
            </h1>

            <p
              className="text-white text-lg md:text-xl mb-10 leading-relaxed max-w-xl opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              From ballet to hip hop, modern to classical, we will help you
              become your inner artist.
            </p>

            <div
              className="flex flex-wrap  items-center gap-4 opacity-0  animate-fadeInUp"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <div className="flex cursor-pointer items-center justify-center gap-4 sm:gap-6 flex-nowrap">


                {/* Enroll Now */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(true)}
                  // onClick={handleEnrollButton}
                  className="
      relative
      flex items-center justify-center
      gap-2 sm:gap-3
      px-4 sm:px-6 lg:px-8
      py-3 sm:py-4
      rounded-full border-2 border-primary
      text-white
      whitespace-nowrap cursor-pointer
      text-sm sm:text-base
      font-semibold
      shadow-xl
    "
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  }}
                >
                  <span className="leading-none">
                    <ZigZagText1 text="Enroll Now" />
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}

      <div
        className="relative z-10 px-8 lg:px-16 pb-8   opacity-0  animate-fadeInUp"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <div
          className="
  flex flex-wrap items-center justify-between gap-8
  border-t 
  pt-0 lg:pt-8
  border-transparent sm:border-t
"
        >
          <div className="flex items-center gap-12">
            <div>
              <div className="text-xl lg:text-2xl font-bold text-primary">
                <CountUP end={500} />+
              </div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-primary">
                <CountUP end={6} />+
              </div>
              <div className="text-sm text-gray-400">Instructors</div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-primary">
                <CountUP end={12} />+
              </div>
              <div className="text-sm text-gray-400">Dance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <HeroDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DanceAcademyHero;


