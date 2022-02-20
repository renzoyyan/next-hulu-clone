import Image from "next/image";
import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFY" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="LOGIN" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        alt="hulu"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
