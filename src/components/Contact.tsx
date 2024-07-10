import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact__us section">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap items-center ">
          <div className="col-lg-6 w-full lg:w-1/2  lg:mb-0">
            <div className="left__content" data-aos="fade-right">
              <div className="section__heading ">
                <h3 className="text-3xl font-bold">
                  Subscribe to Our Newsletter!
                </h3>
                <p className="text-gray-600 mt-2">
                  Subscribe to our newsletter and stay updated.
                </p>
              </div>
              <div className="left__image">
                <Image
                  src="/assets/images/newsletter/newsletter.png"
                  alt="newsletter"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2 ">
            <div className="right__form" data-aos="fade-left">
              <form action="">
                <div className="row flex flex-wrap -mx-3">
                  <div className="col-lg-6 w-full lg:w-1/2 px-3  lg:mb-0">
                    <div className="form__input">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 w-full lg:w-1/2 px-3  lg:mb-0">
                    <div className="form__input">
                      <input
                        type="text"
                        placeholder="Surname"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 w-full px-3 ">
                    <div className="form__input">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 w-full px-3 ">
                    <div className="form__input">
                      <textarea
                        name="message"
                        id="msg"
                        rows={4}
                        placeholder="Message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6 lg:w-1/2 px-3">
                    <div className="form__input">
                      <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
                        <a href="#">Send Message</a>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
