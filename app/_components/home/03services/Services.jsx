"use client";
import React, { useEffect } from "react";
import "./services.css";

export default function Services() {
  useEffect(() => {
    document.querySelectorAll(".action").forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll(".slide").forEach(function (slide) {
          slide.classList.remove("active");
        });
        var slide = this.closest(".slide");
        if (slide) {
          slide.classList.add("active");
        }
      });
    });
  }, []);
  return (
    <section className="home_services" id="services">
      <h2>Services</h2>

      <div className="home_services_accordion">
        <ul className="slides">
          <li className="slide active">
            <a href="#" className="action">
              <span>01</span>
              <span>PR</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="slide">
            <a href="#" className="action">
              <span>02</span>
              <span>UX/UI</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="slide">
            <a href="#" className="action">
              <span>03</span>
              <span>Web Development</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="slide">
            <a href="#" className="action">
              <span>04</span>
              <span>Digital Marketing</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="slide">
            <a href="#" className="action">
              <span>05</span>
              <span>Social Media</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="slide">
            <a href="#" className="action">
              <span>06</span>
              <span>SEO Services</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="slide">
            <a href="#" className="action">
              <span>07</span>
              <span>And More</span>
            </a>

            <div className="slide-content">
              <div>
                <h3>Elevate Your Brand with our PR Services</h3>
                <p>
                  At Juice Box, our expert PR services are designed to amplify
                  your brand's voice, engage your audience, and elevate your
                  market presence.
                </p>
              </div>
              <ul>
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <li className="group transition-all duration-300 ease-in-out">
                      <div className="relative mx-auto flex items-center w-full group-hover:rounded-3xl cursor-pointer h-[--33px] group-hover:w-[50%] overflow-hidden transition-all duration-300 ease-in-out">
                        <span className="relative z-10 group-hover:text-[--primary-black] group-hover:ml-[--10px] group-hover:font-bold transition-all duration-300 ease-in-out">
                          Web Design
                        </span>
                        <svg
                          className="absolute -z-[1] right-0 top-0 w-[--34px] h-[--33px] group-hover:scale-x-[50] group-hover:scale-y-[9] transition-all duration-700 ease-in-out"
                          preserveAspectRatio="none"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.925781"
                            y="0.360352"
                            width="32.0891"
                            height="32.0891"
                            rx="16.0445"
                            fill="#F8F24B"
                          />
                          <path
                            d="M18.3525 22.911L24.9869 16.6689L18.7793 10.0022C18.7238 9.92417 18.6522 9.85893 18.5693 9.81094C18.4865 9.76295 18.3942 9.73332 18.2989 9.72407C18.2036 9.71482 18.1074 9.72615 18.0168 9.75731C17.9263 9.78847 17.8435 9.83872 17.774 9.90466C17.7046 9.9706 17.6501 10.0507 17.6143 10.1395C17.5785 10.2284 17.5622 10.3238 17.5665 10.4195C17.5708 10.5152 17.5956 10.6088 17.6392 10.6941C17.6829 10.7793 17.7443 10.8542 17.8194 10.9136L22.4633 15.9166L9.68144 15.494C9.50424 15.4882 9.33196 15.5529 9.20252 15.6741C9.07307 15.7953 8.99705 15.9629 8.9912 16.1401C8.98534 16.3173 9.05011 16.4896 9.17127 16.619C9.29244 16.7485 9.46006 16.8245 9.63726 16.8303L22.4191 17.2529L17.4549 21.9382C17.3258 22.0599 17.2504 22.2279 17.2451 22.4052C17.2399 22.5826 17.3053 22.7547 17.427 22.8838C17.5487 23.0129 17.7167 23.0883 17.894 23.0936C18.0713 23.0988 18.2435 23.0334 18.3725 22.9117L18.3525 22.911Z"
                            fill="#F8F24B"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[11px] absolute -right-[--10px] group-hover:right-[--15px] transition-all delay-300 duration-500 ease-in-out"
                        >
                          <path
                            d="M10.1857 8.17807L10.1662 0.642268L2.63039 0.622714C2.55188 0.612084 2.472 0.618447 2.39616 0.641372C2.32032 0.664297 2.2503 0.703249 2.19082 0.755591C2.13134 0.807933 2.08381 0.872443 2.05143 0.944753C2.01905 1.01706 2.00259 1.09549 2.00316 1.17471C2.00372 1.25394 2.0213 1.33212 2.05471 1.40396C2.08812 1.4758 2.13657 1.53962 2.19679 1.59111C2.25701 1.6426 2.32758 1.68054 2.40374 1.70238C2.4799 1.72422 2.55986 1.72944 2.63821 1.71769L8.28518 1.74116L0.804125 9.22221C0.700408 9.32593 0.64214 9.46659 0.64214 9.61327C0.64214 9.75995 0.700408 9.90062 0.804124 10.0043C0.907841 10.1081 1.04851 10.1663 1.19519 10.1663C1.34187 10.1663 1.48254 10.1081 1.58625 10.0043L9.0673 2.52328L9.09077 8.17025C9.09129 8.31701 9.15008 8.45755 9.25422 8.56096C9.35837 8.66436 9.49932 8.72217 9.64608 8.72165C9.79284 8.72113 9.93338 8.66233 10.0368 8.55819C10.1402 8.45405 10.198 8.3131 10.1975 8.16634L10.1857 8.17807Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
