import BlogIntroSection from "../../components/blog/BlogIntroSection";
import BlogHeroSection from "../../components/blog/BlogHeroSection";
import React from "react";
import CTASection from "../../components/CTASection";
import OurBlog from "../../components/blog/OurBlog";
import FeaturedArticle from "../../components/blog/FeaturedArticle";

export const metadata = {
  title: "Blog | Star Dance Academy – Dance Tips, Training & Industry Insights",
  description:
    "Read the Star Dance Academy blog for dance tips, training guides, fitness insights, choreography trends, and updates from the dance world in Satna and India.",

  keywords: [
    "Star Dance Academy blog",
    "dance blog India",
    "dance academy blog Satna",
    "dance tips for beginners",
    "dance training tips",
    "dance fitness blog",
    "hip hop dance tips",
    "contemporary dance guide",
    "bollywood dance blog",
    "classical dance articles",
    "kids dance training tips",
    "dance practice tips",
    "dance choreography ideas",
    "dance learning blog",
    "professional dance training blog",
    "dance career guidance",
    "dance academy updates",
    "dance events news",
    "dance workshops blog",
    "dance competitions tips",
    "dance instructor advice",
    "best dance academy India blog",
    "dance lifestyle blog",
    "dance health and fitness",
    "dance motivation articles",
  ],

  alternates: {
    canonical: "https://stardanceacademy.in/blog",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Blog | Star Dance Academy satna",
    description:
      "Explore dance tips, training guides, choreography ideas, and expert insights from Star Dance Academy.",
    url: "https://stardanceacademy.in/blog",
    siteName: "Star Dance Academy",
    images: [
      {
        url: "https://stardanceacademy.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Star Dance Academy Blog",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Star Dance Academy Blog",
    description:
      "Dance tips, training guides, choreography ideas, and updates from Star Dance Academy.",
    images: ["https://stardanceacademy.in/og-image.png"],
  },
};

function BlogPage() {
  return (
    <div>
      <BlogHeroSection />
      <BlogIntroSection />
      <OurBlog />
      <FeaturedArticle />

      <CTASection
        heading=" Want to learn dance"
        subtext="   Join our vibrant dance community and transform your passion into artistry. From weddings to fitness, we've got you covered!
           ."
      />
    </div>
  );
}

export default BlogPage;
