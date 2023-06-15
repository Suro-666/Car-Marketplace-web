import CarPageHeader from "./components/CarPageHeader";
import CarsBlock from "./components/CarsBlock";
import FilterBlock from "./components/FilterBlock";

const Cars = () => {
  return (
    <div className="w-full xl:w-[1280px] m-auto bg-white min-h-screen">
      <CarPageHeader />

      <div className="w-full py-[20px] px-[20px]">
        <div className="w-full h-full flex">
          <FilterBlock />
          <CarsBlock />
        </div>
      </div>
    </div>
  );
};

export default Cars;
