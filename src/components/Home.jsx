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
      className="h-screen flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start lg:mt-32"
    >
      <div className="flex flex-col text-center lg:text-left">
        <h1 className="text-2xl font-extrabold my-3 lg:text-4xl">
          CLÉBERT Marc Tyson <span className="text-2xl lg:text-3xl">🖐️</span>
        </h1>
        <p className="text-gray-700 text-md font-extrabold mb-1">
          Full Stack Web Developper
        </p>

        <p className="text-gray-700 text-sm my-2 leading-7 md:w-96">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
          esse! Assumenda, veniam corporis amet animi nesciunt quis ipsam
          consequuntur magnam!
        </p>

        <a
          className="bg-black text-white px-2 py-1 rounded-md my-6 w-40 m-auto lg:mx-0"
          href="./"
        >
          Download CV
        </a>
      </div>

      <div className="w-64 h-64 animate-profile overflow-hidden">
        <img src={me} alt="Me" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-center gap-4 text-3xl my-4 lg:flex-col">
        <a
          href="https://www.linkedin.com/in/marc-tyson-cl%C3%A9bert-a399ba177/"
          target="__BLANK"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/clebertmarctyson" target="__BLANK">
          <AiFillGithub />
        </a>
        <a href="https://twitter.com/ClebertTyson" target="__BLANK">
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default Home;
