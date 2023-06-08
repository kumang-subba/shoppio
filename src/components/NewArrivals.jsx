import products from "../data/newArrivals.json";
import { Container } from "@mui/material";
import ProductList from "./ProductsList";

const NewArrivals = () => {
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
        New Arrivals
      </h1>
      <ProductList products={products} text="new" />
    </Container>
  );
};

export default NewArrivals;
