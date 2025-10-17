import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Animation from "./components/Animation";
import Blog from "./components/Blog";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router baseName="/Mjgalle-maria.gallegos.io">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/animation" element={<Animation />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
