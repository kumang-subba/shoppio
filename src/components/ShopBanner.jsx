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
      <BannerImage src="./images/banners/shopBanner.jpg" alt="Banner Image" />
      <BannerText>Shop the Latest Trends</BannerText>
    </BannerContainer>
  );
};

export default ShopBanner;
