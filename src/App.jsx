import React,{useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"


function App() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar open={open} setOpen={setOpen}/>
    <main className={`transition-all duration-300 flex-1
        ${open ? "blur-sm brightness-75 pointer-events-none" : ""}
        `}>
    <Routes>
          
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
