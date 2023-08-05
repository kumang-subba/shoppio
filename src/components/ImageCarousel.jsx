import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Fade, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import images from "../data/homeCarousel.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarouselContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled("div")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  z-index: 1;
`;

const LeftButton = styled("div")`
  margin-left: 20px;
`;

const RightButton = styled("div")`
  margin-right: 20px;
`;

const LeftText = styled("div")`
  position: absolute;
  bottom: 90%;
  left: 10%;
`;

const RightText = styled("div")`
  margin-right: 80px;
  position: absolute;
  right: 2%;
`;

const ArrowButton = styled(IconButton)`
  color: #fff;
  font-size: 40px;
  background-color: red;
  &:hover {
    color: red;
  }
`;

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <Fade
          key={index}
          in={index === currentImageIndex}
          timeout={500}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          unmountOnExit
        >
          <div>
            <Image>
              <LazyLoadImage
                src={image.src}
                placeholderSrc={image.placeholder}
                effect="blur"
                style={{ width: "100%", maxWidth: "100%" }}
              />
            </Image>
            <TextContainer>
              <LeftText>
                <h2>{image.leftText}</h2>
              </LeftText>
              <RightText>{image.rightText}</RightText>
            </TextContainer>
          </div>
        </Fade>
      ))}
      <TextContainer>
        <LeftButton>
          <ArrowButton onClick={handlePrev}>
            <ArrowBackIcon />
          </ArrowButton>
        </LeftButton>
        <RightButton>
          <ArrowButton onClick={handleNext}>
            <ArrowForwardIcon />
          </ArrowButton>
        </RightButton>
      </TextContainer>
    </CarouselContainer>
  );
};

export default ImageCarousel;
