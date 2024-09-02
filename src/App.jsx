import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import AnimatedCursor from "react-animated-cursor"
const App = () => {
  return (
    
    <BrowserRouter>
    <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
/>
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <ToastContainer /> 
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience /> 
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;