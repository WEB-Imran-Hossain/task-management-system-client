import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/f0FSLyf/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-7xl font-bold uppercase">
            ONLINE <span className="text-[#FF7452]">TASK</span> MANAGER{" "}
          </h1>
         
          <Link to="/login">
            <button className="btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded uppercase">
              Let’s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
