import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Subhash Kandhway
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
          I am a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          MERN Stack Developer with 1+ years of experience developing web
          applications using MongoDB, Express.js, React.js, and Node.js.
          Expertise in developing user-centric and data-driven applications that
          are performance-optimized and secure. Skilled in developing custom API
          endpoints and integrating third-party services. Experienced in
          developing Single Page Applications (SPAs) using React.js and Redux.
          Experienced in deploying applications on Heroku and AWS.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-indigo-500">
            <Link to="Works" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
