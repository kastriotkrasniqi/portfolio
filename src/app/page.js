import SocialNetworks from "./components/SocialNetworks";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 py-5 lg:w-3/4 lg:py-40 lg:pr-28 lg:pl-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-full w-full gap-8 in-left">
        <div className="relative h-full  lg:h-64  w-full lg:w-1/3 flex items-center justify-center">
          <div className="blob_1 border-8 border-gray-500/60 w-72 h-72 lg:h-64 lg:w-64"></div>
        </div>
        <div className="space-y-4 lg:w-2/3 lg:px-6">
          <h1 className="text-3xl lg:text-[50px] font-extrabold tracking-wide leading-[50px]">
            KASTRIOT KRASNIQI
          </h1>
          <p className="text-gray-500 leading-7">
            I am a Backend Developer at heart and create features that are best
            suited for the job at hand.
          </p>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
}
