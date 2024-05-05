// App.js
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ConfigProvider } from "antd";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: "#00142C",
            colorText: "#ffffff",
          },
          Timeline: {
            tailColor: "#0EC9AC",
            // margin: 30,
            // lineHeight: 2,
            lineType: "dashed",
            dotBg: "transparent",
            // controlHeightLG: 40,
          },
        },
      }}
    >
      <div className="flex flex-col min-h-screen max-w-screen  bg-[#00142C] text-white font-mono">
        <Header scrollToSection={scrollToSection} />
        <div className="fixed h-screen w-full flex justify-center items-center ">
          <img
            src="/cpclogo.png"
            alt=""
            className="h-max bg-cover w-full md:w-1/2 lg:w-1/3 opacity-40"
          />
        </div>
        <Main />
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
