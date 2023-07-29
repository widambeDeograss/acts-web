import { Typography, Card, CardHeader } from "@material-tailwind/react";
import React from "react";
import PageHeroSection from "../components/PageHeroSection";
import InfiniteImageCarousel from "../components/InfiniteImageCarosel";
import acts_tour from '../assets/acts_tours.mp4'
import pe2 from '../assets/img/DJI_0963.jpeg';
import pe3 from '../assets/img/DJI_0964.jpeg';
import pe4 from '../assets/img/DJI_0965.jpeg';
// import pe5 from '../assets/img/DJI_0966.JPG';
// import pe6 from '../assets/img/DJI_0967.JPG';
import pe7 from '../assets/img/DJI_0973.jpeg';
import pe8 from '../assets/img/DJI_0974.jpeg';
import pe9 from '../assets/img/DJI_0981-min.JPG';
// import ADMIN from '../assets/DJI_0962.JPG'
import pl1 from '../assets/img/_MG_9787.jpg';
import pl2 from '../assets/img/_MG_9791.jpg';
import pl3 from '../assets/img/_MG_9704.jpg';
import pl4 from '../assets/img/_MG_9706.jpg';
import pl5 from '../assets/img/_MG_9709.jpg';
import pl6 from '../assets/img/_MG_9710.jpg';
import pl7 from '../assets/img/_MG_9779.jpg';
import pl8 from '../assets/img/_MG_9770.jpg';

const itemData = [

  // {
  //   title: '',
  //   img: pe2,
  //   author: 'ACTS Ground',
  // },
  // {
  //   title: '',
  //   img: pe3,
  //   author: 'ACTS Ground',
  // },
  // {
  //   title: '',
  //   img: pe4,
  //   author: 'ACTS Ground',
  // },
  // {
  //   img: pl1,
  //   title: '',
  //   author: 'ACTS Canteen',
  // },
  // {
  //   img: pe7,
  //   title: '',
  //   author: 'ACTS Ground',
  // },
  // {
  //   img: pe8,
  //   title: '',
  //   author: 'ACTS Ground',
  // },
  {
    img: pe9,
    title: '',
    author: 'ACTS Ground',
  },
  {
    img: pl2,
    title: '',
    author: 'ACTS Canteen',
  }, 
  {
    img: pl3,
    title: '',
    author: 'ACTS Hostel',
  },
  
  // {
  //   img: pl6,
  //   title: '',
  //   author: 'ACTS Library',
  // },
  
  {
    img: pl7,
    title: '',
    author: 'ACTS Library',
  },
  
  {
    img: pl8,
    title: '',
    author: 'ACTS Library',
  },
  
  {
    img: pe9,
    title: '',
    author: 'ACTS Ground',
  },


 
];

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
      <PageHeroSection title="Campus Tour" />
      <Typography variant="h2" className="mt-5 font-semibold">
        Join Acts Today
      </Typography>
      <Typography variant="h2" className=""></Typography>
      <Typography
        variant="lead"
        className=" mx-auto text-center w-2/3  mt-2 font-light mb-6 leading-snug"
      >
        Acts exists to develop God’s ministers who are capable of pioneering
        indigenous churches with the potential to grow spiritually, numerically,
        and geographically in the power of the Holy Spirit, thus fulfilling the
        Great commission
      </Typography>
      
          <div className="flex justify-center items-center  ">
            <InfiniteImageCarousel images={itemData} />
          </div>
      
      <div className="mx-auto mb-8 w-11/12">
        <Typography variant="h4" className="mb-1 font-semibold text-left">Acts Tour </Typography>
      <video className="h-full w-full rounded-lg" controls autoPlay muted>
      <source src={acts_tour} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
      
   
    </div>
  );
}

export default CampusGallery;
