import { Divider } from "@mui/material";
import HomeBanner from "../components/HomeBanner";
import ImageCarousel from "../components/ImageCarousel";
import FeatureProducts from "../components/FeaturedProducts";
import styled from "@emotion/styled";
import HomeBannerMid from "../components/HomeBannerMid";
import NewArrivals from "../components/NewArrivals";
import BannerSection from "../components/BannerSection";

const StyledDivider = styled(Divider)({
  margin: 5,
  borderBottomWidth: 2,
  background: "black",
});
const Home = () => {
  return (
    <>
      <HomeBanner />
      <StyledDivider />
      <h1
        style={{
          textAlign: "center",
          marginTop: 0,
          fontSize: 50,
          fontFamily: `'Lato', sans-serif`,
        }}
      >
        Shop with us
      </h1>
      <ImageCarousel />
      <StyledDivider />
      <FeatureProducts />
      <StyledDivider />
      <HomeBannerMid />
      <StyledDivider />
      <NewArrivals />
      <StyledDivider />
      <BannerSection />
    </>
  );
};

export default Home;
