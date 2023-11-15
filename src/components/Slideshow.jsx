import { useState, useEffect } from "react";

export default function Slideshow() {
  const images = [
    { url: "src/assets/181994333_1883185495167039_3378746544883127820_n.jpg" },
    { url: "src/assets/123434076_1727404487411808_6692900620356230503_n.jpg" },
    { url: "src/assets/188771268_1898763246942597_110904102917328419_n.jpg" },
    { url: "src/assets/122959147_1727404594078464_1013389762917053382_n.jpg" },
    { url: "src/assets/123225339_1727404550745135_6616891483531086405_n.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const nextSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setOpacity(1);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="slideshow-wrapper px-[20px]">
      <div className="slideshow bg-black max-w-[1200px] mx-auto mt-[1.25%]">
        <div className="slideshow-images bg-black w-[54%]">
          <img
            src={images[currentIndex].url}
            alt=""
            className="slideshow-image max-h-[360px] min-w-[100%] object-cover duration-500"
            style={{ opacity: opacity }}
          />
        </div>
      </div>
    </div>
  );
}