import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import ImageItem from "../ImageItem/ImageItem";
import Loading from "../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
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
        {images.map((image) => (
          <div
            className="images"
            key={image.id}
            onClick={() => handleOpenModal(image)}
          >
            <ImageItem item={image} />
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Images;
