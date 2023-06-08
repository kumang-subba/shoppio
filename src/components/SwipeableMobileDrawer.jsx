import { SwipeableDrawer, Stack, Button, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const DrawerContainer = styled("div")({
  width: "150px",
  marginTop: "10px",
  position: "relative",
});
const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
}));
const SwipeableMobileDrawer = ({ open, setOpen }) => {
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const { closeCart } = useContext(CartContext);
  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{ zIndex: 999 }}
      >
        <Toolbar />
        <DrawerContainer>
          <Stack>
            <NavButton component={Link} to="/" onClick={closeCart}>
              Home
            </NavButton>
            <NavButton component={Link} to="/shop" onClick={closeCart}>
              Shop
            </NavButton>
            <NavButton component={Link} to="/blog" onClick={closeCart}>
              Blog
            </NavButton>
            <NavButton component={Link} to="/about" onClick={closeCart}>
              About
            </NavButton>
            <NavButton component={Link} to="/contact" onClick={closeCart}>
              Contact
            </NavButton>
          </Stack>
        </DrawerContainer>
      </SwipeableDrawer>
    </>
  );
};

export default SwipeableMobileDrawer;
