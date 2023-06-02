import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Nav from "./components/Nav";
import controller from "./controller";

const Header = () => {
  const navigate = useNavigate();
  const { onLogOut, userData } = controller();
  return (
    <div className="fixed z-[10] w-full bg-[#1D1B1B] border-b border-amber-500 ">
      <div className="w-full xl:w-[1280px] m-auto">
        <div className="mx-[60px] xl:mx-[20px] h-[120px] xl:h-[90px] flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="overflow-hidden cursor-pointer hover:scale-[1.05] duration-300 animate-pulse"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="60"
              viewBox="0 0 1207.000000 585.000000"
            >
              <g
                transform="translate(0.000000,585.000000) scale(0.100000,-0.100000)"
                fill="#EE9A0B"
                stroke="none"
              >
                <path
                  d="M4420 5540 c-1029 -88 -2057 -508 -2835 -1158 -122 -102 -133 -109
-185 -116 -126 -16 -460 -89 -571 -126 -311 -102 -458 -229 -557 -481 -39 -97
-67 -203 -142 -524 -33 -143 -63 -269 -67 -280 -3 -11 35 20 86 68 102 98 205
157 274 157 224 0 318 -395 305 -1283 l-5 -337 26 -7 c193 -49 3407 -831 3408
-829 2 1 -27 74 -62 161 -255 620 -327 1080 -230 1452 72 272 238 454 471 513
326 84 688 -114 874 -476 99 -193 144 -402 143 -669 -1 -337 -81 -688 -251
-1100 l-50 -120 37 -7 c20 -3 127 -18 237 -32 955 -123 2236 -155 3294 -80
1174 82 2122 297 2697 610 97 53 327 204 320 210 -2 3 -17 0 -32 -6 -138 -52
-829 -221 -1204 -295 -1382 -270 -3065 -358 -4551 -239 -204 16 -430 40 -436
47 -2 2 5 26 16 55 11 28 35 104 55 169 177 601 162 1150 -42 1558 -71 140
-137 232 -248 340 -158 155 -330 250 -532 291 -96 20 -319 15 -408 -10 -78
-21 -189 -74 -262 -124 -66 -45 -174 -154 -221 -224 -81 -119 -146 -285 -179
-459 -24 -130 -24 -440 1 -599 25 -166 100 -475 142 -583 4 -11 1 -17 -7 -17
-8 0 -628 150 -1379 333 l-1365 333 -6 340 c-7 339 -16 483 -45 689 -68 486
-207 725 -414 713 l-62 -3 6 30 c13 63 88 194 149 261 142 155 316 229 679
290 161 26 215 38 262 56 15 6 85 60 155 120 757 655 1642 1025 2621 1099 193
14 615 6 800 -15 174 -21 390 -59 543 -95 545 -131 1078 -386 1427 -681 36
-30 74 -62 85 -70 19 -14 19 -14 4 5 -175 222 -362 415 -519 537 -421 325
-918 523 -1495 594 -153 18 -601 27 -755 14z"
                />
                <path
                  d="M7470 4310 c-894 -31 -1644 -110 -3405 -360 -385 -55 -806 -113 -935
-130 -585 -75 -1057 -108 -1309 -91 -80 6 -147 9 -148 7 -4 -4 239 -42 357
-56 260 -30 736 -38 1130 -20 462 22 888 57 1800 150 1320 134 1781 173 2390
200 291 13 903 13 1145 0 1158 -62 1967 -312 2529 -781 l99 -83 -34 -25 c-109
-83 -168 -164 -193 -266 -9 -34 -20 -154 -26 -280 -5 -121 -14 -240 -19 -265
-5 -25 -9 -45 -8 -46 1 0 150 86 331 193 180 106 332 193 336 193 19 0 110
-177 165 -319 115 -297 153 -691 100 -1035 -8 -55 -13 -101 -11 -103 10 -10
107 114 139 178 44 92 63 164 79 302 29 262 -48 674 -187 989 -121 274 -378
601 -646 818 -591 481 -1459 751 -2639 820 -246 14 -774 19 -1040 10z m3815
-1337 c53 -62 145 -185 145 -192 0 -3 -89 -56 -198 -118 -172 -97 -198 -109
-207 -95 -5 10 -10 69 -10 132 0 100 3 121 24 162 12 26 41 64 63 84 37 33
109 73 133 74 6 0 29 -21 50 -47z"
                />
                <path
                  d="M6077 2980 c-177 -14 -203 -20 -251 -51 -44 -29 -106 -102 -106 -123
0 -6 44 -38 98 -70 53 -33 211 -129 350 -213 l253 -154 1097 -55 c603 -30
1111 -53 1129 -52 27 2 -5 19 -170 90 -111 48 -335 145 -497 216 -569 250
-873 347 -1250 397 -135 18 -513 27 -653 15z m683 -155 c136 -20 364 -77 493
-121 56 -20 250 -93 432 -164 181 -70 348 -133 370 -140 57 -18 69 -32 20 -25
-22 3 -319 28 -660 55 -341 28 -695 57 -786 65 l-165 14 -250 151 c-137 84
-251 154 -253 156 -10 9 10 13 124 22 166 14 545 7 675 -13z"
                />
              </g>
            </svg>
          </div>
          <div className="h-full border w-[1px] border-white"></div>
          <div className="hidden w-1/3 md:flex justify-around items-center">
            <Nav />
          </div>
          <div className="hidden md:block h-full border w-[1px] border-white"></div>
          {/* BURGER MENU */}
          <div
            className={`hidden md:flex ${
              userData !== null ? "justify-between" : "justify-center"
            } items-center w-[140px]`}
          >
            <Button />
            {userData !== null ? (
              <button onClick={() => onLogOut()} className="text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 hover:text-white duration-300 hover:scale-[1.1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
          <div
            onClick={() => alert("dadsadas")}
            className="block: md:hidden text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
