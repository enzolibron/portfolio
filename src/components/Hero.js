import React from 'react';
import HeroImg from '../assets/hero-img.png';

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-primary px-5 py-10">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 pt-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am Lorenzo.
            <br />
            Fullstack Developer.
          </h1>
          {/* 
          <div className="flex py-5 ">
            <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineTwitter size={40} />{' '}
            </a>
            <a
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineYoutube size={40} />{' '}
            </a>
            <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineFacebook size={40} />{' '}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent border-2 border-[#7477FF] px-6 py-auto hover:bg-transparent"
          >
            See Projects
          </a> */}
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
