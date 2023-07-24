import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init();

    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="carousel w-full"
      style={{
        fontFamily: "cursive",
        backgroundColor: "#ABE0F2",
        border: "5px dotted #35D3F0",
      }}
      data-aos="fade-left"
    >
      <div id="slide1" className="carousel-item relative w-full h-64">
        <div className="flex justify-center items-center flex-wrap">
          <h2 className="text-center text-lg font-bold px-60">
            I highly recommend  College Admission Services to EVERYONE
            interested in getting into their dream college! It's incredible.
            Best. Service. Ever!  College Admission Services was worth a
            fortune to my future.
          </h2>
          <br />
          <p className="text-center px-4">
            Review By <br /> - JOHN D. from Springfield, Illinois
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-64">
        <div className="flex justify-center items-center flex-wrap">
          <h2 className="text-center text-lg font-bold px-60">
            The application process was very easy to follow. I love their
            system. Definitely worth the investment. Trust  College
            Admission Services with your dreams.
          </h2>

          <p className="text-center px-4">
            Review By <br /> JANE K. from Boston, Massachusetts
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-64">
        <div className="flex justify-center items-center flex-wrap">
          <h2 className="text-center text-lg font-bold px-60">
            Thanks to  College Admission Services, I got accepted into my
            dream college! They are amazing!
          </h2>

          <p className="text-center px-4">
            Review By <br /> SARAH L. from San Francisco, California
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
