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
      <div className="h-96 flex flex-col items-center lg:items-start">
        {/* Name */}
        <h1 className="font-extrabold text-2xl mt-8 mb-4 md:text-4xl lg:text-5xl">
          CLÉBERT Marc Tyson <span className="text-3xl">🖐️</span>
        </h1>

        {/* Titre */}
        <div className="flex flex-col gap-4 items-center mb-6">
          <span className="w-32 h-1 bg-black hidden"></span>
          <p className="text-center font-bold text-2xl text-gray-700 lg:text-left">
            Web Developper
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-md text-center leading-7 w-96 text-gray-500 lg:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            esse! Assumenda, veniam corporis amet animi nesciunt quis ipsam
            consequuntur magnam!
          </p>
        </div>

        <a className="px-3 py-2 w-36 bg-black text-white rounded-md" href="./">
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
      <div className="bg-red text-2xl flex gap-5 my-16 md:my-20 lg:flex-col lg:my-0">
        <AiFillLinkedin className="cursor-pointer" />
        <AiFillGithub className="cursor-pointer" />
        <AiFillTwitterCircle className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Home;
