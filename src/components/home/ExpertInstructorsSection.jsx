"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  AwardIcon,
} from "lucide-react";
import Rishi from "../../assets/instructors/rishi.webp";
import ShubhamSingh from "../../assets/instructors/shubhamsingh.webp";
import SamSingh from "../../assets/instructors/samrajput.crop.jpg";
import ankitsir from "../../assets/instructors/ankitsir.webp";
import aaditya from "../../assets/instructors/aditya.png";
import anurag from "../../assets/instructors/anurag.png";

/* ================= INSTRUCTOR CARD ================= */

const ExpertInstructorCard = ({
  image,
  name,
  shortBio,
  fullBio,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleToggle = () => {
    if (!isExpanded) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 150);
    }
    setIsExpanded((prev) => !prev);
  };

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.65 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 10,
        mass: 1.2,
      }}
      whileHover={{ y: -6 }}
      className="
        bg-white rounded-xl overflow-hidden
        
        
         sm:px-8 lg:px-0
        shadow-sm hover:shadow-xl
        transition-all duration-300 
      "
    >
      {/* IMAGE */}
      <div className="w-full h-55 sm:h-60 lg:h-62.5 overflow-hidden bg-gray-100 ">
        <img
          src={image}
          alt={name}
          className="
      w-full h-full
      object-cover sm:object-cover lg:object-contain
      transition-transform duration-500
    "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{name}</h3>
        {/* <p className="text-gray-600 text-sm mb-2">{role}</p> */}

        {/* SOCIAL
        <div className="flex gap-3 mb-2">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            return (
              Icon && (
                <a
                  key={platform}
                  href={url}
                  className="text-gray-400 hover:text-primary transition"
                >
                  <Icon size={20} />
                </a>
              )
            );
          })}
        </div> */}

        {/* BIO */}
        <p className="text-sm text-gray-600 line-clamp-2">{shortBio}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t">
                {fullBio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BUTTON */}
        {/* <button
          onClick={handleToggle}
          className="
            mt-6 w-full
            hover:bg-primary text-white
            py-3 rounded
            flex items-center justify-center gap-2
            uppercase text-xs sm:text-sm tracking-wide
            transition
          "
          style={{
            background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
          }}
        >
          {isExpanded ? "Close" : "Expand"}
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button> */}
      </div>
    </motion.div>
  );
};

/* ================= MAIN SECTION ================= */

const ExpertInstructorsSection = () => {
  const instructors = [
    {
      image: Rishi.src,
      name: "Rishi Singh Parihar",
      // role: "Principal Ballet Instructor",
      shortBio:
        "Boogie Woogie Session 1 specialist with 8+ years of professional teaching and stage performance experience.",
      fullBio:
        "Professionally trained dancer with a strong foundation in classical techniques and international exposure. Has performed across multiple stages, guided aspiring dancers, and helped students grow into confident, performance-ready artists.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image: ShubhamSingh.src,
      name: "Subham Singh",
      // role: "Contemporary Director",
      shortBio:
        "Dance professional with 4 years of practical training and performance experience.",

      fullBio:
        "Received professional dance training through multiple workshops and intensive camps in Delhi and Ahmedabad, Gujarat. Participated in renowned platforms such as Hussle Hood, Jashn-e-Kala, Rolls of Dancing, and TWB.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image: anurag.src,
      name: "Anurag Rajak",
      // role: "Hip Hop Instructor",
      shortBio:
        "Experienced hip-hop dancer with a strong background in street dance styles.",

      fullBio:
        "A dedicated dance professional with hands-on experience in hip-hop and street dance. Actively involved in performances, training sessions, and creative collaborations.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image: ankitsir.src,
      name: "Ankit Rawat",
      // role: "Hip Hop Instructor",
      shortBio:
        "Highly skilled hip-hop dancer with expertise in street dance styles.",

      fullBio:
        "An accomplished dance professional with extensive experience in hip-hop and street dance. Has participated in high-level competitions, stage performances, and creative collaborations with fellow artists.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image: SamSingh.src,
      name: "Sam Singh Rajput",
      // role: "Hip Hop Instructor",
      shortBio:
        "Professionally trained dancer with 4 years of advanced learning in Delhi.",

      fullBio:
        "Holds a professional Hip-Hop diploma from a recognized Delhi dance studio. Has been selected for major dance camps and platforms such as Hustle Hood, Dance Deewane Season 03, and Jashn-e-Kala, gaining valuable stage and performance experience.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image: aaditya.src,
      name: "Aditya Verma",
      // role: "Hip Hop Instructor",
      shortBio:
        "Professionally trained dancer with 4 years of advanced learning in Delhi. Finilist in Dance Master india Season 4",

      fullBio:
        "A passionate dance professional focused on hip-hop and street dance training. Known for energetic teaching methods and helping students build confidence, rhythm, and performance skills.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <section className="py-20 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))",
              borderColor: "var(--color-primary)",
            }}
          >
            <AwardIcon size={18} style={{ color: "var(--color-primary)" }} />
            <span className="text-sm font-semibold">Instructors</span>
          </motion.div>

          <h2 className="text-4xl  md:text-6xl font-bold mb-4">
            Expert <span className="text-primary">Instructors</span>
          </h2>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Learn from world-class professionals shaping the next generation of
            dancers.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            justify-items-center
          "
        >
          {instructors.map((item, index) => (
            <ExpertInstructorCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInstructorsSection;
