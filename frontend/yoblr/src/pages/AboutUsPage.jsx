import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex justify-center items-center h-screen xs:items-end xs:pb-40">
      <div className="flex flex-col justify-center items-center w-screen h-[50%] bg-black/70 rounded-3xl">
        <h1 className="text-white justify-center items-center pb-5">
          Destination
        </h1>
        <p className="text-wrap text-white pt-10 px-5 xs:w-[50%]">
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
