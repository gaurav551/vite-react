import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Play,
  Code,
  Zap,
  Shield,
  BarChart,
  Link2,
  Server,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet"; // Add this import for SEO management


const Home = () => {
  // Create refs for each section
  const BASE_URL = `${window.location.protocol}//${window.location.host}/player/`;
  const APP_NAME = import.meta.env.VITE_APP_NAME;
  const APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN;

  const embedRef = useRef(null);
  const homeref = useRef(null);

  const location = useLocation();
  // SEO metadata
  const pageTitle = `${APP_NAME} - Premium Video Embedding Solution with Minimal Ads`;
  const pageDescription =
    "Seamless video embedding service with high-performance streaming and just one ad per movie or TV episode. Integrate our player into your website easily.";
  const keywords =
    "video embedding, movie embedding,tv series embedding, streaming solution, minimal ads, movie player, TV player, video API";
  const canonicalUrl = `${APP_DOMAIN}`; // Replace with your actual domain
  // This effect handles initial loading and URL hash changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${canonicalUrl}/vidplay-og-image.jpg`}
        />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content={`${canonicalUrl}/vidplay-twitter-image.jpg`}
        />

        {/* Additional SEO metadata */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VidPlay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "${APP_NAME}",
              "applicationCategory": "VideoPlayer",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "${pageDescription}"
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <div id="home" ref={homeref} className="max-w-7xl mx-auto px-6 py-20">
       
      {/* CTA Section */}
     </div>
    </div>
  );
};

export default Home;
