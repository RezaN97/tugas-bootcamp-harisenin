import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/solid"
import { LogoutIcon } from "@heroicons/react/solid"
import iconAvatar from '../img/navbar/avatar.png'



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className='md:w-[76px] md:h-[40px] md:gap-[8px] max-sm:w-[40px] max-sm:h-[20px] flex sm:gap-[4px]'>
      <img className='md:w-[40px] md:h-[40px]  sm:w-[20px] sm:h-[20px]' src={iconAvatar} alt="User Avatar"/>
      <ChevronDownIcon onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white w-[30px] h-[30px] ml-2 mt-2" />
      {isOpen && (
        <div className="absolute right-16 top-15 mt-2 w-48 z-1 bg-white border rounded-md shadow-lg">
          <a href="#" className="flex gap-4 items-center rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
            <span><UserIcon className="w-5 h-5"/></span> Profile Saya
          </a>
          <a href="#" className="flex gap-4 items-center rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
            <span><StarIcon className="w-5 h-5 "/></span> Ubah Premium
          </a>
          <a href="#" className="flex gap-4 items-center rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
            <span><LogoutIcon className="w-5 h-5"/></span> Keluar
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
