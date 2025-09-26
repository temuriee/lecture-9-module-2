import { useEffect, useState } from "react";

const Popup = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Fetched Data</h2>

      <ul>
        {data.map((eachElement) => (
          <li>
            <p>Id: {eachElement.id}</p>
            <p>Title: {eachElement.title}</p>
            <p>Body: {eachElement.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
