import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.css";
import useIsMobile from "./useIsMobile";

export default function ImageCarousel() {
  const isMobile = useIsMobile();

  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={600}
      >
        {isMobile ? (
          // === Mobile: One image per slide ===
          [
            "/assets/carousel-img-1.JPEG",
            "/assets/carousel-img-2.JPEG",
            "/assets/carousel-img-3.jpeg",
            "/assets/carousel-img-4.JPG",
            "/assets/carousel-img-5.JPG",
            "/assets/carousel-img-6.JPG",
            "/assets/carousel-img-7.JPG"
          ].map((src, i) => (
            <div key={i} className="mobile-slide">
              <img src={src} alt={`Mobile slide ${i + 1}`} />
            </div>
          ))
        ) : (
          // === Desktop: Two images per slide ===
          [
            ["/assets/carousel-img-1.JPEG", "/assets/carousel-img-2.JPEG"],
            ["/assets/carousel-img-6.JPG", "/assets/carousel-img-3.jpeg"],
            ["/assets/carousel-img-4.JPG", "/assets/carousel-img-5.JPG"],
            ["/assets/carousel-img-6.JPG", "/assets/carousel-img-7.JPG"]
          ].map((pair, i) => (
            <div key={i} className="slide-group">
              <img src={pair[0]} alt={`Slide ${i * 2 + 1}`} />
              <img src={pair[1]} alt={`Slide ${i * 2 + 2}`} />
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
}
