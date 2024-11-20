import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/HomePage.css";
import ProductCategory from "./ProductCategory";
import Features from "./Features";
import CarouselWithText from "./CarouselWithText";
import TrendingOn from "./TrendingOn";

function HomePage() {
  return (
    <div>
      {" "}
      <div className="carousel-container">
        <Carousel data-bs-theme="light">
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-01-20240927193303523568.webp"
              alt="First slide"
              style={{ borderRadius: "15px" }}
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-banner-02-20240906182857160842.webp"
              alt="Second slide"
              style={{ borderRadius: "15px" }}
              loading="lazy"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-banner-01-20240906182836988582.webp"
              loading="lazy"
              style={{ borderRadius: "15px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <img
        className="img-container"
        src="https://www.josalukkasonline.com/assets/images/home/spl-day-offer.webp"
        alt="strip-img"
      />
      <div className="center-text">
        <p className="text-content">
          Shop By <b>Category</b>
          <span className="rotate">
            <img
              src="https://www.josalukkasonline.com/assets/images/home/right-arrow.svg"
              alt="rotate"
            />
          </span>
        </p>
      </div>

      <ProductCategory />
      <TrendingOn />
      <Features />
      <CarouselWithText />
    </div>
  );
}

export default HomePage;
