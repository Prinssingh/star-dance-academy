"use client";
import React from "react";
import TestimonialsCarousel from "../home/TestimonialsCarousel";



const TrustPage = () => {
  return (
    <section
      className="relative w-full min-h-screen text-white flex items-center justify-center px-6 md:px-16 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/assets/background_testimonials.webp')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 w-full max-w-6xl">
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TrustPage;