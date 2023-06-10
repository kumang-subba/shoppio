import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled("footer")`
  background-color: #f5f5f5;
  padding: 20px;
`;

const FooterColumns = styled("div")`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

const FooterColumn = styled("div")`
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    text-align: center;
  }
`;
const Heading = styled(Typography)({
  fontWeight: "bold",
  fontSize: 14,
  marginBottom: 10,
});
const BoldText = styled(Typography)({
  fontWeight: "bold",
  fontSize: 13,
});
const LightText = styled(Typography)({
  fontSize: 13,
  fontWeight: "bold",
  fontFamily: `'Lato', sans-serif`,
  color: "#616161",
});
const AboutLink = styled(Typography)({
  cursor: "pointer",
  fontSize: 13,
  fontWeight: "bold",
  fontFamily: `'Lato', sans-serif`,
  color: "#616161",
  "&:hover": {
    textDecoration: "underline",
  },
});

const HomeFooter = () => {
  return (
    <FooterContainer>
      <FooterColumns>
        <FooterColumn>
          <img
            src="./images/shoppioBanner.png"
            alt=""
            style={{ height: 75, width: 120 }}
          />
          <Heading>Contact</Heading>
          <Stack direction={"row"} gap={0.5}>
            <BoldText>Address: </BoldText>
            <LightText>Helsinki, 00230, Street 22</LightText>
          </Stack>
          <Stack direction={"row"} gap={0.5}>
            <BoldText>Phone: </BoldText>
            <LightText>+358 5A 9230145</LightText>
          </Stack>
          <Stack direction={"row"} gap={0.5}>
            <BoldText>Hours: </BoldText>
            <LightText>10:00 - 19:00, Mon - Sat</LightText>
          </Stack>
          <Heading sx={{ mt: 2 }}>Follow Us</Heading>
          <Stack direction={"row"} mt={1} gap={0.5}>
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ cursor: "pointer", height: 15, width: 15 }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ cursor: "pointer", height: 16, width: 16 }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ cursor: "pointer", height: 15, width: 15 }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ cursor: "pointer", height: 15, width: 15 }}
            />
          </Stack>
        </FooterColumn>
        <FooterColumn>
          <Heading>About</Heading>
          <AboutLink>About Us</AboutLink>
          <AboutLink>Delivery Information</AboutLink>
          <AboutLink>Privacy Policy</AboutLink>
          <AboutLink>Terms & Conditions</AboutLink>
          <AboutLink>Contact Us</AboutLink>
        </FooterColumn>
        <FooterColumn>
          <Heading>My Account</Heading>
          <AboutLink>Sign In</AboutLink>
          <AboutLink>View Cart</AboutLink>
          <AboutLink>My Wishlist</AboutLink>
          <AboutLink>Track My Order</AboutLink>
          <AboutLink>Help</AboutLink>
        </FooterColumn>
        <FooterColumn>
          <Heading>Install App</Heading>
          <LightText>From App Store or Google Play</LightText>
          <Stack direction={"row"} gap={1} mt={1} mb={2}>
            <GooglePlayButton url={""} theme={"light"} />
            <AppStoreButton url={""} theme={"light"} />
          </Stack>
          <LightText>Secured Payment Gateways</LightText>
          <img
            src="./images/pay.png"
            alt="payment"
            style={{ cursor: "pointer" }}
          ></img>
        </FooterColumn>
      </FooterColumns>
    </FooterContainer>
  );
};

export default HomeFooter;
