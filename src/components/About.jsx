import CVImage from "../assets/cvimage.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-2l font-bold flex gap-2">
            <p>
              Hi. I'm Subhash Kandhway currently working in{" "}
              <span className="bg-purple-500">Deloitte.</span>, nice to meet
              you. Please take a look around.
              <img
                src={CVImage}
                alt="person-image"
                className="h-90 w-80 mt-4 mx-20"
              />
            </p>
          </div>
          <div>
            <p>
              I have gained extensive experience in React.js with a strong focus
              on frontend development. Over the course of 1 year, I have honed
              my skills and acquired an in-depth understanding of various
              React.js technologies.Throughout my journey, I have been
              recognized for my contributions and awarded the prestigious R&R
              award three times, demonstrating my commitment to excellence.
              Additionally, I was honored with the Applause award for my
              exceptional performance and dedication. This includes proficiency
              in React Router, Redux Toolkit, React Query, and leveraging the
              power of React hooks. I have consistently delivered high-quality
              software solutions, exceeding expectations and driving positive
              user experiences. Through my dedication and expertise in React.js,
              I am confident in my ability to create exceptional applications
              that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
