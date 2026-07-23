"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, X } from "lucide-react";
import { FaWhatsapp, FaInstagram, } from "react-icons/fa";

export default function FixedButtons() {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/916264249659",
      color: "from-green-400 to-emerald-500",
      hoverColor: "hover:from-green-500 hover:to-emerald-600",
      iconColor: "text-white",
      delay: 0.1,
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/star_dance_and_fitness_academy",
      color: "from-pink-500 via-red-500 to-yellow-500",
      hoverColor: "hover:opacity-90",
      iconColor: "text-white",
      delay: 0.2,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>

      {/* Fixed Button Container */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        {/* Social Buttons */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50, scale: 0.5 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        delay: social.delay,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: 50,
                      scale: 0.5,
                      transition: {
                        duration: 0.2,
                        delay: (socialLinks.length - index) * 0.05,
                      },
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${social.color} ${social.hoverColor} shadow-lg hover:shadow-2xl flex items-center justify-center overflow-hidden`}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />

                    <Icon
                      size={20}
                      className={`${social.iconColor} relative z-10`}
                    />

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl bg-white/30" />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-2xl overflow-hidden"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {open ? <X size={24} /> : <Share2 size={24} />}
          </motion.div>

          {open && (
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-full bg-white"
            />
          )}
        </motion.button>
      </div>
    </>
  );
}
