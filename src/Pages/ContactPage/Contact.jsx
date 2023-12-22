const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-white">
        <div
          className="hero min-h-screen bg-fixed "
          style={{
            backgroundImage: "url(https://i.ibb.co/cLG177z/contact.jpg", position:"cover"
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl md:text-7xl font-bold uppercase">Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card lg:card-side shadow-xl max-w-[90vw] mx-auto gap-10 rounded-l-lg mt-20 mb-36">
        <figure>
          <iframe
            className=" w-full lg:w-[65rem] h-[50rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.548177985148!2d0.0020773766275212244!3d51.631485271841726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a1489f621597%3A0x5ea859a5cf505d1!2sTask%20Management%20Company!5e0!3m2!1sen!2sbd!4v1703254899974!5m2!1sen!2sbd"
          ></iframe>
        </figure>
        {/* contact info */}
        <div className="flex items-center justify-center flex-col lg:flex-row gap-10">
          <div className="ml-5">
            <form className="card-body md:w-[35rem] md:p-0 mb-10 space-y-5">
              <h1 className="text-4xl font-semibold text-black font-Rajdhani">
                Send Your Messages
              </h1>
              <div className="md:flex mb-5 gap-2">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>
              </div>
              <div className="md:flex mb-5 gap-2">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>
              </div>
              <div className="form-control col-span-2 h-32">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="textarea"
                  name="textarea"
                  placeholder="Message"
                  className="input input-bordered p-3 h-32 rounded-none"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded">
                  <input type="submit" value="SUBMIT" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
