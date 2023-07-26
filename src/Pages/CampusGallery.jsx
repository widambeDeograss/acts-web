import { Typography } from "@material-tailwind/react";
import React from "react";
import PageHeroSection from "../components/PageHeroSection";
import InfiniteImageCarousel from "../components/InfiniteImageCarosel";

function CampusGallery() {
  const images = [
    "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/044.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/046.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/044.webp",
    "https://tecdn.b-cdn.net/img/new/standard/city/046.webp",
    // Add more image URLs here
  ];
  return (
    <div>
      <PageHeroSection title="Campus Gallery" />
      <Typography variant="h2" className="mt-5 font-semibold">
        Join Acts Today
      </Typography>
      <Typography variant="h2" className=""></Typography>
      <Typography
        variant="lead"
        className=" mx-auto text-center w-2/3  mt-2 font-light mb-6"
      >
        Acts exists to develop God’s ministers who are capable of pioneering
        indigenous churches with the potential to grow spiritually, numerically,
        and geographically in the power of the Holy Spirit, thus fulfilling the
        Great commission
      </Typography>
      
          <div className="flex justify-center items-center mb-6 ">
            <InfiniteImageCarousel images={images} />
          </div>
      
   
    </div>
  );
}

export default CampusGallery;
