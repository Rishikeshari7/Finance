import reactLogo from "./assets/react.svg";
import "./index.css";
import viteLogo from "/vite.svg";
import Background from "./assets/Background.png";
import logo from "./assets/logo.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Aimage from "./assets/Aimage.png";
import Ring from "./assets/Ring.png";
import iphoneTop from "./assets/iphoneTop.png";
import iphoneMiddle from "./assets/iphoneMiddle.png";
import iphoneTop2 from "./assets/iphoneTop2.png";
import { PiStarFourBold } from "react-icons/pi";
import cube1 from "./assets/cube1.png";
import cube2 from "./assets/cube2.png";
import iphoneMiddle2 from "./assets/iphoneMiddle2.png";
import { PiBellSimpleBold } from "react-icons/pi";
import Card from "./assets/Card.png";
import image5 from "./assets/5image.png";
import centerUser from "./assets/centerUser.png";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";
import user4 from "./assets/user4.png";
import { BiSolidQuoteLeft } from "react-icons/bi";
import BlackBG from "./assets/BlackBG.png"
import iphone3 from "./assets/iphone3.png"
import { FaApple } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

function App() {
  const queData = [
    {
      que: "The Best Financial Accounting App Ever!",
      ans: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    },
    {
      que: "The Best Financial Accounting App Ever!",
      ans: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    },
    {
      que: "The Best Financial Accounting App Ever!",
      ans: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    },
    {
      que: "The Best Financial Accounting App Ever!",
      ans: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    },
    {
      que: "The Best Financial Accounting App Ever!",
      ans: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    },
    {
      que: "The Best Financial Accounting App Ever!",
      ans: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    },
  ];
  return (
    <div
      className=" h-[990vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <nav className="flex justify-between items-center pt-7 gap-10 mx-[10rem]">
        <ul className="flex justify-center items-center text-[1.4rem] font-medium gap-[1.5rem]">
          <li className="mr-8 animate-fadeItem">
            <img src={logo} alt="Logo" />
          </li>
          <li className="font-bold text-customRed animate-fadeItem hover:underline">
            Home
          </li>
          <li className="animate-fadeItem animation-delay-1 hover:underline">
            AboutUs
          </li>
          <li className="animate-fadeItem animation-delay-2 hover:underline">
            Pricing
          </li>
          <li className="animate-fadeItem animation-delay-3 hover:underline">
            Features
          </li>
        </ul>
        <button className="text-white bg-black px-10 py-4 rounded-md border-2  transform transition-transform duration-300 hover:scale-105 hover:bg-transparent hover:text-black  hover:border-black animate-fadeItem">
          Download
        </button>
      </nav>

      {/* --------------------------Section1------------------------------------ */}
      <div className="flex justify-end items-center gap-10 mt-[10rem]">
        <div className="flex flex-col gap-8">
          <p className="text-[4rem] font-extrabold leading-[4rem] animate-fadeItem animation-delay-3">
            Make The Best <br /> Financial Decisions
          </p>
          <p className="text-[1.2rem] font-medium text-gray-500  animate-fadeItem animation-delay-3">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet{" "}
            <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <div className="flex justify-start items-center gap-10 text-[1.2rem]">
            <button className="flex justify-center items-center bg-black text-white gap-4 px-9 py-4 rounded-sm transition duration-300 transform hover:bg-customRed animate-fadeItem animation-delay-3">
              Get Started <HiArrowLongRight />
            </button>
            <button className="flex justify-center items-center font-semibold gap-3 transition duration-300 transform hover:text-customRed animate-fadeItem animation-delay-3">
              <MdOutlineSlowMotionVideo className="text-[2.3rem] font-thin" />{" "}
              Watch Video
            </button>
          </div>
          <div>
            <img
              className="pl-10 pt-6 animate-float"
              src={Aimage}
            />
          </div>
        </div>
        <div className="relative -mt-[19rem] animate-fadeItem animation-delay-4">
          <img
            className="z-10 animate-fadeItem animation-delay-2"
            src={Ring}
            alt="Ring"
          />
          <img
            className="absolute top-[135px] left-[180px] z-20 animate-float"
            src={iphoneTop}
            alt="iPhone Top"
          />
          <img
            className="absolute top-[55px] left-[60px] z-30 animate-float"
            src={iphoneMiddle}
            alt="iPhone Middle"
          />
          <img
            className="absolute top-[-35px] left-[-70px] z-40 animate-float"
            src={iphoneTop}
            alt="iPhone Top"
          />
        </div>
      </div>
      {/* --------------------------Section2------------------------------------ */}
      <div className="flex justify-center items-center gap-10 mt-[5rem] mr-[6rem] ">
        <div className="relative ">
          <img className="z-10 animate-floatr" src={Ring} />
          <img
            className="absolute top-[55px] left-[170px] z-20 animate-float"
            src={iphoneTop2}
          />
        </div>
        <div>
          <p className="uppercase text-customRed font-medium tracking-wide text-[1.25rem]">
            features
          </p>
          <p className="text-[3rem] font-extrabold tracking-tight">
            Uifry Premium
          </p>
          <div className="flex flex-col gap-8 mt-5 font-bold">
            <div className="flex flex-col gap-2 text-[1.2rem]">
              <p className="flex items-center gap-3">
                <PiStarFourBold className="text-customRed text-[1.5rem]" />
                Budgeting Intervals
              </p>
              <p className="font-medium text-gray-500">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu
                Lorem Porttitor.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-3">
                <img className="text-customRed " src={cube1} />
                Budgeting Intervals
              </p>
              <p className="font-medium text-gray-500">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu
                Lorem Porttitor.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-3">
                <img className="text-customRed " src={cube2} />
                Budgeting Intervals
              </p>
              <p className="font-medium text-gray-500">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu
                Lorem Porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------Section3------------------------------------ */}
      <div className="flex justify-center items-center gap-6 mt-5 ">
        <div className="w-[535px]">
          <p className="uppercase text-customRed font-medium tracking-wide text-[1.3rem]">
            advatnages
          </p>
          <p className="text-[3rem] font-extrabold tracking-tighter">
            Why Choose Uifry?
          </p>
          <p className="flex items-center gap-3 tracking-tighter mt-5">
            <PiBellSimpleBold className="bg-customRed text-white rounded-full p-3 text-[3rem]" />{" "}
            <span className="font-semibold text-[2rem]">
              Clever Notifications
            </span>{" "}
          </p>
          <p className="font-medium text-[1.1rem] text-gray-500 mt-5">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
        <div className="relative mt-10">
          <img className="z-10 animate-floatr" src={Ring} />
          <img
            className="absolute top-[55px] left-[170px] z-20 animate-float"
            src={iphoneMiddle2}
          />
        </div>
      </div>
      {/* --------------------------Section4------------------------------------ */}
      <div className="flex justify-center items-center gap-[7rem] mt-[3rem]  ">
        <div className="relative ">
          <img className="z-10 " src={Ring} />
          <img
            className="absolute top-[55px] left-[170px] animate-float"
            src={iphoneTop2}
          />
          <img
            className="absolute top-[215px] right-[145px] animate-floatr"
            src={Card}
          ></img>
        </div>
        <div className="w-[500px] -mt-10">
          <p className="flex items-center gap-3 tracking-tighter mt-5">
            <PiStarFourBold className="bg-customRed text-white rounded-full p-3 text-[3rem]" />{" "}
            <span className="font-semibold text-[2rem]">
              Fully Customizable
            </span>{" "}
          </p>
          <p className="font-medium text-[1.1rem] text-gray-500 mt-5">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
      </div>
      {/* --------------------------Section5------------------------------------ */}
      <div className="mt-[8rem]">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="uppercase font-semibold tracking-wider text-[1.3rem] mb-2">
            testimonial
          </p>
          <div className=" text-[3rem] font-extrabold leading-[3rem] flex flex-col justify-center items-center ">
            <p>What Our Users</p>
            <p> Say About Us?</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[5rem]">
          <div className="relative mt-3">
            <img className="z-10 animate-floatr" src={Ring} />
            <img
              className="absolute top-[175px] left-[190px] "
              src={centerUser}
            />
            <BiSolidQuoteLeft className="absolute bottom-[22rem] right-[9.2rem] bg-customRed text-white rounded-full p-5 text-[5rem] animate-float" />
            <img
              className="absolute top-[65px] left-[65px] animate-float"
              src={user1}
            ></img>
            <img
              className="absolute top-[70px] right-[-70px] animate-float"
              src={user2}
            ></img>
            <img
              className="absolute bottom-[5px] left-[65px] animate-float"
              src={user3}
            ></img>
            <img
              className="absolute bottom-[-5px] right-[-75px] animate-float"
              src={user4}
            ></img>
          </div>

          <div className="w-[500px] -mt-8">
            <p className="text-[1.8rem] font-extrabold leading-9 tracking-tighter">
              The Best Financial Accounting App Ever!
            </p>
            <p className="font-medium text-[1.1rem] text-gray-500 mt-5 mb-3">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
            <img src={image5}></img>
            <p className="text-[1.2rem] font-extrabold mt-4">Nick Jonas</p>
          </div>
        </div>
      </div>
      {/* --------------------------Section6------------------------------------ */}
      <div className="mx-[10rem] mt-[6rem]">
        <p className="text-customRed text-[1.3rem] font-medium tracking-widest ">
          FAQ
        </p>
        <p className="text-[3.5rem] font-extrabold leading-[4rem]">
          Frequently Asked <br /> Questions
        </p>

        <div className="grid grid-cols-2 gap-7 mt-[6rem]">
          {queData.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg p-7 shadow-lg transform transition duration-500 hover:scale-105  ${
                [0, 3, 4].includes(index)
                  ? "bg-customRed text-white hover:bg-red-500"
                  : "hover:bg-gray-100 "
              }`}
            >
              <p className="text-[2rem] font-bold leading-9 mb-2">{item.que}</p>
              <p className="text-[1.2rem]">{item.ans}</p>
            </div>
          ))}
        </div>
      </div>
      {/* --------------------------Section7------------------------------------ */}
      <div className="relative flex justify-center items-center mt-[14rem]">
        <img src={BlackBG}></img>
        <div className="absolute text-white left-[19rem]">
          <p className="text-[2.8rem] font-extrabold tracking-tight">Ready To Get Started?</p>
          <p className="text-gray-300 w-[500px] mt-1 mb-4">ReadRisus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
          <button className="flex justify-center items-center gap-2 text-black bg-white text-[1.1rem] font-medium rounded-md px-5 py-3 border-2 transform transition delay-100 hover:bg-black hover:text-white hover:border-white">Download App <FaApple className="text-[2rem]"/> </button>
        </div>
        <div className="absolute right-[13.4rem] ">
          <img src={iphone3}></img>
        </div>
      </div>
      {/* --------------------------Footer------------------------------------ */}
      <div className="flex justify-center items-start mt-[18rem] gap-[5rem] font-semibold">
        <ul className="flex flex-col gap-3 justify-start items-start mt-3 ">
          <img className="h-[2rem] object-contain " src={logo}></img>
          <li className="flex justify-center items-center gap-1 ml-1"><IoMail className="text-customRed"/> Help@Frybix.Com</li>
          <li className="flex justify-center items-center gap-1 ml-1"><IoCall className="text-customRed"/> +1234 456 678 89</li>
        </ul>

        <ul className="flex flex-col gap-3 justify-start items-start">
          <li className="font-bold text-[2rem] tracking-wide mb-1 hover:text-customRed ">Links</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Bookings</li>
          <li>Blog</li>
        </ul>
        <ul className="flex flex-col gap-3 justify-start items-start">
        <li className="font-bold text-[2rem] tracking-wide mb-1 hover:text-customRed ">Legal</li>
        <li>Terms Of Use</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        </ul>
        <ul className="flex flex-col gap-3 justify-start items-start">
        <li className="font-bold text-[2rem] tracking-wide mb-1 hover:text-customRed">Product</li>
        <li>Take Tour</li>
        <li>Live Chat</li>
        <li>Reviews</li>
        </ul>
        <ul className=" relative flex flex-col gap-3 justify-start items-start">
        <li className="font-bold text-[2rem] tracking-wide mb-1 hover:text-customRed">Newsletter</li>
        <li>Stay Up To Date</li>
        <input className="font-thin w-[19rem] bg-gray-100 p-5 rounded-md mt-3" type="text" placeholder="Your Email"></input>
        <button className="absolute bg-black font-medium  text-white p-5 px-10 right-[0rem] bottom-[0rem] rounded-md  hover:bg-customRed hover:text-white hover:border-customRed">Subscribe</button>
        </ul>
      </div>
      <div className="border-2 border-b-2 mt-[6rem] mx-[10rem]" ></div>
      <div className="flex justify-center items-center font-semibold mt-[6rem] ">
        <p>Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
