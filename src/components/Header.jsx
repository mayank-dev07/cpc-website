import React from "react";

const Header = ({ scrollToSection }) => {
  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="flex z-20 h-16 bg-slate-800 border-[1px] border-[#00142C] justify-center items-center gap-8 fixed top-0 right-0 w-full font-medium ">
      <p className="cursor-pointer" onClick={() => handleLinkClick("first")}>
        HOME
      </p>
      <p className="cursor-pointer" onClick={() => handleLinkClick("second")}>
        DOMIAN
      </p>
      <p className="cursor-pointer" onClick={() => handleLinkClick("members")}>
        MEMBERS
      </p>
    </div>
  );
};

export default Header;
