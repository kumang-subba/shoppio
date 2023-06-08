import { styled } from "@mui/system";

const BannerContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 300px;
`;

const BannerImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px);
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
      <BannerImage src="./images/banners/aboutBanner.jpg" alt="Banner Image" />
      <BannerText>Know US</BannerText>
      <BannerTextSmall>
        Our Story: Connecting Passion with Purpose
      </BannerTextSmall>
    </BannerContainer>
  );
};

export default AboutBanner;
