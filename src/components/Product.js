import React, { useEffect, useState } from 'react'

function Product() {
    const [message, setMessage] = useState("");

    useEffect(() => {
      // Fetch data from the server
      fetch("/api/greet")
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>React + Node Server</h1>
    <h2>Message from the Server:</h2>
    <p>{message}</p>
  </div>
  )
}

export default Product