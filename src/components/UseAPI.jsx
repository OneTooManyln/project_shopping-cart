import { useState, useEffect } from "react";

export default function UseAPI() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics", {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
        console.log(APIData);
      })
      .catch((error) => {
        console.error("Something went wrong..", error);
      });
  }, []);

  return APIData;
}
