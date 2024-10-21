import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface GalleryProps {
  customClass?: string;
  optionClass?: string;
  buttonClass?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  customClass,
  buttonClass,
  optionClass,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const importImages = import.meta.glob(
      "/src/assets/images/stock/*.{jpg,jpeg,png,gif}"
    );

    const imagePaths: string[] = [];

    for (const path in importImages) {
      importImages[path]().then((module) => {
        const imageModule = module as { default: string };
        imagePaths.push(imageModule.default);
        setImages([...imagePaths]);
      });
    }
  }, []);

  //For dragging

  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollBoxRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollBoxRef.current.offsetLeft);
    setScrollLeft(scrollBoxRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollBoxRef.current) return;

    const x = e.pageX - scrollBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 to increase drag speed
    scrollBoxRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  //toggle scrollBox
  const [showscrollBox, setShowscrollBox] = useState(true);

  return (
    <>
      <div
        className={`gallery flex justify-center items-center fixed inset-0 w-screen h-screen z-[100] ${customClass}`}
      >
        <div className="absolute inset-0 overlay h-full w-full bg-black z-[101] bg-opacity-80 backdrop-blur-sm"></div>
        <div className="absolute flex justify-center items-center mainImage w-full h-full z-[104] text-white">
          <button
            className={`absolute left-5 ${buttonClass}`}
            onClick={() =>
              setCurrentIndex(
                currentIndex - 1 == 0 ? images.length : currentIndex - 1
              )
            }
          >
            <FaArrowLeft
              size={40}
              className="p-2 rounded-md bg-transparent transition-all hover:bg-opacity-15 hover:bg-white"
            />
          </button>
          <button
            className={`absolute right-5 ${buttonClass}`}
            onClick={() =>
              setCurrentIndex(
                currentIndex + 1 > images.length ? 1 : currentIndex + 1
              )
            }
          >
            <FaArrowRight
              size={40}
              className="p-2 rounded-md bg-transparent transition-all hover:bg-opacity-15 hover:bg-white"
            />
          </button>
          <img src={images[currentIndex - 1]} className="h-4/6" alt="photo" />
        </div>
        <div className={`absolute flex justify-center bottom-0 py-2 z-[105] transition-all ${!showscrollBox && "translate-y-28"}`}>
          <button
            className={`absolute px-10 py-1 z-10 bg-white text-white bg-opacity-5 hover:bg-opacity-5 opacity-50 hover:opacity-100 transition-all rounded-md ${showscrollBox ? "top-[-20px]": " top-[-30px]"}`}
            onClick={()=>setShowscrollBox(()=>!showscrollBox)}
          >
            <FaArrowDown className={`transition-all ${!showscrollBox && "rotate-180"}`}/>
          </button>

          <div
            ref={scrollBoxRef}
            className={`scrollBox flex gap-1 px-5 py-2 overflow-x-auto ${optionClass} ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Gallery Image ${index + 1}`}
                className={`gallery-image h-20 origin-center shadow-md ${
                  currentIndex - 1 == index &&
                  "border-2 border-transparent ring ring-white scale-110 mx-2 rounded-md"
                }`}
                onClick={() => setCurrentIndex(index + 1)}
                onDragStart={(e) => e.preventDefault()} // Disable default image dragging
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
