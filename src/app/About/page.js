import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import PaperAirplaneItem from "../components/PaperAirplaneItem";
export default function About() {
  return (
    <div className="w-full lg:w-3/4 bg-gray-100 min-h-screen overflow-auto dark:bg-[#333333]">
      <div className="in-left px-4 py-20 lg:px-20">
        <button className="py-2.5 px-4 text-gray-700 bg-gray-200 text-xs font-semibold dark:bg-[#222222] dark:text-white">
          ABOUT
        </button>
        <h1 className="text-[30px] text-gray-900 font-extrabold mt-4 dark:text-white">
          About me
        </h1>
        <div className="relative w-full h-[300px]  md:w-[65%] lg:h-[500px]  mt-10 mb-8  border-8 border-gray-500/60 dark:grayscale">
          <Image src="/portrait.JPG" alt="portrait" layout="fill" />
        </div>
        <h1 className="text-[22px] text-gray-900 font-bold dark:text-white">
          Kastriot Krasniqi
        </h1>
        <p className="text-gray-500 my-2 text-sm dark:text-gray-300">
          Web Developer
        </p>

        <div className="border-b-[0.5px] border-gray-400 my-8 dark:border-gray-500"></div>

        <p className="text-gray-500 text-[15px] leading-7 dark:text-gray-300">
          {`Hi, I'm Kastriot, a 24-year-old from Kosovo. I pursued my passion for
          technology by studying computer science for three years after high
          school. Eager to refine my skills, I completed a six-month bootcamp in
          web development, which propelled me into an internship as a back-end
          web developer at a prominent agency. Within just three months, I
          transitioned to a full-time role, where I've gained valuable
          experience, where I've since been honing my skills in web
          development..`}
        </p>
        <br />
        <p className="text-gray-500 text-[15px] leading-7 dark:text-gray-300">
          I have a solid foundation in managing and maintaining content
          management systems (CMS) for multiple websites, ensuring their
          seamless operation and efficient content delivery. Additionally, my
          extensive experience includes implementing database schema changes and
          optimizations, significantly enhancing system efficiency and
          performance. With meticulous attention to detail, I adeptly manage
          website hosting to ensure optimal performance and reliability,
          providing users with a smooth browsing experience. Furthermore, I have
          demonstrated proficiency in coordinating with remote development teams
          through Git-based workflows, facilitating seamless collaboration and
          version control. Remaining proactive in monitoring industry trends and
          emerging technologies, I continuously seek opportunities to enhance
          projects and keep them at the forefront of innovation.
        </p>
        <div className="border-b-[0.5px] border-gray-400 my-8 dark:border-gray-500"></div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 text-sm text-gray-500">
          <div className="w-full lg:w-1/2  flex  gap-12">
            <ul className="space-y-1 text-gray-800 dark:text-white font-semibold">
              <li className="font-semibold">Birthday:</li>
              <li>Age:</li>
              <li>Address:</li>
              <li>Email:</li>
              <li>Phone:</li>
            </ul>
            <ul className="space-y-1 dark:text-gray-400">
              <li>04.10.1999</li>
              <li>24</li>
              <li>Rahovec, Kosovo</li>
              <li>krasniqikastriot01@gmail.com</li>
              <li>+38349493450</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex gap-8 lg:gap-12">
            <ul className="space-y-1 font-semibold text-gray-800 dark:text-white">
              <li>Nationality:</li>
              <li>Study:</li>
              <li>Deegre:</li>
              <li>Interests:</li>
              <li>Freelance:</li>
            </ul>
            <ul className="space-y-1 dark:text-gray-400">
              <li>Kosovo</li>
              <li>University for Business and Technology</li>
              <li>Bachelor</li>
              <li>Playing Football</li>
              <li>Available</li>
            </ul>
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-400 my-8 dark:border-gray-500"></div>
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

      <div className="in-left px-4 py-24 lg:px-20 bg-white flex flex-col lg:flex-row gap-24 dark:bg-[#222222]">
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8 dark:text-white">
            Programming Skills
          </h2>

          <ProgressBar percentage={90} name="Laravel" />
          <ProgressBar percentage={75} name="Javascript" />
          <ProgressBar percentage={65} name="Tailwind" />
        </div>
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8 dark:text-white">
            Language Skills
          </h2>

          <ProgressBar percentage={100} name="Albanian" />
          <ProgressBar percentage={70} name="English" />
        </div>
      </div>

      <div className="in-left px-4 py-24 lg:px-20 bg-gray-100 flex flex-col lg:flex-row gap-24 dark:bg-[#333333]">
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8 dark:text-white">
            Knowledge
          </h2>

          <ul className="text-gray-500 text-sm space-y-3 dark:text-gray-300">
            <PaperAirplaneItem name={"Laravel, Livewire, Alpine JS"} />
            <PaperAirplaneItem name={"Vue, React, Next JS"} />
            <PaperAirplaneItem name={"PHP, Wordpress, MySQL"} />
            <PaperAirplaneItem name={"Javascript, Jquery, Ajax"} />
            <PaperAirplaneItem name={"Bootstrap, Tailwind"} />
            <PaperAirplaneItem name={"Git, Hosting"} />
          </ul>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-5  text-sm">
          <h2 className="font-semibold text-[22px] text-gray-900 mb-8 dark:text-white">
            Interests
          </h2>

          <ul className="text-gray-500 text-sm space-y-3 dark:text-gray-300">
            <PaperAirplaneItem name={"Mobile Applications"} />
            <PaperAirplaneItem name={"Desktop Applications"} />
            <PaperAirplaneItem name={"Ecommerce"} />
          </ul>
        </div>
      </div>
    </div>
  );
}
