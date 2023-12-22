const Plans = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <iframe
          className="w-[20rem] h-[25rem] lg:w-[50rem] lg:h-[50rem] object-cover"
          src="https://lottie.host/embed/5846209e-153f-4c36-87c3-a2501f3d24f9/w744gLII4o.json"
        ></iframe>
        <div>
          <h1 className="mb-5 text-5xl md:text-7xl font-bold uppercase -mt-10 text-center lg:text-left">We makes plan!</h1>

       <div className="text-center lg:text-left">
       <button className="btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded uppercase">
            Read More
          </button>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
