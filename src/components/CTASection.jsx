"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ZigZagText1 from "./latout/ZigZagText1";
import HeroDialog from "./HeroDialog";

const CTASection = ({
  heading = "Ready to Start Your Dance Journey?",
  subtext = "Join our vibrant community and transform your passion into rhythm. From classical dance to energetic Zumba and unforgettable wedding choreography – your perfect dance experience awaits.",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnrollButton = () => {
    setIsOpen(true);
  };

  return (
    <section className="relative overflow-hidden py-22 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-black/20"
        />

        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:gap-12"
        >
          {/* Left Side */}
          <div className="lg:max-w-2xl">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
            >
              {heading}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {subtext}
            </motion.p>
          </div>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mt-10 lg:mt-0 justify-center lg:justify-start lg:shrink-0"
          >
            <motion.button
              onClick={handleEnrollButton}
              whileHover={{
                scale: 1.08,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-4 cursor-pointer py-2 text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
              }}
            >
              <span className="relative z-10 flex items-center px-6 py-2.5 gap-2 font-semibold">
                <ZigZagText1 text="Enroll Now" />

                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>

              {/* Glow Effect */}
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dialog */}
      <HeroDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default CTASection;
