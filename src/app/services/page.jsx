import FunctionChoreographyInfo from "../../components/functionwork/FunctionChoreographyInfo";

import FunctionVideoSection from "../../components/functionwork/FunctionVideoSection";

import ServicesHeroSection from "../../components/functionwork/ServicesHeroSection";
import CTASection from "../../components/CTASection";

import FunctionCards from "../../components/functionwork/FunctionCard";
export const metadata = {
  title: "Dance Classes & Event Services | Star Dance Academy Satna",
  description:
    "Explore professional dance classes and event services at Star Dance Academy in Satna. We offer Hip Hop, Contemporary, Bollywood, Kathak, Freestyle & Zumba classes along with wedding choreography and performances for school, college, corporate, and personal events across Satna and nearby cities.",

  keywords: [
    "Star Dance Academy services",
    "dance classes in Satna",
    "professional dance classes Satna",
    "hip hop dance classes Satna",
    "bollywood dance classes Satna",
    "contemporary dance classes Satna",
    "kathak dance classes Satna",
    "classical dance classes Satna",
    "freestyle dance classes Satna",
    "zumba classes in Satna",
    "dance training institute Satna",
    "dance academy services Satna",
    "wedding dance choreography Satna",
    "wedding choreography services Satna",
    "sangeet dance choreography Satna",
    "bride groom dance choreography Satna",
    "event dance services in Satna",
    "school event dance performance Satna",
    "college event dance group Satna",
    "corporate event dance performance Satna",
    "personal event dance choreography Satna",
    "professional dance choreographer Satna",
    "dance group for events in Satna",
    "kids dance classes in Satna",
    "dance classes for adults in Satna",
    "dance classes with flexible timings Satna",
    "premium dance studio services Satna",
    "award winning dance academy services",
    "dance academy in Rewa",
    "dance academy in Maihar",
    "dance academy in Nagod",
    "dance academy in Rampur",
  ],

  openGraph: {
    title: "Dance Classes & Event Services | Star Dance Academy Satna",
    description:
      "Star Dance Academy offers professional dance classes and event choreography services in Satna, including wedding, school, college, and corporate events.",
    type: "website",
    siteName: "Star Dance Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Star Dance Academy Services Satna",
      },
    ],
  },

  alternates: {
    canonical: "https://stardanceacademy.in/services",
  },
};
export default function FunctionWork() {
  return (
    <div>
      <ServicesHeroSection />

      <FunctionChoreographyInfo />
      <FunctionCards />
      <FunctionVideoSection />
     
      <CTASection
        heading=" Book Your Family"
        subtext="   Let's create unforgettable moments together. Transform your special celebration with professional choreography that brings joy, elegance, and magic to every step.
          ."
      />
    </div>
  );
}
