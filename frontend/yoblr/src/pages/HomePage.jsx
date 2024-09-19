import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDown from "../components/ArrowDown";
import ProductPage from "../components/ProductPage";
import BlogSection from "../components/BlogSection";
import { motion, AnimatePresence } from "framer-motion";

const heroText = [
  { title: "Matches you with your next career move.." },
  { title: "Connects opportunities with talent" },
  { title: "Swipe right to your next dream job" },
  { title: "Discover talent, one swipe at a time" },
  { title: "Connect. Match. Succeed." },
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="xs:pt-5">
      <div className="bg-grid bg-no-repeat bg-top bg-contain bg-opacity-50">
        <div className="flex justify-center xs:h-screen">
          <div className="flex justify-evenly items-center w-screen bg-gradient-to-b from-tertiary/80 to-tertiary/80 xs:flex-col xs:items-center">
            <div className="flex flex-col items-start h-screen justify-center pr-10 xs:h-screen xs:pb-10 xs:justify-end xs:items-center xs:pr-0">
              <h1 className="text-7xl text-primary font-semibold mb-5 xs:text-6xl xs:text-left">
                Yoblr
              </h1>
              <AnimatePresence mode="wait">
                <motion.p
                  className="text-2xl text-primary w-[500px] xs:w-[90%] xs:text-center"
                  key={index}
                  initial={{ opacit: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {heroText[index].title}
                </motion.p>
              </AnimatePresence>
              <Link to="/choose-role">
                <button className="btn-outline rounded-2xl my-10 hover:outline hover:outline-1 hover:outline-primary ease-in-out xs:w-fit">
                  Try it out for yourself!
                </button>
              </Link>
              <div className="flex mt-5 gap-4 xs:flex-col">
                <button
                  type="button"
                  className="px-4 py-3 z-20 inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-tertiary hover:bg-zinc-900 active:bg-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36px"
                    fill="#fff"
                    className="inline mr-2"
                    viewBox="0 0 22.773 22.773"
                  >
                    <path
                      d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                      data-original="#000000"
                    />
                  </svg>
                  <div>
                    <p className="text-[10px] text-white leading-none text-left">
                      Download on the
                    </p>
                    App Store
                  </div>
                </button>
                <button
                  type="button"
                  className="px-4 py-2 z-20 inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-tertiary hover:bg-zinc-900 active:bg-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36px"
                    fill="#fff"
                    className="inline mr-2"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#57cef3"
                      d="M7 3v58l33-29z"
                      data-original="#57cef3"
                    />
                    <path
                      fill="#fff200"
                      d="m36 32 8-10 15 10-15 10z"
                      data-original="#fff200"
                    />
                    <path
                      fill="#48ff48"
                      d="M36 32 7 3h4l34 20z"
                      data-original="#48ff48"
                    />
                    <path
                      fill="#ff6c58"
                      d="M36 32 7 61h4l34-20z"
                      data-original="#ff6c58"
                    />
                    <path
                      fill="#f33"
                      d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                      data-original="#ff3333"
                    />
                    <path
                      fill="#0779e4"
                      d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                      data-original="#0779e4"
                    />
                    <path
                      fill="#314a52"
                      d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                      data-original="#314a52"
                    />
                  </svg>
                  <div>
                    <p className="text-[10px] text-white leading-none text-left">
                      Get it on
                    </p>
                    Google Play
                  </div>
                </button>
              </div>
            </div>
            <img
              src="/src/assets/iphones.png"
              height={""}
              width={""}
              alt=""
              className="h-[603px] w-[432px] ml-20 xs:h-auto xs:w-[80%] xs:ml-0"
            />
          </div>
        </div>
        <div className="relative w-screen">
          <ArrowDown />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute w-screen bottom-10 opacity-90 xs:hidden z-0"
          >
            <path
              fill="#111418"
              fillOpacity="1"
              d="M0,288L120,272C240,256,480,224,720,208C960,192,1200,192,1320,192L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <ProductPage />
        <BlogSection />
      </div>
    </div>
  );
};

export default HomePage;
