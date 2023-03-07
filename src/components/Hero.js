import React from 'react';
import HeroImg from '../assets/hero-img.png';
import { AiOutlineGithub } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-primary px-5 py-32" id="hero">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 pt-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am Lorenzo.
            <br />
            Fullstack Developer.
          </h1>

          <div className="flex py-5 ">
            <a
              href="https://github.com/enzolibron"
              className="pr-4 inline-block text-accent hover:text-black"
            >
              {' '}
              <AiOutlineGithub size={40} />{' '}
            </a>
          </div>
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
