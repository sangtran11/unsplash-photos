import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    axios
      .get(`${apiRoot}/photos?client_id=${accessKey}&page=${page}&per_page=10`)
      .then((res) => setImages([...images, ...res.data]))
      .catch((error) => console.log(error));

    setPage((prev) => prev + 1);
  };

  return (
    <AppContext.Provider
      value={{
        images,
        fetchImages,
        isShow,
        setIsShow,
        selectedImage,
        setSelectedImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
