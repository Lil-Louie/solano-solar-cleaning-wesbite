import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.css"

export default function ImageCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={600}
      >
        <div>
          <img src="assets/carousel-img-1.jpg" alt="Solar Panel 1" width="300" height="200" />
        </div>
        <div>
          <img src="/assets/carousel-img-2.jpg" alt="Solar Panel 2" width="600" height="200" />
        </div>
        <div>
          <img src="/assets/carousel-img-3.jpg" alt="Solar Panel 3" width="600" height="200" />
        </div>
        <div>
          <img src="/assets/carousel-img-4.jpg" alt="Solar Panel 4" width="600" height="200" />
        </div>
        <div>
          <img src="/assets/carousel-img-5.jpg" alt="Solar Panel 5" width="600" height="200" />
        </div>
      </Carousel>
    </div>
  );
}
