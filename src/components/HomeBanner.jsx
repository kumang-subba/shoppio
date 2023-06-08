import { styled } from "@mui/system";

const BannerContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "800px",
  background: `url('./images/home/h5.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
});

const BannerText = styled("div")({
  marginLeft: "10%",
  fontSize: "22px",
  color: "#302f2f",
  fontWeight: "bold",
});
const CustomButton = styled("button")`
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  background-color: #a87f0d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2b8519;
    transform: translateY(-3px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    transition: transform 0.3s;
    z-index: -1;
  }

  &:hover:before {
    transform: translateY(0);
  }
`;
const HomeBanner = () => {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Welcome to Shoppio</h1>
        <h2 style={{ color: "#236b34" }}>Super value deals</h2>
        <p>Discover amazing products and more</p>
        <CustomButton>Shop now</CustomButton>
      </BannerText>
    </BannerContainer>
  );
};

export default HomeBanner;
