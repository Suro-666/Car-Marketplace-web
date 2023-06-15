import { Carousel } from "antd";

const CarPageHeader = () => {
  return (
    <div className="lg:h-[450px] h-auto bg-[#ffcb5b] w-full my-[30px]">
      <div className="w-full h-full p-[10px] flex justify-center items-center">
        <div className="w-1/4 h-full p-[10px] flex justify-center items-start">
          <div className="w-2/3 font-bold text-white text-[32px] font-serif ">
            Buy your dream car from our website cheaper than the market price.
          </div>
        </div>

        <div className="w-2/4">
          <Carousel autoplay={true}>
            <div className="w-full h-[350px]">
              <img className="h-full w-full" src="src\Assets\Images\car1.png" alt="" />
            </div>
            <div className="w-full h-[350px]">
              <img className="h-full w-full" src="src\Assets\Images\car2.png" alt="" />
            </div>
            <div className="w-full h-[350px]">
              <img className="h-full w-full" src="src\Assets\Images\car3.png" alt="" />
            </div>
            <div className="w-full h-[350px]">
              <img className="h-full w-full" src="src\Assets\Images\car4.png" alt="" />
            </div>
            <div className="w-full h-[350px]">
              <img className="h-full w-full" src="src\Assets\Images\car5.png" alt="" />
            </div>
          </Carousel>
        </div>

        <div className="w-1/4 h-full p-[10px] flex justify-center items-start">
          <div className="w-2/3 font-bold text-white text-[32px] font-serif ">
            To quickly sell your car, fill out the form and add the car to the feed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPageHeader;
