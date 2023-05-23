import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0 ">
          <Contact />
          <motion.div>
            <StarsCanvas />
          </motion.div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
