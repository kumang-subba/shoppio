import { styled } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 300px;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
const SmallBannerText = styled("div")`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 26px;
  fontfamily: "Lato", sans-serif;
  letter-spacing: 5px;
  text-shadow: 5px 2px 4px rgba(0, 0, 0, 0.7);
  @media (max-width: 820px) {
    font-size: 15px;
  }
`;

const BlogBanner = () => {
  return (
    <BannerContainer>
      <LazyLoadImage
        src="./images/banners/blogBanner.jpg"
        alt="Banner Image"
        placeholderSrc="./placeholderImages/banners/blogBanner.jpg"
        effect="blur"
        style={{ width: "100vw" }}
      />
      <BannerText>Unveiling the Latest Fashion Trends and Shopping Tips</BannerText>
      <SmallBannerText>Read all about Shopping</SmallBannerText>
    </BannerContainer>
  );
};

export default BlogBanner;
