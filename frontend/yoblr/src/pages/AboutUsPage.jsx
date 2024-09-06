import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex justify-center items-center h-screen xs:items-end xs:pb-40">
      <div className="flex flex-col justify-center items-center w-screen h-[70%] bg-tertiary rounded-3xl max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] mx-auto p-5">
        <h1 className="text-white font-bold italic justify-center items-center pb-10 sm:text-xl md:text-3xl lg:text-4xl text-center">
          Destinations
        </h1>
        <p className="text-white text-base m-7 text-left leading-relaxed w-[60%] md:w-fit xs:text-sm md:text-lg lg:text-xl sm:max-w-[95%] mx-auto">
          Need someone to brave the crowds at a festival with you? Or maybe you
          just want someone who cares about climate change as much as you do.
          With 55 billion matches to date, we’re no stranger to making
          connections. Your relationship with online dating just got better:
          Tinder has features that help you get maximum visibility and get
          noticed by the people you Like. Meet friends who love coffee as much
          as you do or find someone that can match you in badminton. And when
          you need to get out of town, our Passport feature can take you to over
          190 countries in over 40 languages—it’s all possible on Tinder.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
