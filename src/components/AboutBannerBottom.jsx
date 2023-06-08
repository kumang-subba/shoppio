import { styled } from "@mui/system";
import data from "../data/aboutUs.json";
import { Container, Paper } from "@mui/material";

const Image = styled("img")`
  object-fit: cover;
  margin: 0 10px;
`;
const ButtonText = styled("span")`
  display: inline-block;
  padding: 8px 16px;
  color: #204529;
  font-size: 12px;
  font-weight: 800;
  border-radius: 4px;
`;

const AboutBannerBottom = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 5,
        marginBottom: "5rem",
        "@media (max-width: 768px)": {
          flexWrap: "wrap",
        },
      }}
    >
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "10px",
            gap: "15px",
          }}
        >
          <Image src={item.src} />
          <ButtonText style={{ backgroundColor: item.color }}>
            {item.text}
          </ButtonText>
        </Paper>
      ))}
    </Container>
  );
};

export default AboutBannerBottom;
