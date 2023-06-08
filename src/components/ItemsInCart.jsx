import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import allItems from "../data/allItems.json";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemsInCart({ id, quantity, size }) {
  const { removeFromCart } = useContext(CartContext);
  const item = allItems.find((i) => i.id === id);
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={item.src}
        sx={{
          width: "15%",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Box sx={{ justifyContent: "space-between", alignItems: "stretch" }}>
          <Typography variant="h5" gutterBottom fontWeight={"bold"}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Typography>
          <Typography variant="h6">€ {item.price}</Typography>
          {quantity > 1 && <Typography variant="body">X {quantity}</Typography>}
          <Typography variant="body1">Size: {size}</Typography>

          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            € {(item.price * quantity).toFixed(2)}
          </Typography>
          <Button
            color="error"
            variant="outlined"
            onClick={() => removeFromCart(id, size)}
          >
            Remove from cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemsInCart;
