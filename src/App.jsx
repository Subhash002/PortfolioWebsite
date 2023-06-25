import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Design from "./components/Design";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  useEffect(() => {
    document.body.style.zoom = "80%";

    return () => {
      // Reset the zoom to default when the component unmounts
      document.body.style.zoom = "100%";
    };
  }, []);
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover text-xl">
      <Design></Design>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
};

export default App;
