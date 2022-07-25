import React, { useContext, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../Context/AppProvider";
import ImageItem from "../ImageItem/ImageItem";
import "./index.scss";

const ImageModal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isShow, setIsShow, selectedImage, images } = useContext(AppContext);
  const maxLength = images.length;
  const selectedImageId = selectedImage.id;

  const customImages = useMemo(() => {
    const result = images.filter((item) => item.id !== selectedImage.id);
    result.unshift(selectedImage);
    return result;
  }, [selectedImageId]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === maxLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxLength - 1 : currentIndex - 1);
  };

  const handleClose = () => {
    setIsShow(false);
    setCurrentIndex(0);
  };

  return (
    <Modal show={isShow} backdrop="static" keyboard={false} fullscreen={true}>
      <Modal.Body>
        <div className="icon-close" onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="slider">
          <div className="arrow left-arrow" onClick={prevSlide}>
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="arrow right-arrow" onClick={nextSlide}>
            <i className="bi bi-arrow-right"></i>
          </div>
          <div className="space-slider">
            {customImages.map((image, index) => {
              return (
                <div
                  className={index === currentIndex ? "slide active" : "slide"}
                  key={`${image.id}-${index}`}
                >
                  {index === currentIndex && (
                    <ImageItem item={image} key={image.id} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
