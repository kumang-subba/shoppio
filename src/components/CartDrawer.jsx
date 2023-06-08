import styled from "@emotion/styled";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemsInCart from "./ItemsInCart";
import allItems from "../data/allItems.json";
import CloseIcon from "@mui/icons-material/Close";

const ItemDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "100vw",
    maxWidth: "100%",
  },
  zIndex: 999,
});

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems } = useContext(CartContext);
  return (
    <ItemDrawer anchor="right" open={isCartOpen} onClose={closeCart}>
      <Toolbar />
      <Container
        sx={{
          gap: 1,
          marginTop: "50px",
          position: "relative",
        }}
      >
        {cartItems.length > 0 ? (
          <Box>
            {cartItems.map((item, index) => (
              <ItemsInCart {...item} key={index} />
            ))}

            <Typography variant="h6">
              Total:
              {cartItems
                .reduce((tot, item) => {
                  const store = allItems.find((i) => i.id === item.id);
                  return tot + (store?.price || 0) * item.quantity;
                }, 0)
                .toFixed(2)}
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography>Please add items to cart</Typography>
          </Box>
        )}
        <IconButton
          sx={{ position: "absolute", right: "10%", top: 0 }}
          onClick={closeCart}
        >
          <CloseIcon />
        </IconButton>
      </Container>
    </ItemDrawer>
  );
};

export default CartDrawer;
