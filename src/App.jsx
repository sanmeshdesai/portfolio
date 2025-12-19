import React,{useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"


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
    <>
    <Navbar open={open} setOpen={setOpen}/>
    <main className={`transition-all duration-300
        ${open ? "blur-sm brightness-75 pointer-events-none" : ""}
        `}>
    <Routes>
          
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
      </main>
    </>
  )
}

export default App
