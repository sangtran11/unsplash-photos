import React, { useContext, useState, useEffect } from "react";
import { Modal, Row, Col, Container, Image } from "react-bootstrap";
import { AppContext } from "../../Context/AppProvider";
import "./index.scss";

const ImageModal = () => {
  const { isShow, setIsShow, selectedImage, images } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customImages, setCustomImages] = useState(images);
  const selectedImageId = selectedImage.id;

  useEffect(() => {
    const index = images.findIndex((item) => item.id === selectedImageId);
    const imagesFromFirstToIndex = images.slice(0, index);
    const imagesFromIndexToLast = images.slice(index, images.length);
    setCustomImages([...imagesFromIndexToLast, ...imagesFromFirstToIndex]);
  }, [selectedImageId]);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === customImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? customImages.length - 1 : currentIndex - 1
    );
  };

  const handleClose = () => {
    setIsShow(false);
    setCurrentIndex(0);
    setCustomImages(images);
  };

  return (
    <Modal show={isShow} backdrop="static" keyboard={false} fullscreen={true}>
      <Modal.Body>
        <Container fluid className="p-0">
          <div className="icon-close" onClick={handleClose}>
            <i className="bi bi-x-lg"></i>
          </div>
          <Row className="h-100">
            <Col className="information-section mt-3 mb-5" xs={12} lg={12}>
              <div>
                <span>
                  <b>Author: </b>
                  {customImages[currentIndex]?.user?.name || "..."}
                  <br />
                </span>
                <span>
                  <b>Location: </b>
                  {customImages[currentIndex]?.user?.location || "..."}
                  <br />
                </span>
                <span>
                  <b>Bio: </b>
                  {customImages[currentIndex]?.user?.bio || "..."}
                  <br />
                </span>
              </div>
            </Col>
            <Col className="my-5" xs={12} lg={12}>
              <div className="slider">
                <div className="space-slider">
                  <div className="arrow left-arrow" onClick={prevSlide}>
                    <i className="bi bi-arrow-left"></i>
                  </div>
                  <div className="arrow right-arrow" onClick={nextSlide}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  {customImages.map((image, index) => {
                    return (
                      <div
                        className={
                          index === currentIndex ? "slide active" : "slide"
                        }
                        key={index}
                      >
                        {index === currentIndex && (
                          <Image
                            className="image"
                            src={image.urls.regular}
                            alt={image.description}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
