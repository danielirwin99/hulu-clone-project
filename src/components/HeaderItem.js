import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
