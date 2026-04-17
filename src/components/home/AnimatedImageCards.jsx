"use client";

import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { useEffect, useState } from "react";

export default function AnimatedImageCards() {
  const [x, setX] = useState(0);

  const images = [
    {
      src: "/assets/danceStyles/hip_hop.png",
      rotate: 6,
      title: "Hip Hop",
    },
    {
      src: "/assets/danceStyles/bollywood.png",
      rotate: -10,
      title: "Bollywood",
    },
    {
      src: "/assets/danceStyles/contemporary_dance.png",
      title: "Contemporary",
    },
    {
      src: "/assets/danceStyles/locking.png",
      rotate: -10,
      title: "Locking",
    },
    {
      src: "/assets/danceStyles/popping.png",
      rotate: 6,
      title: "Popping",
    },
    {
      src: "/assets/danceStyles/house.png",
      rotate: -10,
      title: "House",
    },
    {
      src: "/assets/danceStyles/jazz_funk.png",
      rotate: 6,
      title: "Jazz Funk",
    },
    {
      src: "/assets/danceStyles/experimental.png",
      rotate: -10,
      title: "Experimental",
    },
    {
      src: "/assets/danceStyles/robotics.png",
      rotate: 6,
      title: "Robotics",
    },

    {
      src: "/assets/danceStyles/cupple_dance.png",
      rotate: 6,
      title: "Couple Dance",
    },
    {
      src: "/assets/danceStyles/krump.png",
      rotate: -10,
      title: "Krump",
    },
  ];

  // ✅ PURE AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => {
        if (prev <= -images.length * 340) {
          return 0;
        }
        return prev - 1.2; // speed
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col py-20 items-center bg-gray-100 gap-14">
      {/* Heading */}
      <div className="text-center px-6">
        <div className="w-20 h-1 mx-auto mb-5 rounded-full bg-linear-to-r from-primary to-secondary" />

        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5
                        bg-linear-to-br from-primary/10 to-secondary/10 border-primary"
        >
          <Images size={18} className="text-primary" />
          <span className="text-sm font-semibold text-zinc-800">Styles</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-3 text-zinc-900">
          Dance <span className="text-primary">Styles</span>
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Capturing moments of grace, energy, and celebration
        </p>
      </div>

      {/* AUTO SLIDER */}
      <div className="w-full max-w-7xl  px-6">
        <motion.div style={{ x }} className="flex gap-12">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative group min-w-[300px] ">
              <motion.div
                className="relative bg-white rounded-full overflow-hidden "
                style={{ rotate: img.rotate }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <motion.img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 p-6 ml-17">
                    <h3 className="text-white text-2xl font-bold">
                      {img.title}
                    </h3>
                    <div className="w-12 h-1 mt-2 rounded-full bg-linear-to-r from-primary to-secondary" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
