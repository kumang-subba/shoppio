import { Container } from "@mui/material";
import BlogBanner from "../components/BlogBanner";
import blogPostsData from "../data/blogPosts.json";
import BlogPosts from "../components/BlogPosts";
const Blog = () => {
  return (
    <>
      <BlogBanner />
      <Container sx={{ marginTop: 5 }}>
        {blogPostsData.map((post, index) => (
          <BlogPosts
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
            position={index}
          />
        ))}
      </Container>
    </>
  );
};

export default Blog;
