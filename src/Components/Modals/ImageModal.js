import React, { useContext, useState, useMemo } from "react";
import { Modal, Row, Col, Container, Image } from "react-bootstrap";
import { AppContext } from "../../Context/AppProvider";
import "./index.scss";

const ImageModal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isShow, setIsShow, selectedImage, images } = useContext(AppContext);
  const maxLength = images.length;
  const selectedImageId = selectedImage.id;

  const customImages = useMemo(() => {
    const result = images.filter((item) => item.id !== selectedImage.id);
    return [selectedImage, ...result];
  }, [selectedImageId]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === maxLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxLength - 1 : currentIndex - 1);
  };

  console.log("index", currentIndex);
  // console.log("customImages", customImages[currentIndex]);
  console.log("customImages", customImages);
  // console.log("selectedImage", images[currentIndex]);
  console.log("images: ", images);

  const handleClose = () => {
    setIsShow(false);
    setCurrentIndex(0);
  };

  return (
    <Modal show={isShow} backdrop="static" keyboard={false} fullscreen={true}>
      <Modal.Body>
        <Container fluid className="p-0">
          <div className="icon-close" onClick={handleClose}>
            <i className="bi bi-x-lg"></i>
          </div>
          <Row className="h-100">
            <Col xs={12} lg={12}>
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
                            src={image?.urls?.regular}
                            alt={image?.description}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={12}>
              <div className="information-section">
                <span>
                  <b>Author</b>: {customImages[currentIndex]?.user?.name}
                  <br />
                </span>
                <span>
                  <b>Location</b>:{" "}
                  {customImages[currentIndex]?.user?.location || "N/A"}
                  <br />
                </span>
                <span>
                  <b>Bio</b>: {customImages[currentIndex]?.user?.bio}
                  <br />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
