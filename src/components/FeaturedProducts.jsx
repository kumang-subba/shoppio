import products from "../data/featureProducts.json";
import { Container } from "@mui/material";
import ProductList from "./ProductsList";

const FeatureProducts = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 50, fontFamily: `'Lato', sans-serif` }}>
        Featured Products
      </h1>
      <ProductList products={products} text="hot" />
    </Container>
  );
};

export default FeatureProducts;
