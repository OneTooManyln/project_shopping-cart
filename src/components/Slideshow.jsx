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
    }, 155);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="slideshow-wrapper px-[20px]">
      <div className="slideshow flex gap-[10px] max-w-[1200px] mx-auto mt-[1.25%]">
        <div className="slideshow-images w-[74%]">
          <img
            src={images[currentIndex].url}
            alt={`Slideshow Image ${currentIndex + 1}`}
            className="slideshow-image max-h-[360px] min-w-[100%] object-cover duration-500"
            style={{ opacity: opacity }}
          />
          <div className="slideshow-nav flex absolute gap-[20px] top-[38.5%] left-[33.2%] transform-translateX-1/2">
            {images.map((image, index) => (
              <div
                key={index}
                role="button"
                data-testid={`nav-button-${index + 1}`}
                className={`nav-button w-[12px] h-[12px] bg-[rgb(251,113,153)] hover:cursor-pointer rounded-3xl ${
                  currentIndex === index ? "opacity-100" : "opacity-60"
                } `}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="slideshow-nav-bar flex-1 gap-2 bg-[rgb(251,113,153)] text-white text-[1.4rem]">
          <ul>
            <li className="nav-link flex h-16 items-center pl-4 hover:cursor-pointer hover:bg-[rgb(87,136,206)] border-b-2 border-white font-medium">
              Home
            </li>
            <li className="nav-link flex h-16 items-center pl-4 hover:cursor-pointer hover:bg-[rgb(87,136,206)] border-b-2 border-white font-medium">
              Shop
            </li>
            <li className="nav-link flex h-16 items-center pl-4 hover:cursor-pointer hover:bg-[rgb(87,136,206)] border-b-2 border-white font-medium">
              Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
