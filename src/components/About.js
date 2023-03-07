import React from 'react';
import me from '../assets/me.jpg';
const About = () => {
  return (
    <section className="bg-secondery px-5 py-10" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            I build applications with ReactJS and ExpressJS.
          </p>
          <p className="pb-5">
            I am a self taught. I taught myself technologies like ReactJS,
            Redux, Redux Tool Kit, Axios, Tailwind CSS, NodeJS, ExpressJS and
            many more.
          </p>

          <p>
            In my spare time I try to learn new libraries. Outside programming,
            I go cycling, watching movies or a series, or just playing valorant.
          </p>
        </div>

        <div className="about-img">
          <img src={me} alt="me" className="w-3/5 m-auto " />
        </div>
      </div>
    </section>
  );
};

export default About;
