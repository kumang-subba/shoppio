import { styled } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 300px;
`;

const BannerImage = styled("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BannerText = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;
const BannerTextSmall = styled("div")({
  position: "absolute",
  top: "70%",
  left: "50%",
  color: "#fafafa",
  fontSize: "25px",
  transform: "translate(-50%,-50%)",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
});
const AboutBanner = () => {
  return (
    <BannerContainer>
      <BannerImage>
        <LazyLoadImage
          src="./images/banners/aboutBanner.jpg"
          alt="Banner Image"
          placeholderSrc="./placeholderImages/banners/aboutBanner.jpg"
          style={{ width: "100%", height: "100%" }}
          effect="blur"
        />
      </BannerImage>
      <BannerText>Know US</BannerText>
      <BannerTextSmall>
        Our Story: Connecting Passion with Purpose
      </BannerTextSmall>
    </BannerContainer>
  );
};

export default AboutBanner;
