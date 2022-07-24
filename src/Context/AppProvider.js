import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setIsLoading(true);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    axios
      .get(`${apiRoot}/photos?client_id=${accessKey}&per_page=30`)
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AppContext.Provider value={{ images, isLoading, fetchImages }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
