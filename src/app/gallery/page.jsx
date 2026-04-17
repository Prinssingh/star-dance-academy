import MainGallery from "../../components/gallery/MainGallery";
import CTASection from "../../components/CTASection";
import GalleryHeroSection from "../../components/gallery/GalleryHeroSection";
import GalleryImg from "../../components/gallery/GalleryImg ";
import VideoCarousel from "../../components/gallery/VideoCarousel";
import GallerySectionTwo from "../../components/gallery/GallerySectionTwo";

export const metadata = {
  title: "Gallery | Star Dance Academy – Dance Events, Classes & Performances",
  description:
    "Explore Star Dance Academy’s gallery featuring dance classes, stage performances, events, workshops, and student achievements in Satna.",

  keywords: [
    "Star Dance Academy gallery",
    "dance academy gallery Satna",
    "dance class photos",
    "dance performance images",
    "dance events Satna",
    "dance workshop gallery",
    "classical dance gallery",
    "hip hop dance photos",
    "contemporary dance images",
    "kids dance classes gallery",
    "dance competition photos",
    "dance rehearsal images",
    "dance academy events",
    "stage performance gallery",
    "dance studio photos",
    "best dance academy Satna",
    "dance training gallery",
    "dance students performance",
    "dance show images",
    "dance practice gallery",
    "dance achievements gallery",
    "dance cultural events",
    "dance festival photos",
    "dance institute gallery",
    "dance academy India",
  ],

  alternates: {
    canonical: "https://stardanceacademy.in/gallery",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Gallery | Star Dance Academy",
    description:
      "Discover dance performances, classes, events, and memorable moments from Star Dance Academy.",
    url: "https://stardanceacademy.in/gallery",
    siteName: "Star Dance Academy",
    images: [
      {
        url: "https://stardanceacademy.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Star Dance Academy Gallery",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Star Dance Academy Gallery",
    description:
      "Explore dance performances, classes, and events from Star Dance Academy.",
    images: ["https://stardanceacademy.in/og-image.png"],
  },
};

function Gallery() {
  return (
    <div>
      <GalleryHeroSection />

      <VideoCarousel />
      <MainGallery />
      <GalleryImg />
      <GallerySectionTwo />
      <CTASection
        heading="Ready to Start Your"
        subtext=" Join our vibrant community and transform your passion into rhythm.
              From classical dance to energetic Zumba and unforgettable wedding
              choreography – your perfect dance experience awaits."
      />
    </div>
  );
}

export default Gallery;
