import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";

function MainBanner() {
  return (
    <div className="main__banner section" id="top">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap items-center">
          <div className="col-lg-6  lg:w-1/2">
            <div className="left__content" data-aos="fade-right">
              <h5>
                <AnimatedText text="Hello & Welcome!" speed={100} />
              </h5>
              <h2>
                I am{" "}
                <span>
                  <AnimatedText text="Jeevan Shrestha," speed={100} />
                </span>
                <br />a{" "}
                <span>
                  <AnimatedText text="Frontend" speed={100} />
                </span>{" "}
                <AnimatedText text="Developer." speed={150} />
              </h2>
              <p>
                Hi, I'm Jeevan Shrestha, a software developer specializing in
                creating seamless and optimized web applications. With a passion
                for front-end development, I focus on delivering visually
                stunning and highly functional user interfaces. I'm always eager
                for opportunities to grow and innovate in a dynamic environment.
              </p>
              <form action="">
                <div className="form__input">
                  <input type="text" placeholder="Project Description..." />
                  <button type="button" className="">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" lg:w-1/2">
            <div
              className="right__content rounded-full overflow-hidden"
              data-aos="fade-left"
            >
              <Image
                src="/assets/images/banner/banner-right-image.jpg"
                alt="banner__img"
                height={800}
                width={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
