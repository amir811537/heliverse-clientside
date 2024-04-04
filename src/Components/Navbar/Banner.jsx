import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
      <div>
        <hr className="border-spacing-y-0 border-gray-600" />
          <div className="bg-black text-center py-10">
            <h1 className="text-white uppercase text-4xl lg:text-9xl font-extrabold">welcome</h1>
            <h1 className="lg:text-9xl text-4xl font-extrabold uppercase"><span className="text-white">To</span> <span className="bg-gradient-to-r from-[#ffff00] to-[#00FFA7] bg-clip-text text-transparent">heliverse</span></h1>
        <p className="text-white py-5 lg:text-xl">From square one to engineering excellence! PixelPlex assists in full-cycle software <br /> development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
        <button className="bg-white flex mx-auto justify-center items-center gap-3 rounded-full px-8 py-4 font-semibold text-black">Get Started <FaArrowRight  className="text-white rounded-full text-2xl p-0.5 bg-black" /> </button>

        </div>
      </div>
    );
};

export default Banner;