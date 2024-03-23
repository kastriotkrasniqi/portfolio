import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <div className="w-full lg:w-3/4 bg-gray-100 min-h-screen overflow-auto dark:bg-[#333333]">
      <div className="in-left px-4 py-20 lg:px-20">
        <button className="py-2.5 px-4 text-gray-700 bg-gray-200 text-sm flex items-center gap-2 dark:bg-[#222222]">
          <Link href="/" className="dark:text-white">
            Home
          </Link>
          <ChevronRightIcon
            height={12}
            width={12}
            className="text-gray-500 dark:text-white"
          />
          <span className="text-gray-500 dark:text-white">Contact</span>
        </button>
        <h1 className="text-[30px] text-gray-900 font-extrabold mt-4 dark:text-white">
          Contact
        </h1>

        <ContactForm />
      </div>
    </div>
  );
}
