import React, { useState, useRef } from "react";
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
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
  { name: "epmdpomwe" },
];

const helps = [
  { name: "about:- About club." },
  { name: " domain:- List of domain we have." },
  { name: " member:- Show all members of our club." },
  { name: " event:- Check upcoming events." },
  { name: "      help:- To display all the available commands." },
];

const MyTerminal = () => {
  const WelcomeMessage = () => (
    <div className="text-[#0EC9AC] text-base md:text-lg">
      <div>Enter one of these commands:</div>
      <br />
      about:- About club.
      <br />
      domain:- List of domain we have.
      <br />
      member:- Show all members of our club.
      <br />
      event:- Check upcoming events.
      <br />
      help:- To display all the available commands
      <br />
      <br />
    </div>
  );

  const errorText = "Please enter appropriate command, type help to know more.";

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
    help: {
      description: "To display all the available commands.",
      fn: () => {
        return helps.map((item) => `${item.name}\n`);
      },
    },
  };

  return (
    <div className="h-[400px] md:h-[500px] w-full ">
      <div className="text-[#0EC9AC] text-center w-full text-base md:text-xl py-4">
        <>Welcome to Cyber Security Club!</>
      </div>
      <Terminal
        welcomeMessage={<WelcomeMessage />}
        errorText={errorText}
        commands={commands}
        noDefaults
        style={{ height: "800px" }}
        promptLabelStyle={{ color: "#0EC9AC" }}
        promptLabel={">>>"}
        inputStyle={{ color: "#0EC9AC" }}
      />
    </div>
  );
};

export default MyTerminal;
