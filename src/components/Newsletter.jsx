import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import { Button, TextField } from "@mui/material";

const NewsletterContainer = styled("div")`
  background-image: url("./images/banners/newsletter.png");
  background-size: cover;
  margin-top: 10px;
  background-position: center;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #132d57;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled("h2")`
  color: Red;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled("p")`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 20px;
`;
const NewsletterInput = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "6px 0 0 6px",
  width: 355,
  height: 36,
  border: "1px solid grey",
  input: {
    textAlign: "justify",
    height: 36,
    padding: "0 0 0 5px",
    "&::placeholder": {
      opacity: 0.7,
      fontSize: "15px",
    },
    "&:focus": {
      backgroundColor: "white",
      borderRadius: "6px 0 0 6px",
    },
  },
  fieldset: {
    border: "none",
  },
});

const NewsletterButton = styled(Button)({
  borderRadius: "0 5px 5px 0",
  backgroundColor: "#072f3b",
  color: "#fff",
  width: "100px",
  fontWeight: "bold",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: "#0a660c",
  },
});
const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or API call for newsletter signup
  };
  return (
    <NewsletterContainer>
      <Stack>
        <Title>Subscribe to Our Newsletter</Title>
        <Description>
          Get the latest updates, news, and promotions directly in your inbox.
        </Description>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Stack direction={"row"}>
          <NewsletterInput
            id="email"
            placeholder="Email"
            type="email"
            required
          />
          <NewsletterButton type="submit">Sign Up</NewsletterButton>
        </Stack>
      </form>
    </NewsletterContainer>
  );
};

export default Newsletter;
