import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import ImageItem from "../ImageItem/ImageItem";
import Loading from "../Loading/Loading";
import "./index.scss";

const Images = () => {
  const { images, isLoading } = useContext(AppContext);
  const customClasses = (index) =>
    `${
      index === 0
        ? ""
        : index % 3 === 0
        ? "v-stretch"
        : index % 5 === 0
        ? "h-stretch"
        : index % 7 === 0
        ? "big-stretch"
        : ""
    }`;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="images-container">
      {images.map((image, index) => (
        <div className={customClasses(index)} key={image.id}>
          <ImageItem item={image} />
        </div>
      ))}
    </div>
  );
};

export default Images;
