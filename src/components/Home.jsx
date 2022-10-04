import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle
} from "react-icons/ai";

import me from "../assets/me_1.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen text-black flex flex-col justify-between items-center lg:flex-row"
    >
      {/* CTA */}
      <div className="min-h-96 flex flex-col items-center lg:items-start">
        {/* Name */}
        <h1 className="font-extrabold text-2xl mt-8 mb-2 md:text-4xl lg:text-5xl">
          CLÉBERT Marc Tyson <span className="text-3xl">🖐️</span>
        </h1>

        {/* Titre */}
        <div className="flex flex-col gap-4 items-center mb-4">
          <span className="w-32 h-1 bg-black hidden"></span>
          <p className="text-center font-bold text-xl text-gray-700 md:text-2xl lg:text-3xl lg:text-left">
            Web Developper
          </p>
        </div>

        {/* Description */}
        <div className="mb-2">
          <p className="text-md text-center leading-7 w-80 text-gray-500 lg:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            esse! Assumenda, veniam corporis amet animi nesciunt quis ipsam
            consequuntur magnam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis eaque omnis quos vero, odit iste iure
            qui laboriosam vel temporibus, quibusdam iusto adipisci voluptas
            culpa alias aliquam asperiores? Amet, unde?
          </p>
        </div>

        <a
          className="px-3 py-2 my-10 w-36 bg-black text-white rounded-md lg:my-4"
          href="./"
        >
          Download CV
        </a>
      </div>

      {/* Image */}
      <div
        id="container_me"
        className="flex justify-center items-center w-72 h-72 overflow-hidden"
      >
        <img src={me} alt="Me" className="w-full h-full object-cover" />
      </div>

      {/* Social Icons */}
      <div className="bg-red text-2xl flex gap-5 my-16 md:my-20 lg:ml-2 lg:flex-col lg:my-0">
        <a
          href="https://www.linkedin.com/in/marc-tyson-cl%C3%A9bert-a399ba177/"
          target="__BLANK"
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/clebertmarctyson" target="__BLANK">
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a href="https://twitter.com/ClebertTyson" target="__BLANK">
          <AiFillTwitterCircle className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Home;
