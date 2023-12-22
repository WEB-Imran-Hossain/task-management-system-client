import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";

const About = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen text-white">
                <div
                    className="hero min-h-screen bg-fixed "
                    style={{
                        backgroundImage: "url(https://i.ibb.co/Y0FJf9d/banner-About.jpg",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5  text-5xl lg:text-8xl font-bold">
                                ABOUT
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen my-10 mt-0">
                <div className="hero-content flex-col lg:flex-row flex-col-reverse mt-32">
                    <div className="lg:w-1/2 lg:mt-0 lg:text-left w-10/12">
                        <div className="lg:w-4/5 space-y-4">
                            <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] uppercase">
                            Simple and flexible Experiences
                            </h5>
                            <button className="btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded uppercase">
                                Read More
                            </button>
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
                            src={about2}
                            className="w-1/2 rounded-lg shadow-2xl absolute  lg:top-60 lg:-left-24 top-28 -left-12 bottom-0 border-8  border-white"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
