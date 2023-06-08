import styled from "@emotion/styled";
import { Box, Container, Stack, Typography } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const MyContainer = styled(Container)({
  height: "90vh",
  display: "flex",
  justifyContent: "space-around",
});
const BigHeading = styled(Typography)({
  fontWeight: "bold",
  fontSize: 25,
  marginBottom: 10,
});
const Heading = styled(Typography)({
  fontWeight: "bold",
  fontSize: 14,
  marginBottom: 10,
});
const LightText = styled(Typography)({
  fontSize: 13,
  fontWeight: 900,
  fontFamily: `'Lato', sans-serif`,
  color: "#616161",
});
const containerStyle = {
  width: "50%",
  height: "400px",
  marginTop: "60px",
};

const center = {
  lat: 60.1699,
  lng: 24.9384,
};

const ContactBody = () => {
  return (
    <MyContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "40%",
        }}
      >
        <img
          src="./images/shoppioBanner.png"
          alt=""
          style={{ height: 100, width: 150 }}
        />
        <BigHeading>
          Visit one of our agency locations or contact us today
        </BigHeading>
        <Heading>Head Office</Heading>
        <Box display={"flex"} gap={3}>
          <Stack direction={"column"} gap={1.2}>
            <BusinessOutlinedIcon sx={{ color: "#212120", fontSize: 19 }} />
            <EmailOutlinedIcon sx={{ color: "#212120", fontSize: 19 }} />
            <LocalPhoneOutlinedIcon sx={{ color: "#212120", fontSize: 19 }} />
            <AccessTimeOutlinedIcon sx={{ color: "#212120", fontSize: 19 }} />
          </Stack>
          <Stack direction={"column"} gap={1.2}>
            <LightText>Helsinki, 00230, Street 22</LightText>
            <LightText>example@email.com</LightText>
            <LightText>+358 5A 9230145</LightText>
            <LightText>Monday to Saturday: 10 am to 7 pm</LightText>
          </Stack>
        </Box>
      </Box>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </MyContainer>
  );
};

export default ContactBody;
