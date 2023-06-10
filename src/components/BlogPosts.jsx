import { styled } from "@mui/system";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const BlogPostContainer = styled(Card)`
  display: flex;
  margin-bottom: 80px;
  height: 500px;
`;

const BlogPostImage = styled(CardMedia)`
  width: 500px;
  position: relative;
`;

const BlogPostContent = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const LinkContainer = styled("div")`
  position: relative;
  display: inline-block;
`;

const StyledLink = styled("a")`
  color: #000000;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  font-weight: bold;
  font-family: "Lato", sans-serif;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    right: -40px;
    width: 40px;
    height: 1px;
    background-color: #000;
  }
  &:hover {
    color: #ff4081;

    &::after {
      background-color: #ff4081;
    }
  }
`;
const BlogPosts = ({ image, title, description, position, date }) => {
  return (
    <BlogPostContainer>
      {position % 2 === 0 && (
        <BlogPostImage image={image}>
          <Typography
            sx={{
              position: "absolute",
              fontWeight: 900,
              fontSize: 50,
              bottom: 0,
              left: "5%",
            }}
          >
            {date}
          </Typography>
        </BlogPostImage>
      )}

      <BlogPostContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
        <LinkContainer>
          <StyledLink href="">Continue Reading</StyledLink>
        </LinkContainer>
      </BlogPostContent>
      {position % 2 !== 0 && (
        <BlogPostImage image={image}>
          <Typography
            sx={{
              position: "absolute",
              fontWeight: 900,
              fontSize: 50,
              bottom: 0,
              right: "5%",
              color: "#ffffff",
            }}
          >
            {date}
          </Typography>
        </BlogPostImage>
      )}
    </BlogPostContainer>
  );
};

export default BlogPosts;
