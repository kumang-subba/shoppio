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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ShopBanner = () => {
  return (
    <BannerContainer>
      <BannerImage>
        <LazyLoadImage
          src="./images/banners/shopBanner.jpg"
          alt="Banner Image"
          placeholderSrc="./placeholderImages/banners/shopBanner.jpg"
          style={{ width: "150%" }}
          effect="blur"
        />
      </BannerImage>
      <BannerText>Shop the Latest Trends</BannerText>
    </BannerContainer>
  );
};

export default ShopBanner;
