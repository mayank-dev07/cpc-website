// App.js
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-[#00142C] text-white'>
        <Header scrollToSection={scrollToSection} />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
