"use client";
import { AnimatePresence, hover, motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ShieldCheck,
  FileText,
  SquarePlay,
} from "lucide-react";
import { FaWhatsapp, FaInstagram,FaYoutube } from "react-icons/fa";



import { useEffect, useState } from "react";
import pic1 from "../../assets/gallarytwo/imgtwo.jpg";
import pic2 from "../../assets/footer/pic2.jpg";
import pic3 from "../../assets/thume-showcase.webp";
import { useRouter } from "next/navigation";
import TFPLogo from "../../assets/tfp-logo.png"
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  const handleClickAdd = () => {
    router.push("/address");
  };

  /* BACKGROUND IMAGES */
  const bgImages = [pic1, pic2, pic3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Zumba", path: "/zumba" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      hover: "hover:bg-pink-500",
      label: "Instagram",
      href: "https://www.instagram.com/star_dance_and_fitness_academy",
    },
    {
      icon: FaWhatsapp,
      hover: "hover:bg-green-500",
      label: "WhatsApp",
      href: "https://wa.me/+916264249659",
    },

    {
      icon: FaYoutube,
      label: "YouTube",
      hover: "hover:bg-red-500",
      href: "https://www.youtube.com/@rishisinghparihar4647",
    },
  ];
 


const footerLinks = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    icon: ShieldCheck,
  },
  {
    label: "Terms of Service",
    path: "/terms-of-service",
    icon: FileText,
  },
];
  return (
    <footer className="relative overflow-hidden text-gray-100">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center min-h-105"
            style={{ backgroundImage: `url(${bgImages[current].src})` }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ABOUT */}
          <div>
            <h3 className="text-2xl font-bold text-primary">
              Star Dance Academy
            </h3>
            <p className="text-sm mt-3">
              Empowering dancers of all ages with passion, precision, and
              performance. Join us to discover your rhythm and express your
              artistry.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <span
                    onClick={() => router.push(link.path)}
                    className="cursor-pointer hover:text-primary transition"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <Link href={"tel: +91 6264249659"} className="flex gap-2">
                <Phone size={16} /> +91 6264249659
              </Link>
              <Link
                href={"mailto:info@stardanceacademy.in"}
                className="flex gap-2"
              >
                <Mail size={16} /> info@stardanceacademy.in
              </Link>
              <Link
                href="https://www.google.com/maps/search/2sd+floor+nearby,+Vind+marriage,+Garden+bus+stand,+Satna+MP/@24.5733513,80.8433518,17z?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <div
                  onClick={handleClickAdd}
                  className="flex gap-2 cursor-pointer"
                >
                  <MapPin size={24} />
                  <span>
                    2nd floor above Hidden Cafe, next to Vidya Marriage Garden{" "}
                    <br />
                    near Bus Stand. Satna (m.p)
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    className={`w-10 h-10 border rounded-full flex items-center justify-center hover:text-primary transition`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR (FIXED) ================= */}
        <div className="mt-10 pt-6 border-t border-white/20">
          <div
            className="
              flex flex-col md:flex-row
              items-center justify-between
              gap-4
              text-sm
            "
          >
            {/* LEFT */}
            <p className="whitespace-nowrap shrink-0">
              © 2026{" "}
              <span className="text-primary font-semibold">
                Star Dance Academy
              </span>{" "}
              All rights reserved.
            </p>

            {/* CENTER */}
            <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-2 justify-center">
              {footerLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="flex items-center gap-2 whitespace-nowrap hover:text-primary transition"
                  >
                    {Icon && <Icon size={20} />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
              <span>Designed & Developed By</span>
              <a
                href="https://www.tfptechnologies.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={TFPLogo.src}
                    alt="TFP Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <span className="text-primary font-semibold">
                  TFP Technologies
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* ===================================================== */}
      </div>
    </footer>
  );
}
