import Slider from "react-slick";
import { data } from "../data/data";

const Work = () => {
  const project = data;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div
      name="work"
      className="w-full h-full md:h-screen text-gray-300 bg-banner-bg bg-center bg-cover"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <Slider {...settings}>
          {project.map((item) => {
            const { id, name, image, github, live, desc } = item;
            return (
              <div
                key={id}
                className="max-w-sm max-h-90 rounded overflow-hidden shadow-lg mx-2"
              >
                <img
                  className="w-full h-40 object-cover bg-center"
                  src={image}
                  alt={name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-l mb-2">{name}</div>
                  <p className="text-gray-200 text-sm">{desc}</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                  <a
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    href={github}
                  >
                    #Github
                  </a>
                  <a
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    href={live}
                  >
                    #Live
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
