import { styled } from "@mui/system";

const BannerSectionDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;

const BannerImage = styled("div")`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: max(49%, 700px);

  &:hover .banner-overlay {
    opacity: 1;
    transform: scale(1.1);
  }
`;
const BottomBannerImage = styled("div")`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 30%;

  &:hover .banner-overlay {
    opacity: 1;
    transform: scale(1.1);
  }
`;
const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
`;

const Text = styled("p")`
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const LeftButton = styled("button")`
  color: #ffffff;
  padding: 8px 16px;
  border: 2px solid #ffffff;
  margin-top: 10px;
  cursor: pointer;
  background-color: transparent;
`;
const RightButton = styled("button")`
  color: #ffffff;
  padding: 8px 16px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  background-color: #146b33;
`;

const BannerSection = () => {
  return (
    <BannerSectionDiv>
      <BannerImage>
        <Image src="./images/banners/b11.jpg" alt="Image 1" />
        <BannerOverlay className="banner-overlay">
          <Text>Crazy deals</Text>
          <Text sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Buy 2 get 1 free
          </Text>
          <LeftButton>Learn More</LeftButton>
        </BannerOverlay>
      </BannerImage>
      <BannerImage>
        <Image src="./images/banners/b10.jpg" alt="Image 2" />
        <BannerOverlay className="banner-overlay">
          <Text>Spring</Text>
          <Text sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Upcoming season
          </Text>
          <Text>Best clothes on sale. Right here at Shoppio</Text>
          <RightButton>Collection</RightButton>
        </BannerOverlay>
      </BannerImage>
      <BottomBannerImage>
        <Image src="./images/banners/b3.jpg" alt="Image 3" />
        <BannerOverlay className="banner-overlay">
          <Text sx={{ fontWeight: "bold", fontSize: "25px" }}>Accessories</Text>
          <Text>Sale upto 70%</Text>
        </BannerOverlay>
      </BottomBannerImage>
      <BottomBannerImage>
        <Image src="./images/banners/b4.jpg" alt="Image 4" />
        <BannerOverlay className="banner-overlay">
          <Text sx={{ fontWeight: "bold", fontSize: "25px" }}>
            New Collections
          </Text>
          <Text>Spring 2023</Text>
        </BannerOverlay>
      </BottomBannerImage>
      <BottomBannerImage>
        <Image src="./images/banners/b12.jpg" alt="Image 5" />
        <BannerOverlay className="banner-overlay">
          <Text sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Summer Dress
          </Text>
          <Text>New and Trendy</Text>
        </BannerOverlay>
      </BottomBannerImage>
    </BannerSectionDiv>
  );
};

export default BannerSection;
