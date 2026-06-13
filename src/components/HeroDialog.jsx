"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroDialog({ isOpen, setIsOpen }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dancestyle: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `
🎭 *New Dance Academy Enrollment*

 Name: ${formData.name}
 Age: ${formData.age}
 Gender: ${formData.gender}
 Dance Style: ${formData.dancestyle}
 Phone: ${formData.phone}

I'm interested in joining the Dance Academy.
  `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/+916264249659?text=${encodedMessage}`;
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setLoading(false);
    }, 1000);

    window.open(whatsappURL, "_blank");

    // Optional: reset form after submit
    setFormData({
      name: "",
      age: "",
      gender: "",
      dancestyle: "",
      phone: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed   inset-0 flex items-center justify-center z-50 px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 text-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              {/* Modal Content */}
              <h2 className="text-3xl font-bold mb-4">
                Enroll in <span className="text-primary">Dance Academy</span>
              </h2>

              <p className="text-gray-400 mb-6">
                Fill your details and begin your dance journey today.
              </p>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:border-primary outline-none"
                />

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:border-primary outline-none"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-50 lg:w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:border-primary outline-none"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="dancestyle"
                  value={formData.dancestyle}
                  onChange={handleChange}
                  placeholder="Dance Type"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:border-primary outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    field.onChange(e.currentTarget.value);
                  }}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:border-primary outline-none"
                />

                <motion.button
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  whileTap={!loading ? { scale: 0.95 } : {}}
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Submit Enrollment"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
