import { useState, useEffect } from "react";

export default function UseAPI() {
  const [APIData, setAPIData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics", {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Something went wrong..", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return { APIData, error, loading };
}
