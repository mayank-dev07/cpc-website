import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";

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

  return (
    <div className="flex z-20 h-16 bg-slate-800 border-[1px] border-[#00142C] text-[#0EC9AC] justify-between items-center gap-8 fixed top-0 right-0 w-full font-medium  px-8">
      <div>$~</div>
      <div className="flex gap-8">
        <p className="cursor-pointer" onClick={() => handleLinkClick("first")}>
          HOME
        </p>
        <p className="cursor-pointer" onClick={() => handleLinkClick("second")}>
          DOMIAN
        </p>
        <p className="cursor-pointer" onClick={() => handleLinkClick("event")}>
          Events
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleLinkClick("members")}
        >
          MEMBERS
        </p>
      </div>

      <div>~$</div>

      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}

      <Drawer
        title="Cyber Peace Cell"
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col gap-8 text-white">
          <p
            className="cursor-pointer"
            onClick={() => handleLinkClick("first")}
          >
            HOME
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleLinkClick("second")}
          >
            DOMIAN
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleLinkClick("event")}
          >
            Events
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleLinkClick("members")}
          >
            MEMBERS
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
