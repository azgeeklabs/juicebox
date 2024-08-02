"use client";
import React, { useEffect, useRef, useContext } from "react";
import "./whiteLabel.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { globalContext } from "@/app/_context/GlobalContext";

export default function WhiteLabel() {
  const whiteLabelRef = useRef(null);
  const { setViewOurWork } = useContext(globalContext);
  useEffect(() => {
    const cards = document.querySelectorAll(".home_whiteLabel_card");
    const cardTitle = document.querySelectorAll(".home_whiteLabel_card_title");

    const handleMouseClick = (e) => {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
      // Find the parent card of the clicked title
      const clickedCard = e.target.closest(".home_whiteLabel_card");
      if (clickedCard) {
        clickedCard.classList.add("active");
      }
    };

    cardTitle.forEach((title) => {
      title.addEventListener("click", handleMouseClick);
    });

    return () => {
      cardTitle.forEach((title) => {
        title.removeEventListener("click", handleMouseClick);
      });
    };
  }, []);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

  useGSAP(
    () => {
      const whiteLabelElement = whiteLabelRef.current;
      const ourWorkElement = document.querySelector(".home_ourWork");
      const footerElement = document.querySelector("#footer");

      ScrollTrigger.create({
        trigger: whiteLabelElement,
        start: "top bottom", // Adjust based on when you want the toggle to happen
        onEnter: () => {
          ourWorkElement?.classList.remove("custom-hidden");
          footerElement?.classList.remove("custom-hidden");
          setViewOurWork(true);
        },
        onLeaveBack: () => {
          ourWorkElement?.classList.add("custom-hidden");
          footerElement?.classList.add("custom-hidden");
          setViewOurWork(false);
        },
        // markers: true,
      });
    },
    { scope: whiteLabelRef }
  );

  return (
    <section className="home_whiteLabel" ref={whiteLabelRef}>
      <h2>White Label</h2>
      <p>
        Unlock new potential for your business with our comprehensive white
        label solutions. Our ready-to-deploy products and services allow you to
        quickly enhance your offerings without the hassle of in-house
        development.
      </p>

      <div className="home_whiteLabel_cardsWrapper">
        <div className="home_whiteLabel_card">
          <div className="home_whiteLabel_card_title">
            <span></span>
            <h3>
              Customizable
              <br />
              Products
            </h3>
          </div>
          <div className="home_whiteLabel_card_content">
            <div>
              <p>
                Unlock new potential for your business with our comprehensive
                white label solutions.
              </p>
              <p>
                Our ready-to-deploy products and services allow you to quickly
                enhance your offerings without the hassle of in-house
                development.
              </p>
            </div>
            <svg
              className="w-[--154px] h-[--155px]"
              viewBox="0 0 154 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.4532 22.0049L68.652 21.4066L68.0536 22.2078L48.6015 48.2538L48.0032 49.055L48.8044 49.6534L74.8504 69.1054L75.6516 69.7038L76.25 68.9026L95.702 42.8566L96.3004 42.0553L95.4992 41.457L69.4532 22.0049ZM80.3118 87.5233L78.6775 88.193L80.0926 89.2498L111.348 112.592L112.763 113.649L112.941 111.892L116.765 74.1747L116.934 72.5165L115.391 73.1485L80.3118 87.5233ZM74.7185 4.08936L147.647 58.5551C152.961 62.5235 154.05 70.041 150.082 75.3547L95.6163 148.283C91.6478 153.597 84.1303 154.687 78.8166 150.718L5.88786 96.2525C0.57419 92.2841 -0.515313 84.7665 3.45312 79.4529L57.9188 6.5241C61.8873 1.21043 69.4048 0.120929 74.7185 4.08936ZM37.6227 84.6852C31.9235 92.3164 33.4913 103.135 41.1225 108.834C48.7537 114.533 59.5719 112.965 65.2711 105.334C70.9704 97.7028 69.4025 86.8846 61.7713 81.1854C54.1401 75.4861 43.3219 77.054 37.6227 84.6852Z"
                stroke="#F8F24B"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <div className="home_whiteLabel_card">
          <div className="home_whiteLabel_card_title">
            <span></span>
            <h3>
              Customizable
              <br />
              Products
            </h3>
          </div>
          <div className="home_whiteLabel_card_content">
            <div>
              <p>
                Unlock new potential for your business with our comprehensive
                white label solutions.
              </p>
              <p>
                Our ready-to-deploy products and services allow you to quickly
                enhance your offerings without the hassle of in-house
                development.
              </p>
            </div>
            <svg
              className="w-[--154px] h-[--155px]"
              viewBox="0 0 154 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.4532 22.0049L68.652 21.4066L68.0536 22.2078L48.6015 48.2538L48.0032 49.055L48.8044 49.6534L74.8504 69.1054L75.6516 69.7038L76.25 68.9026L95.702 42.8566L96.3004 42.0553L95.4992 41.457L69.4532 22.0049ZM80.3118 87.5233L78.6775 88.193L80.0926 89.2498L111.348 112.592L112.763 113.649L112.941 111.892L116.765 74.1747L116.934 72.5165L115.391 73.1485L80.3118 87.5233ZM74.7185 4.08936L147.647 58.5551C152.961 62.5235 154.05 70.041 150.082 75.3547L95.6163 148.283C91.6478 153.597 84.1303 154.687 78.8166 150.718L5.88786 96.2525C0.57419 92.2841 -0.515313 84.7665 3.45312 79.4529L57.9188 6.5241C61.8873 1.21043 69.4048 0.120929 74.7185 4.08936ZM37.6227 84.6852C31.9235 92.3164 33.4913 103.135 41.1225 108.834C48.7537 114.533 59.5719 112.965 65.2711 105.334C70.9704 97.7028 69.4025 86.8846 61.7713 81.1854C54.1401 75.4861 43.3219 77.054 37.6227 84.6852Z"
                stroke="#F8F24B"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <div className="home_whiteLabel_card">
          <div className="home_whiteLabel_card_title">
            <span></span>
            <h3>
              Customizable
              <br />
              Products
            </h3>
          </div>
          <div className="home_whiteLabel_card_content">
            <div>
              <p>
                Unlock new potential for your business with our comprehensive
                white label solutions.
              </p>
              <p>
                Our ready-to-deploy products and services allow you to quickly
                enhance your offerings without the hassle of in-house
                development.
              </p>
            </div>
            <svg
              className="w-[--154px] h-[--155px]"
              viewBox="0 0 154 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.4532 22.0049L68.652 21.4066L68.0536 22.2078L48.6015 48.2538L48.0032 49.055L48.8044 49.6534L74.8504 69.1054L75.6516 69.7038L76.25 68.9026L95.702 42.8566L96.3004 42.0553L95.4992 41.457L69.4532 22.0049ZM80.3118 87.5233L78.6775 88.193L80.0926 89.2498L111.348 112.592L112.763 113.649L112.941 111.892L116.765 74.1747L116.934 72.5165L115.391 73.1485L80.3118 87.5233ZM74.7185 4.08936L147.647 58.5551C152.961 62.5235 154.05 70.041 150.082 75.3547L95.6163 148.283C91.6478 153.597 84.1303 154.687 78.8166 150.718L5.88786 96.2525C0.57419 92.2841 -0.515313 84.7665 3.45312 79.4529L57.9188 6.5241C61.8873 1.21043 69.4048 0.120929 74.7185 4.08936ZM37.6227 84.6852C31.9235 92.3164 33.4913 103.135 41.1225 108.834C48.7537 114.533 59.5719 112.965 65.2711 105.334C70.9704 97.7028 69.4025 86.8846 61.7713 81.1854C54.1401 75.4861 43.3219 77.054 37.6227 84.6852Z"
                stroke="#F8F24B"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <div className="home_whiteLabel_card">
          <div className="home_whiteLabel_card_title">
            <span></span>
            <h3>
              Customizable
              <br />
              Products
            </h3>
          </div>
          <div className="home_whiteLabel_card_content">
            <div>
              <p>
                Unlock new potential for your business with our comprehensive
                white label solutions.
              </p>
              <p>
                Our ready-to-deploy products and services allow you to quickly
                enhance your offerings without the hassle of in-house
                development.
              </p>
            </div>
            <svg
              className="w-[--154px] h-[--155px]"
              viewBox="0 0 154 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.4532 22.0049L68.652 21.4066L68.0536 22.2078L48.6015 48.2538L48.0032 49.055L48.8044 49.6534L74.8504 69.1054L75.6516 69.7038L76.25 68.9026L95.702 42.8566L96.3004 42.0553L95.4992 41.457L69.4532 22.0049ZM80.3118 87.5233L78.6775 88.193L80.0926 89.2498L111.348 112.592L112.763 113.649L112.941 111.892L116.765 74.1747L116.934 72.5165L115.391 73.1485L80.3118 87.5233ZM74.7185 4.08936L147.647 58.5551C152.961 62.5235 154.05 70.041 150.082 75.3547L95.6163 148.283C91.6478 153.597 84.1303 154.687 78.8166 150.718L5.88786 96.2525C0.57419 92.2841 -0.515313 84.7665 3.45312 79.4529L57.9188 6.5241C61.8873 1.21043 69.4048 0.120929 74.7185 4.08936ZM37.6227 84.6852C31.9235 92.3164 33.4913 103.135 41.1225 108.834C48.7537 114.533 59.5719 112.965 65.2711 105.334C70.9704 97.7028 69.4025 86.8846 61.7713 81.1854C54.1401 75.4861 43.3219 77.054 37.6227 84.6852Z"
                stroke="#F8F24B"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
