import React from "react";
import Terminal from "react-console-emulator";

const members = [
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
];

const domains = [
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
];

const MyTerminal = () => {
  const commands = {
    members: {
      description: "Show all members of our club.",
      fn: () => {
        return members.map((item) => `${item.name}\n`);
      },
    },
    domain: {
      description: "List of domain we have.",
      fn: () => {
        return domains.map((item) => `${item.name}\n`);
      },
    },
    about: {
      description: "About club.",
      fn: () => {
        return domains.map((item) => `${item.name}\n`);
      },
    },
    event: {
      description: "Check upcoming events.",
      fn: () => {
        return domains.map((item) => `${item.name}\n`);
      },
    },
  };

  return (
    <div className="h-full w-full ">
      <div className="text-[#0EC9AC] text-center w-full p-2">
        Welcome to Cyber Security Club! Type 'help' to display all the commands.
      </div>
      <Terminal commands={commands} promptLabel={">>>"} />
    </div>
  );
};

export default MyTerminal;
