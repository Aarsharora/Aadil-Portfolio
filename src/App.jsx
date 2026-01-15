import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        <div style={{ position: 'relative', zIndex: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flex: 1 }}> {/* Content spacer */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
