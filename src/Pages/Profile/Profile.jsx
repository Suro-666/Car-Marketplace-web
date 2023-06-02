import React, { useState } from "react";
import UserBoard from "./components/user-board/UserBoard";
import AddAdvert from "./components/add-advert/AddAdvert";

const Profile = () => {
  const [bool, setBool] = useState(false);
  return (
    <div className="w-full xl:w-[1280px] m-auto bg-white min-h-screen">
      <div className="mx-[20px] flex flex-col justify-between items-center gap-[20px]">
        <UserBoard />
        <div className="text-[25px] font-bold flex justify-center items-center">
          Add your ad to the feed
          <button
            onClick={() => setBool(!bool)}
            className={`ml-[5px] ${
              bool && "rotate-[180deg]"
            } duration-300 hover:text-[red] flex justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <AddAdvert bool={bool} />
      </div>
    </div>
  );
};

export default Profile;
