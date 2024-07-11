"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "../data";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [headerBackground, setHeaderBackground] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const setActiveLink = () => {
    const sections = document.querySelectorAll<HTMLElement>(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;

      if (
        scrollY >= sectionTop - sectionHeight / 3 &&
        scrollY < sectionTop + sectionHeight / 2
      ) {
        const sectionId = section.getAttribute("id");
        const correspondingNavLink = document.querySelector<HTMLAnchorElement>(
          `.nav__links a[href="#${sectionId}"]`
        );

        document
          .querySelectorAll(".nav__links a")
          .forEach((link) => link.classList.remove("active"));
        if (correspondingNavLink) {
          correspondingNavLink.classList.add("active");
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector<HTMLElement>(".header__area");
      if (header) {
        let topPosition = window.scrollY;
        if (topPosition > 100) {
          header.classList.add("background__header");
        } else {
          header.classList.remove("background__header");
        }
      }
    });
    window.addEventListener("scroll", setActiveLink);

    return () => {
      window.removeEventListener("scroll", setActiveLink);
    };
  }, []);

  return (
    <header className="header__area" data-aos="fade-down">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12">
            <nav className="main__nav flex items-center justify-between ">
              <a href="#" className="logo p-3">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="jdev"
                  height={100}
                  width={100}
                  className="h-8"
                />
              </a>
              <ul className="nav flex items-center space-x-4 md:space-x-2">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav__links">
                    <a
                      href={link.path}
                      className={`px-4 py-2 md:px-2 ${
                        link.active === "active" ? "active" : ""
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className="nav__links pl-5 md:pl-3">
                  <div className="main__red__button py-2">
                    <a
                      download="cv__jeevan__shrestha"
                      href={"/assets/cv/CV_JEEVAN_SHRESTHA.pdf"}
                      className="bg-red-500 text-white px-4 py-3 rounded-md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download CV
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mobile__nav">
                <i
                  className={`fa-solid ${menuOpen ? "fa-bars" : "fa-times"}`}
                  id="menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                ></i>
                <ul
                  className={`mobile__menu ${
                    menuOpen ? "hide hidden" : "show block"
                  } absolute top-full left-0 w-full bg-white shadow-lg`}
                >
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className="nav__links block px-2 md:px-4 "
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <Link
                        href={link.path}
                        className={`${
                          link.active === "active" ? "active" : ""
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
