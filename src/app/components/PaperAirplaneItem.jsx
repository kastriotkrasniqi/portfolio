import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const PaperAirplaneItem = ({name}) => {
  return (
    <li className="flex items-center gap-4 dark:text-gray-300 ">
      <PaperAirplaneIcon width={10} height={10} className="dark:fill-white fill-black" />
      {name}
    </li>
  );
};

export default PaperAirplaneItem;
