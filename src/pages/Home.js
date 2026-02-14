import { useEffect, useState } from "react";
import Introduction from "../components/Introduction/introduction";
import About_Myself from "../components/About_Myself/about_myself";
import ContactMe from "../components/Contact_Me/contact_me";
import Products from '../components/Products/products';
import Navbar from '../components/Navbar/navbar';
import Footer from "../components/Footer/footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Hand Casting in Regina | Memories in Mold</title>
                <meta
                    name="description"
                    content="Memories in Mold offers custom hand casting in Regina, Saskatchewan. Perfect for families, couples, and newborn keepsakes."
                />
                <meta
                    name="keywords"
                    content="hand casting Regina, family hand mold, couples hand mold, baby hand casting, plaster casting"
                />

                <meta property="og:title" content="Memories in Mold – Hand Casting in Regina" />
                <meta property="og:description" content="Professional hand casting services in Regina. Perfect for couples, families, and newborn keepsakes." />
                <meta property="og:image" content="https://memoriesinmold.ca/images/hand-casting.jpg" />
                <meta property="og:url" content="https://memoriesinmold.ca/" />
                <meta name="twitter:card" content="summary_large_image" />

                <link rel="canonical" href="https://memoriesinmold.ca/" />

                <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Memories in Mold",
                  "image": "https://memoriesinmold.ca/images/logo.png",
                  "description": "Create lasting memories with custom hand casting in Regina, Saskatchewan.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Regina",
                    "addressRegion": "SK",
                    "addressCountry": "CA"
                  },
                  "telephone": "+1-306-535-1226",
                  "url": "https://memoriesinmold.ca"
                }
                `}
                </script>

                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Couples Hand Casting",
                    "image": "https://memoriesinmold.ca/images/couples-casting.jpg",
                    "description": "Beautiful couples hand casting keepsake in Regina, Saskatchewan.",
                    "brand": {
                        "@type": "Brand",
                        "name": "Memories in Mold"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "CAD",
                        "price": "165.00",
                        "availability": "https://schema.org/InStock",
                        "url": "https://memoriesinmold.ca/#products"
                    }
                }
                `}
                </script>
            </Helmet>

            <div className="home">
                <Navbar />
                <Introduction />
                <About_Myself />
                <Products />
                <ContactMe />
            </div>

            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="false">
                Memories in Mold offers professional hand casting in Regina, Saskatchewan. 
                Services include couples hand molds, baby hand molds, baby feet molds and family casting keepsakes. 
                Affordable, high-quality hand casting for special occasions, anniversaries, and newborn memories.
            </div>
        </>
    )
};

export default Home;