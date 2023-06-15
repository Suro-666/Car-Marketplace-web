import InfoBlock from "./components/info-block/InfoBlock";
import Article from "./components/accordion/Article";

const DefaultPage = () => {
  return (
    <div className="w-full xl:w-[1280px] m-auto bg-white min-h-screen">
      <div className="mx-[20px] flex flex-col ">
        <InfoBlock />
        <Article />
      </div>
    </div>
  );
};

export default DefaultPage;
