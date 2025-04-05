import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navigation = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navigation">
      <button onClick={() => navigate("/")} className="nav-button">Home</button>
      <button onClick={() => navigate("/about")} className="nav-button">About</button>
      <button onClick={() => navigate("/detail/1")} className="nav-button">Detail</button>
      <button onClick={toggleTheme} className="nav-button">
        Toggle Theme (Current: {theme})
      </button>
    </nav>
  );
};

export default Navigation;