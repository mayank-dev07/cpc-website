// App.js
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { ConfigProvider } from "antd";
// import ThreeCanvas from "./components/ParticleWave";
import ParticleWave from "./components/Particles";

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
            colorBgElevated: "#030213",
            colorText: "#ffffff",
          },
          Timeline: {
            tailColor: "#05b3d1",
            margin: 30,
            lineHeight: 8,
            lineType: "dashed",
            dotBg: "transparent",
            // controlHeightLG: 40,
          },
        },
      }}
    >
      <div className="flex flex-col min-h-screen max-w-screen relative  bg-[#030213] text-white font-mono">
        <Header scrollToSection={scrollToSection} />
        {/* <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video> */}
        <div className="w-full h-full flex flex-col gap-16">
          <Main />
        </div>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
