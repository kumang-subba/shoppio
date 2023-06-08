import { useState } from "react";
import { styled } from "@mui/system";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Container,
  IconButton,
} from "@mui/material";
import products from "../data/allItems.json";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import ShopItemDrawer from "./ShopItemDrawer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

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
const StyledIconButton = styled(IconButton)({
  position: "absolute",
  color: "#2b8519",
  right: "5%",
  bottom: "5%",
  "&:hover": {
    backgroundColor: "#e8e6e6",
  },
});

const PaginationContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: none;
  background-color: #006400;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #004f00;
  }

  &:focus {
    outline: none;
  }
`;

const ArrowButton = styled(PaginationButton)`
  visibility: ${({ isvisible }) => (isvisible === 1 ? "visible" : "hidden")};
`;

const ShopList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const [selectedItem, setSelectedItem] = useState();
  const { handleOpenItemDetails } = useContext(CartContext);
  return (
    <Container sx={{ mt: 5 }}>
      <ProductsContainer>
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => {
              handleOpenItemDetails();
              setSelectedItem(product);
            }}
          >
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
              <CardText
                variant="subtitle2"
                fontWeight={"bold"}
                color={"#2b8519"}
              >
                €{product.price}
              </CardText>
              <StyledIconButton>
                <ShoppingCartOutlinedIcon />
              </StyledIconButton>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsContainer>
      <ShopItemDrawer selectedItem={selectedItem} />
      <PaginationContainer>
        <ArrowButton
          isvisible={currentPage > 1 ? 1 : 0}
          onClick={handlePrevPage}
        >
          <KeyboardArrowLeft />
        </ArrowButton>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
              style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
            >
              {page}
            </PaginationButton>
          )
        )}

        <ArrowButton
          isvisible={currentPage < totalPages ? 1 : 0}
          onClick={handleNextPage}
        >
          <KeyboardArrowRight />
        </ArrowButton>
      </PaginationContainer>
    </Container>
  );
};

export default ShopList;
