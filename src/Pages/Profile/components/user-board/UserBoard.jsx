import React from "react";
import controller from "../../controller";
import Spinner from "../../../../Components/Spinner/Spinner";
import Options from "./component/Options";

const UserBoard = React.memo(function UserBoard() {
  const { currentUser } = controller();
  return (
    <div className="w-full z-[0] h-[500px] mt-[20px] rounded-2xl flex flex-col justify-between items-center">
      <div className="p-[10px] w-full h-full relative">
        <div className="w-full h-[50%] bg-amber-300 rounded-t-xl flex justify-end items-start">
          {currentUser === null ? (
            <div className="mr-[5%] mt-[1%] relative">
              <Spinner />
            </div>
          ) : (
            <Options currentUser={currentUser} />
          )}
        </div>
        <div className="w-[160px] h-[160px] bg-white rounded-full absolute top-1/3 left-10 flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-amber-300 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        {currentUser === null ? (
          <div className="w-full h-[50%] pt-[80px] ">
            <Spinner />
          </div>
        ) : (
          <div className="w-full h-[50%] pt-[80px] border-b border-r border-l rounded-b-xl border-amber-300 flex">
            <div className="w-full h-full flex flex-col pl-[2.5%] gap-[15px]">
              <div className="flex justify-start items-center font-bold text-[25px]">{`${currentUser?.name.toUpperCase()} ${currentUser?.surname.toUpperCase()}`}</div>
              <div className="flex justify-start items-center text-[18px]">
                <span className="font-bold">E-mail :</span>
                <span>{currentUser?.email}</span>
              </div>
              <div className="flex justify-start items-center text-[18px]">
                <span className="font-bold">Uid :</span>
                <span>{currentUser?.uid}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default UserBoard;
