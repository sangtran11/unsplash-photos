import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setIsLoading(true);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    axios
      .get(`${apiRoot}/photos?client_id=${accessKey}&page=${page}&per_page=20`)
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setPage((prev) => prev + 1);
  };

  return (
    <AppContext.Provider value={{ images, isLoading, fetchImages }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
