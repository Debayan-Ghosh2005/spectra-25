// import { About } from "@/components/about";
// import { Contact } from "@/components/contact";
// import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
// import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
// import { Story } from "@/components/story";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page/home";
import Schedule from "./components/page/schedule";
import Event from "./components/page/event";
import About from "./components/page/about";
import Contact from "./components/page/contact";
import Team from "./components/page/team";
import Register from "./components/page/register";


const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/event" element={<Event />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/register" element={<Register />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
