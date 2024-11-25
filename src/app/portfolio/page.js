import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 py-5 lg:w-3/4 lg:py-20 lg:pr-28 lg:pl-16 dark:bg-[#333333] overflow-auto">
      <div className="in-left">
        <button className="py-2.5 px-4 text-gray-700 bg-gray-200 text-sm flex items-center gap-2 dark:bg-[#222222]">
          <Link href="/" className="dark:text-white">
            Home
          </Link>
          <ChevronRightIcon
            height={12}
            width={12}
            className="text-gray-500 dark:text-white"
          />
          <span className="text-gray-500 dark:text-white">Portfolio</span>
        </button>
        <h1 className="text-[30px] text-gray-900 font-extrabold mt-4 dark:text-white">
            Coming soon ...
        </h1>
      </div>
    </div>
  );
}

export default Portfolio;
