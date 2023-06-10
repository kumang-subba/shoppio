import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Container,
  Avatar,
  Stack,
} from "@mui/material";
import people from "../data/people.json";

const ContactForm = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-evenly",
        alignItems: isMobile ? "center" : "flex-start",
        marginBottom: "50px",
        gap: "10px",
      }}
    >
      <Box width={"max(50%,600px)"}>
        <Typography variant="subtitle1" color="textSecondary">
          LEAVE A MESSAGE
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bolder" }}>
          We love to hear from you
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <TextField label="Your name" margin="normal" fullWidth />
          <TextField label="Email" margin="normal" fullWidth />
          <TextField label="Subject" margin="normal" fullWidth />
          <TextField
            label="Message"
            multiline
            rows={4}
            margin="normal"
            fullWidth
          />
          <Button variant="contained" sx={{ backgroundColor: "#2c331a" }}>
            Submit
          </Button>
        </form>
      </Box>
      <Box
        display="flex"
        flexDirection={isMobile ? "row" : "column"}
        gap={isMobile ? 2 : 5}
        paddingTop={"10px"}
      >
        {people.map((person) => (
          <Stack key={person.id} direction={"row"} gap={2}>
            <Avatar
              src={person.src}
              alt={person.name}
              sx={{ height: 100, width: 100 }}
            />
            <Stack>
              <Typography variant="body1" fontWeight={"bold"}>
                {person.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: (theme) => theme.palette.grey[600] }}
              >
                {person.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: (theme) => theme.palette.grey[600] }}
              >
                {person.Phone}
              </Typography>
              <Typography
                variant="body2 "
                sx={{ color: (theme) => theme.palette.grey[600] }}
              >
                {person.email}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Container>
  );
};

export default ContactForm;
