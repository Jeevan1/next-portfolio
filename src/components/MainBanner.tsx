import Image from "next/image";
import React from "react";

function MainBanner() {
  return (
    <div className="main__banner section" id="top">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap items-center">
          <div className="col-lg-6  lg:w-1/2">
            <div className="left__content" data-aos="fade-right">
              <h5>Hello &amp; Welcome</h5>
              <h2>
                I am <span>Jeevan Shrestha</span> &amp; <span>Web</span>{" "}
                Developer
              </h2>
              <p>
                Passionate self-taught developer with internship experience,
                dedicated to crafting visually appealing and functional user
                interfaces. Seeking front-end opportunities in a dynamic
                organization, focused on innovation and continuous learning.
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
            <div className="right__content" data-aos="fade-left">
              <Image
                src="/assets/images/banner/banner-right-image.png"
                alt="banner__img"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
