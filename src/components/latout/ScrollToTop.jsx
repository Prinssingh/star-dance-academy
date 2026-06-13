// ScrollToTop.jsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";



const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); //  smooth REMOVE
  }, [pathname]);

  return null;
};

export default ScrollToTop;
