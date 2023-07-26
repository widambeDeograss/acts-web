import React from "react";
import { Typography } from "@material-tailwind/react";

const ImageSlider = ({ images }) => {
  const imageWrapperRef = React.useRef(null);
  const imageContainerRef = React.useRef(null);
  const imagesRef = React.useRef(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const imageWrapperWidth = imageWrapperRef.current.clientWidth;
    const imagesWidth = imagesRef.current.clientWidth;

    const animateScroll = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition >= imagesWidth ? 0 : newPosition;
      });
    };

    const interval = setInterval(animateScroll, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-72 relative overflow-hidden">
      <div
        ref={imageWrapperRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div
          ref={imageContainerRef}
          className="flex gap-3 absolute top-0 left-0"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              ref={index === 0 ? imagesRef : null}
              className="w-72 h-full flex-shrink-0"
            >
              <figure className="relative ">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
                <figcaption className="absolute bottom-2 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-2 px-1 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                  <div>
                    <Typography variant="h7" color="blue-gray">
                      Sara Lamalo
                    </Typography>
                   
                  </div>
          
                </figcaption>
              </figure>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
{/* <div class="grid grid-cols-3 gap-4">
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="300"
    src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="500"
    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="300"
    src="https://tecdn.b-cdn.net/img/new/standard/city/045.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="500"
    src="https://tecdn.b-cdn.net/img/new/standard/city/046.webp"
    class="rounded" />
</div> */}