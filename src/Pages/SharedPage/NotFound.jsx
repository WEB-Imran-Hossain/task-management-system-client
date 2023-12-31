import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center font-bold text-[#1D2833] flex flex-col justify-center items-center h-screen space-y-5">
      <h2 className="text-[200px] -mb-14">4<span className="text-[#FF7452]">0</span>4</h2>
      <p className="text-5xl">Page <span className="text-[#FF7452]">Not</span> Found</p>
      <p className="text-base font-normal text-[#1D2833]">
      Sorry, the page you're looking for is not found yet.
      </p>
      <Link to="/">
        <button className="btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded uppercase">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
