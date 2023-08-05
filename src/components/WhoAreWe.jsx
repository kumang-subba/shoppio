import { Container } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = styled("div")`
  width: 50%;
  max-width: 500px;
  object-fit: cover;
`;

const ContentContainer = styled("div")`
  width: 50%;
  padding: 0 20px;
  position: relative;
`;

const Title = styled("h2")`
  font-size: 35px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Description = styled("p")`
  font-size: 16px;
  margin-bottom: 10px;
`;
const SliderContainer = styled("div")`
  width: 50%;
  height: 30px;
  overflow: hidden;
`;
const slideText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const SliderText = styled("p")`
  font-size: 14px;
  color: #888;
  white-space: nowrap;
  animation: ${slideText} 5s linear infinite;
`;
const WhoAreWe = () => {
  return (
    <Container sx={{ display: "flex", marginTop: "10px" }}>
      <ContentContainer>
        <Title>Who We Are?</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquam justo ac metus venenatis, nec eleifend mauris gravida. Nunc at
          massa et odio tincidunt convallis.
        </Description>
        <SliderContainer>
          <SliderText>
            This is a sliding text example. This text will continuously slide
            horizontally.
          </SliderText>
        </SliderContainer>
      </ContentContainer>
      <Image>
        <LazyLoadImage
          src="./images/aboutUs.jpg"
          placeholderSrc="./placeholderImages/aboutUs.jpg"
          alt="Who are we"
          effect="blur"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </Image>
    </Container>
  );
};

export default WhoAreWe;
