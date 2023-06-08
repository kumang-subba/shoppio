import { styled } from "@mui/system";

const Container = styled("div")`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const Title = styled("h1")`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const AppWord = styled("span")`
  color: #ff5722;
  text-decoration: underline;
`;

const VideoPlayer = styled("video")`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
`;

const DownloadApp = () => {
  return (
    <Container>
      <Title>
        Download our <AppWord>App</AppWord>
      </Title>
      <VideoPlayer autoPlay muted loop>
        <source src="./video/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoPlayer>
    </Container>
  );
};

export default DownloadApp;
