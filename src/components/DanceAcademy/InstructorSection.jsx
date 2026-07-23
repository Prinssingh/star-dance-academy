"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  Music,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Rishi from "../../assets/instructors/rishi.webp";
import ShubhamSingh from "../../assets/instructors/shubhamsingh.webp";

const founders = [
  {
    name: "Rishi Singh Parihar ",
    role: "Founder, CEO & Lead Choreographer",
    image: Rishi.src,
    description:
      "With 6+ years of experience, Rishi sir has trained thousands of students, choreographed for prestigious events across the country, and also participated in Boogie Woogie Session 1.",
    stats: [
      { title: "6+ Years", subtitle: "Experience", icon: "trophy" },
      { title: "Award Winning", subtitle: "Choreographer", icon: "star" },
      { title: "4000+", subtitle: "Students", icon: "users" },
      { title: "Multi-Style", subtitle: "Specialist", icon: "music" },
    ],
  },
  {
    name: "Shubham Singh",
    role: "Co-Founder & Creative Director",
    image: ShubhamSingh.src,
    description:
      "Shubham is a professional dance educator and creative director with extensive experience in training and choreography.  ",
    stats: [
      { title: "10+ Years", subtitle: "Dance Training", icon: "trophy" },
      {
        title: "Delhi & Ahmedabad",
        subtitle: "Professional Teaching",
        icon: "map",
      },
      {
        title: "Multiple Camps",
        subtitle: "Hustle • Hood • TWB",
        icon: "users",
      },
      { title: "Creative", subtitle: "Choreography", icon: "star" },
    ],
  },
  
];

const iconMap = {
  trophy: <Trophy className="w-7 h-7 text-orange-500" />,
  users: <Users className="w-7 h-7 text-blue-500" />,
  music: <Music className="w-7 h-7 text-pink-500" />,
  star: <span className="text-2xl">⭐</span>,
};

const SWIPE_THRESHOLD = 50;
const SWIPE_VELOCITY = 500;

export default function InstructorSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((i) => (i + newDirection + founders.length) % founders.length);
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe =
      Math.abs(offset.x) > SWIPE_THRESHOLD ||
      Math.abs(velocity.x) > SWIPE_VELOCITY;
    if (swipe) {
      if (offset.x > 0) {
        paginate(-1);
      } else {
        paginate(1);
      }
    }
  };

  return (
    <section className="bg-white px-4 py-20 flex flex-col items-center select-none">
      {/* Top Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-20 h-1 mb-4 rounded-full bg-linear-to-r from-pink-500 to-orange-500"
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border shadow mb-6 bg-linear-to-br from-pink-50 to-orange-50 border-pink-300"
      >
        <Sparkles size={18} className="text-pink-500" />
        <span className="font-semibold text-sm text-gray-800">Instructor</span>
      </motion.div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Our Lead{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-orange-500">
            Instructors
          </span>
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Learn from mentors trusted by students & parents
        </p>
      </div>

      {/* PHONE FRAME */}
      <div className="w-full max-w-sm relative">
        {/* Ambient orbs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-linear-to-br from-pink-400/20 to-orange-400/20 blur-2xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-linear-to-br from-blue-400/20 to-purple-400/20 blur-2xl animate-pulse delay-1000" />

        <div className="relative bg-white rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden ring-4 ring-white/10 ring-offset-4 ring-offset-transparent">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-gray-800 rounded-b-3xl z-20 shadow-lg" />

          {/* Swipeable area */}
          <div className="touch-pan-y">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="pt-10 pb-8 px-5"
              >
                {/* Image */}
                <div className="mb-5 rounded-3xl aspect-3/2 overflow-hidden shadow-lg relative group/img">
                  <img
                    src={founders[index].image}
                    alt={founders[index].name}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                </div>

                {/* Name */}
                <div className="text-center mb-3">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {founders[index].name}
                  </h2>
                  <div className="w-16 h-1 bg-linear-to-r from-pink-500 to-orange-500 mx-auto mt-1 rounded-full" />
                  <p className="text-orange-500 font-semibold mt-1">
                    {founders[index].role}
                  </p>
                </div>

                {/* Description */}

                <p
                  className="text-gray-600 text-center text-sm leading-relaxed mb-6 bg-gray-50/50 rounded-xl
                  px-4 py-3 border line-clamp-4 border-gray-100 overflow-hidden display-webkit-box webkit-box-orient-vertical webkit-line-clamp-4"
                >
                  {founders[index].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {founders[index].stats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <StatCard
                        icon={iconMap[s.icon]}
                        title={s.title}
                        subtitle={s.subtitle}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Navigation Buttons */}
          {isDesktop && (
            <>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(-1)}
                className="absolute left-1 top-[40%] -translate-y-1/2 z-30 p-2  cursor-pointer rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(1)}
                className="absolute right-1 top-[40%] -translate-y-1/2 z-30 p-2 cursor-pointer rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </motion.button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {founders.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-pink-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl p-4 bg-linear-to-br from-orange-50 to-yellow-50 border border-black/5 shadow-sm"
    >
      <div className="mb-2">{icon}</div>
      <p className="font-bold text-gray-800 text-sm">{title}</p>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
