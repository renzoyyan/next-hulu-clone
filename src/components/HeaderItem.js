import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center w-12 ease-out cursor-pointer sm:w-20 group hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce " />
      <h2 className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </h2>
    </div>
  );
};

export default HeaderItem;
