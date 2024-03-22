import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Contact() {
  return (
    <div className="w-full lg:w-3/4 bg-gray-100 min-h-screen overflow-auto">
      <div className="in-left px-4 py-20 lg:px-20">
        <button className="py-2.5 px-4 text-gray-700 bg-gray-200 text-sm flex items-center gap-2">
          <Link href="/">Home</Link>
          <ChevronRightIcon height={12} width={12} className="text-gray-500" />
          <span className="text-gray-500">Contact</span>
        </button>
        <h1 className="text-[30px] text-gray-900 font-extrabold mt-4">
          Contact
        </h1>

        <form className="my-8 space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-100 border border-gray-400 px-[10px] py-3.5 outline-none text-sm"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 border border-gray-400 px-[10px] py-3.5 outline-none text-sm"
          ></input>
          <textarea
            cols={40}
            rows={10}
            type="email"
            placeholder="Message"
            className="w-full bg-gray-100 border border-gray-400 px-[10px] py-3.5 outline-none text-sm"
          ></textarea>
          <button className="mt-4 text-white bg-black px-7 py-3.5">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
