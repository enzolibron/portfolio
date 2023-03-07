import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-5" id="contact">
      <div className="text-center md:w-[60%] mx-auto">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[300px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime fullstack developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> lblibron@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +63 956 087 2280
        </p>
        <div className="justify-center flex py-5 ">
          <a
            href="https://github.com/enzolibron"
            className="inline-block text-accent hover:text-black"
          >
            {' '}
            <AiOutlineGithub size={40} />{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
