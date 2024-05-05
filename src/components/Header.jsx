import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { Menu, X } from "lucide-react";

const Header = ({ scrollToSection }) => {
  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handelDrawerClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <div className="flex z-20 h-16 bg-slate-800 border-b-[1px] border-[#00142C] text-[#0EC9AC] justify-between items-center gap-8 fixed top-0 right-0 w-full font-medium  px-8">
      <div>$~</div>
      <div className="hidden md:flex gap-8 ">
        <p className="cursor-pointer" onClick={() => handleLinkClick("home")}>
          HOME
        </p>
        <p className="cursor-pointer" onClick={() => handleLinkClick("domain")}>
          DOMAIN
        </p>
        <p className="cursor-pointer" onClick={() => handleLinkClick("event")}>
          EVENTS
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleLinkClick("members")}
        >
          MEMBERS
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleLinkClick("newsletter")}
        >
          NEWSLETTER
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleLinkClick("timeline")}
        >
          TIMELINE
        </p>
      </div>

      <div className="hidden md:flex">~$</div>

      <Menu onClick={showDrawer} className="flex md:hidden " />

      <Drawer
        title={
          <>
            <div className="w-full flex flex-row justify-between  ">
              <div>Cyber Peace cell</div>
              <X onClick={onClose} />
            </div>
          </>
        }
        width={"80%"}
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col gap-8 text-white">
          <p
            className="cursor-pointer"
            onClick={() => handelDrawerClick("home")}
          >
            HOME
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handelDrawerClick("domain")}
          >
            DOMAIN
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handelDrawerClick("event")}
          >
            EVENTS
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handelDrawerClick("timeline")}
          >
            TIMELINE
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handelDrawerClick("newsletter")}
          >
            NEWSLETTER
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handelDrawerClick("members")}
          >
            MEMBERS
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
