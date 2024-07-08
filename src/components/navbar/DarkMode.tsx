import { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="">
      <MdOutlineWbSunny
        className={`${isDarkMode && "hidden"} w-5 h-5 cursor-pointer`}
        onClick={() => {
          setIsDarkMode(true);
        }}
      />
      <LuMoon
        className={`${!isDarkMode && "hidden"} w-5 h-5 cursor-pointer`}
        onClick={() => {
          setIsDarkMode(false);
        }}
      />
    </div>
  );
};

export default DarkMode;
