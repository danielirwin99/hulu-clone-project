import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="TRENDING" Icon={CheckBadgeIcon} />
        <HeaderItem title="TRENDING" Icon={RectangleStackIcon} />
        <HeaderItem title="TRENDING" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="TRENDING" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu-logo"
      />
    </header>
  );
};

export default Header;
