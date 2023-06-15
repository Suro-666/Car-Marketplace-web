import { useNavigate } from "react-router";
import { useAuthStore } from "../../../../Store-Zustand/Auth/authStore";

const InfoBlock = () => {
  const navigate = useNavigate();
  const { userData } = useAuthStore();

  const handleNavigate = () => {
    if (userData === null) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };
  return (
    <div className="w-full my-[30px] border-[3px] border-amber-400">
      <div className="w-full flex lg:flex-row flex-col lg:h-[550px] h-auto p-[10px]">
        <div className="lg:w-1/3 w-full h-full lg:px-[20px] px-[30px] lg:py-[10px] py-[20px] bg-[#1D1B1B] border-r border-white ">
          <div className="font-bold font-serif lg:text-[28px] text-[24px] mb-[20px] text-amber-500 select-none">
            Our website is one of the leading in Armenia
          </div>
          <div className="font-serif lg:tracking-[.5px] tracking-[1px] lg:text-[20px] text-[18px] text-white select-none">
            We are engaged in both transportation and sale of many cars, on our website you can find
            good and high-quality cars for yourself, and if you want to place your ad for the sale
            of a car, then {""}
            <span
              onClick={handleNavigate}
              className="border-b border-white hover:scale-[1.1] hover:border-amber-300 hover:text-amber-400 duration-300 cursor-pointer"
            >
              visit.
            </span>
          </div>
        </div>
        <div className="lg:2/3 w-full lg:h-full md:h-[400px] h-[300px] overflow-hidden cursor-pointer hover:opacity-80 duration-300">
          <img
            className="w-full h-full hover:scale-[1.05] duration-300"
            src="src\Assets\Images\container.png"
            alt="container"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;

