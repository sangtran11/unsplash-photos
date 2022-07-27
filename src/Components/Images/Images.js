import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import Loading from "../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { Image } from "react-bootstrap";
import "./index.scss";

const Images = () => {
  const { images, fetchImages, setIsShow, setSelectedImage } =
    useContext(AppContext);

  const handleOpenModal = (image) => {
    setIsShow(true);
    setSelectedImage(image);
  };

  return (
    <>
      <InfiniteScroll
        className="images-container"
        dataLength={images.length}
        hasMore={true}
        next={fetchImages}
        loader={<Loading />}
      >
        {images.map((image, index) => (
          <div
            className="images"
            key={index}
            onClick={() => handleOpenModal(image)}
          >
            <Image
              className="image"
              src={image.urls.regular}
              alt={image.description}
            />
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Images;
