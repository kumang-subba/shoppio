import { styled, keyframes } from "@mui/system";
import { Typography } from "@mui/material";

const BannerContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BackgroundImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const colorAnimation = keyframes`
  0% {
    color: #ff0000;
  }
  25% {
    color: #00ff00;
  }
  50% {
    color: #0000ff;
  }
  75% {
    color: #ffff00;
  }
  100% {
    color: #ff00ff;
  }
`;
const Title = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  animation: ${colorAnimation} 6s linear infinite;
`;

const Heading = styled(Typography)`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const CustomButton = styled("button")`
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  background-color: #fff;
  color: #080808;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #2b8519;
    color: #fff;
  }
`;
const HomeBannerMid = () => {
  return (
    <BannerContainer>
      <BackgroundImage src="./images/banners/b2.jpg" alt="Banner Background" />
      <ContentContainer>
        <Title variant="h2">Special Offer</Title>
        <Heading variant="h1">
          Up to 70% Off - All T-Shirts & Accessories
        </Heading>
        <ButtonContainer>
          <CustomButton>Explore More</CustomButton>
        </ButtonContainer>
      </ContentContainer>
    </BannerContainer>
  );
};

export default HomeBannerMid;
