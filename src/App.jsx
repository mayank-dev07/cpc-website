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
        },
      }}
    >
    
      <div className="flex flex-col min-h-screen max-w-screen  bg-[#00142C] text-white">
        <Header scrollToSection={scrollToSection} />
        <Main />
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
