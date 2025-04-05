import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        const userTodos = data.filter((item) => item.userId === parseInt(id));
        setTodos(userTodos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading todos for user ID {id}...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Todos for User ID: {id}</h2>
      {todos.length === 0 ? (
        <p>No todos found for this user.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>Title:</strong> {todo.title} <br />
              <strong>ID:</strong> {todo.id} <br />
              <strong>User ID:</strong> {todo.userId} <br />
              <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Detail;