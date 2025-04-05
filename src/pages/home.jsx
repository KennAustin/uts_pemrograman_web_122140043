import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/header";

const Home = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId.trim() !== "") {
      navigate(`/detail/${userId}`);
    }
  };

  return (
    <div className="page-container">
      <Header title="Welcome to the Todo App!" />
      <p className="description-home">Use the form below to view todos for a specific user.</p>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter User ID (1–10)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="submit-button">View Todos</button>
      </form>
    </div>
  );
};

export default Home;