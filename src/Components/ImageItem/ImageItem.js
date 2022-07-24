import React from "react";
import { Image } from "react-bootstrap";
import "./index.scss";

const ImageItem = ({ item }) => {
  const { urls, description } = item;
  // console.log("item", item);

  return <Image className="image" src={urls.small} alt={description} />;
};

export default ImageItem;
