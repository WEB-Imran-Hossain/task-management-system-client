import Banner from "./Banner";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
import about1 from "../../assets/images/about1.jpg";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* about section */}
      <div className="hero min-h-screen my-10 mt-0">
        <div className="hero-content flex-col lg:flex-row flex-col-reverse mt-32">
          <div className="lg:w-1/2 lg:mt-0 lg:text-left w-10/12">
            <div className="lg:w-4/5 space-y-4">
              <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] uppercase text-center lg:text-left">
                Simple and flexible Experiences
              </h5>
              <div className="text-center lg:text-left">
                <button className="btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded uppercase">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="relative ml-14">
            <img
              data-aos="fade-right"
              src={about1}
              className="lg:w-full  rounded-lg shadow-2xl"
            />
            <img
              data-aos="fade-left"
              src={about1}
              className="w-1/2 rounded-lg shadow-2xl absolute  lg:top-60 lg:-left-24 top-28 -left-12 bottom-0 border-8  border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
