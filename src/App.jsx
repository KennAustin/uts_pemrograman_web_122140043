import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";

const App = () => (
  <ThemeProvider>
    <Router>
      <Navigation />
      <hr className="divider" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;