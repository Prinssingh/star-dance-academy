import CTASection from "../../components/CTASection";
import DanceAcademyAbout from "../../components/DanceAcademy/DanceAcademyAbout";
import DanceAcademyFeatures from "../../components/DanceAcademy/DanceAcademyFeatures";
import DanceAcademyHeader from "../../components/DanceAcademy/DanceAcademyHeader";
import DanceClassesSection from "../../components/DanceAcademy/DanceClassesSection";
import InstructorSection from "../../components/DanceAcademy/InstructorSection";
export const metadata = {
  title: "About Star Dance Academy | Award Winning Dance Academy in Satna",
  description:
    "Learn about Star Dance Academy, an award-winning dance academy in Satna with experienced instructors, premium studio ambience, personalized dance lessons, and performance opportunities. Trusted for dance classes, wedding choreography, and event performances across Satna and nearby cities.",

  keywords: [
    "about Star Dance Academy",
    "Star Dance Academy Satna",
    "best dance academy in Satna",
    "award winning dance academy in Satna",
    "professional dance academy Satna",
    "experienced dance instructors in Satna",
    "dance academy with certified trainers",
    "dance academy with performance opportunities",
    "premium dance studio in Satna",
    "dance academy for kids in Satna",
    "dance academy for adults in Satna",
    "personalized dance lessons Satna",
    "dance academy with flexible timings",
    "hip hop dance academy Satna",
    "bollywood dance academy Satna",
    "contemporary dance academy Satna",
    "kathak dance academy Satna",
    "classical dance training Satna",
    "freestyle dance academy Satna",
    "zumba dance academy Satna",
    "wedding choreography academy Satna",
    "event dance academy in Satna",
    "school event dance academy Satna",
    "college event dance academy Satna",
    "corporate event dance group Satna",
    "dance plus trained choreographer",
    "dance india dance academy Satna",
    "boogie woogie dance academy",
    "professional dance training institute Satna",
    "top dance academy in Satna Madhya Pradesh",
    "dance academy in Rewa",
    "dance academy in Maihar",
    "dance academy in Nagod",
    "dance academy in Rampur",
  ],

  openGraph: {
    title: "About Star Dance Academy | Leading Dance Academy in Satna",
    description:
      "Discover Star Dance Academy, Satna’s trusted dance academy known for expert trainers, award-winning performances, and professional dance education.",
    type: "website",
    siteName: "Star Dance Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Star Dance Academy Satna",
      },
    ],
  },
  alternates: {
    canonical: "https://stardanceacademy.in/about",
  },
};
export default function Page() {
  return (
    <div>
      <DanceAcademyHeader />
      <DanceAcademyAbout />
      <DanceAcademyFeatures />
      <DanceClassesSection />
      <InstructorSection />
      {/* <CTAabout /> */}
      <CTASection
        heading="Join Our Dance"
        subtext="  Start your journey with expert mentors and discover the dancer
              within you."
      />
    </div>
  );
}
