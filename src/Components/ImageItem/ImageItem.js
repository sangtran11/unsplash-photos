import React from "react";
import { Image } from "react-bootstrap";
import "./index.scss";

const ImageItem = ({ item }) => {
  const { urls, description } = item;

  return <Image className="image" src={urls.regular} alt={description} />;
};

export default ImageItem;
