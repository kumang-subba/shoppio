import { styled } from "@mui/system";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 50px;
  justify-content: center;
`;

const ProductCard = styled(Card)`
  width: 250px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    transform: scale(1.05);
  }
`;
const Ribbon = styled("div")`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 40px;
  transform: rotate(-45deg);
  transform-origin: 100px -50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductMedia = styled(CardMedia)`
  height: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const ProductContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;
const CardText = styled(Typography)({
  paddingLeft: 5,
});

const ProductList = ({ products, text }) => {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} component={Link} to="/shop">
          <ProductMedia image={product.src} />
          <ProductContent>
            <CardText variant="subtitle2">{product.brand}</CardText>
            <CardText variant="subtitle1" fontWeight={"bold"}>
              {product.name}
            </CardText>
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              precision={0.5}
            />
            <CardText variant="subtitle2" fontWeight={"bold"} color={"#2b8519"}>
              €{product.price}
            </CardText>
          </ProductContent>

          <Ribbon style={{ backgroundColor: text == "hot" ? "red" : "green" }}>
            <Typography fontWeight={"bold"} fontSize={17} color={"#ffffff"}>
              {text.toUpperCase()}
            </Typography>
          </Ribbon>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};

export default ProductList;
