import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const PaperAirplaneItem = ({name}) => {
  return (
    <li className="flex items-center gap-4">
      <PaperAirplaneIcon width={10} height={10} fill="black" />
      {name}
    </li>
  );
};

export default PaperAirplaneItem;
