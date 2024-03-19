import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import PaperAirplaneItem from "../components/PaperAirplaneItem";
export default function About() {
  return (
    <div className="w-full lg:w-3/4 bg-gray-100  overflow-auto">
      <div className="in-left px-4 py-5 lg:py-20 lg:px-20">
        <button className="py-2.5 px-4 text-gray-700 bg-gray-200 text-xs font-semibold">
          ABOUT
        </button>
        <h1 className="text-[30px] text-gray-900 font-extrabold mt-4">
          About me
        </h1>
        <div className="relative w-full h-[400px] lg:w-[90%] lg:h-[580px]  mt-10 mb-8  border-8 border-gray-500/60">
          <Image src="/portrait.JPG" alt="portrait" layout="fill" />
        </div>
        <h1 className="text-[22px] text-gray-900 font-bold">
          Kastriot Krasniqi
        </h1>
        <p className="text-gray-500 my-2 text-sm">Web Developer</p>

        <div className="border-b-[0.5px] border-gray-400 my-8"></div>

        <p className="text-gray-500 text-[15px] leading-7">
          Hi, my name is Adriano Smith and I began using WordPress when it first
          began. I’ve spent most of my waking hours for the last ten years
          designing, programming and operating WordPress sites.
        </p>
        <br />
        <p className="text-gray-500 text-[15px] leading-7">
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform. I go beyond to produce sites with a unique,
          outstanding, contemporary look-and-feel. With extensive knowledge of
          web mechanics, I’m able to optimize complex integrations to require
          little-to-no maintenance while running on their own for years.
        </p>
        <div className="border-b-[0.5px] border-gray-400 my-8 "></div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 text-sm text-gray-500">
          <div className="w-full lg:w-1/2  flex  gap-12">
            <ul>
              <li className="font-semibold text-gray-800">Birthday:</li>
              <li className="font-semibold text-gray-800">Age:</li>
              <li className="font-semibold text-gray-800">Address:</li>
              <li className="font-semibold text-gray-800">Email:</li>
              <li className="font-semibold text-gray-800">Phone:</li>
            </ul>
            <ul>
              <li>04.10.1999</li>
              <li>24</li>
              <li>Rahovec, Kosovo</li>
              <li>krasniqikastriot01@gmail.com</li>
              <li>+38349493450</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex gap-8 lg:gap-12">
            <ul>
              <li className="font-semibold text-gray-800">Nationality:</li>
              <li className="font-semibold text-gray-800">Study:</li>
              <li className="font-semibold text-gray-800">Deegre:</li>
              <li className="font-semibold text-gray-800">Interests:</li>
              <li className="font-semibold text-gray-800">Freelance:</li>
            </ul>
            <ul>
              <li>Kosovo</li>
              <li>University for Business and Technology</li>
              <li>Bachelor</li>
              <li>Playing Football</li>
              <li>Available</li>
            </ul>
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-400 my-8 "></div>
        <button className="mt-4">
          <a
            href="/Kastriot_Krasniqi_CV.pdf"
            className="text-white bg-black px-7 py-3.5"
            download={true}
          >
            Download CV
          </a>
        </button>
      </div>

      <div className="in-left px-4 py-5 lg:py-24 lg:px-20 bg-white flex gap-24">
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8">
            Programming Skills
          </h2>

          <ProgressBar percentage={85} name="Javascript" />
          <ProgressBar percentage={65} name="Html" />
          <ProgressBar percentage={22} name="Css" />
        </div>
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8">
            Language Skills
          </h2>

          <ProgressBar percentage={85} name="Javascript" />
          <ProgressBar percentage={65} name="Html" />
          <ProgressBar percentage={22} name="Css" />
        </div>
      </div>

      <div className="in-left px-4 py-5 lg:py-24 lg:px-20 bg-gray-100 flex gap-24">
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8">
            Knowledge
          </h2>

          <ul className="text-gray-500 text-sm space-y-3">
            <PaperAirplaneItem name={"Laravel, Livewire, Alpine JS"} />
            <PaperAirplaneItem name={"Vue, React, Next JS"} />
            <PaperAirplaneItem name={"PHP, Wordpress, MySQL"} />
            <PaperAirplaneItem name={"Javascript, Jquery, Ajax"} />
            <PaperAirplaneItem name={"Bootstrap, Tailwind"} />
            <PaperAirplaneItem name={"Git, Hosting"} />
          </ul>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8">
            Interests
          </h2>

          <ul className="text-gray-500 text-sm space-y-3">
            <PaperAirplaneItem name={"Mobile Applications"} />
            <PaperAirplaneItem name={"Desktop Applications"} />
            <PaperAirplaneItem name={"Ecommerce"} />
          </ul>
        </div>
      </div>
    </div>
  );
}
