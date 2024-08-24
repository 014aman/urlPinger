// src/components/UrlPinger.jsx

import React, { useEffect, useState } from "react";

const UrlPinger = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://thetutors.onrender.com/reload/`)
        .then((response) => response.json())
        .then((data) => console.log("Data received:", data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 2 minutes (2 * 60 * 1000 ms)
    const intervalId = setInterval(fetchData, 2 * 60 * 1000);
    
    setCount(count => count + 1);
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>URL Pinger</h1>
      <p>This app hits a URL every 2 minutes.</p>
      <p>The URL is hit {count} times.</p>
    </div>
  );
};

export default UrlPinger;
