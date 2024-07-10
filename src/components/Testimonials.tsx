import React from "react";
import { testimonials } from "../data";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="our__portfolio " id="portfolio">
      <div className="container mx-auto px-4">
        <div className="row flex justify-center">
          <div className="col-lg-6 w-full lg:w-1/2">
            <div className="section__heading text-center" data-aos="zoom-in">
              <h3>
                What <span>People</span> are <span>Saying</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap">
          {testimonials.map((testimonial, i) => (
            <div className=" w-full sm:w-1/2 lg:w-1/4 px-3" key={i}>
              <a href="#">
                <div className="portfolio__item" data-aos="fade-up">
                  <div className="portfolio__content hidden__content ">
                    <h4>
                      {testimonial.name} <br />
                      <small>({testimonial.designation})</small>
                    </h4>
                    <span>{testimonial.content}</span>
                  </div>
                  <div className="portfolio__image showed__content">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={250}
                      height={250}
                      // layout="responsive"
                    />
                    {/* <p>{testimonials.name}</p> */}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
