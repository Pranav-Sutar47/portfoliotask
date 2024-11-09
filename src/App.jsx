import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume"
import Achievements from "./components/Achievement"
import { AnimatePresence } from 'framer-motion';

function App() {
  const name = String(import.meta.env.VITE_PUBLIC_URL);
  console.log(name);
  return (
    // <div className="container-fluid">
    <Router >
        <NavBar/>
        <AnimatedRoutes/>
    </Router>
    // </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/resume' element={<Resume/>}/>
        <Route path="/achievement" element={<Achievements />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App
