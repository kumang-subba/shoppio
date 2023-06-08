import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableMobileDrawer from "./SwipeableMobileDrawer";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { totalInCart, toggleCart, closeCart } = useContext(CartContext);
  const NavButton = styled(Button)(({ theme, to }) => ({
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 0,
      height: "2px",
      backgroundColor: "#6b8234",
      transition: "all 0.5s",
      transformOrigin: "left",
    },
    "&:hover::after": {
      transform: "scaleX(2)",
      width: "50%",
    },
    zIndex: 1000,
    ...(loc.pathname == to && {
      color: "#6b8234",
      "&::after": {
        content: "''",
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "2px",
        backgroundColor: "#6b8234",
      },
      "&:hover::after": {
        transform: "none",
      },
    }),
    ...(isMobile && {
      display: "none",
    }),
  }));
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#d9d7d7" }}>
      <Toolbar>
        <Stack flexGrow={1}>
          <img
            src="./images/shoppioBanner.png"
            alt=""
            style={{ height: 75, width: 120, cursor: "pointer" }}
            onClick={handleScrollToTop}
          />
        </Stack>

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
        <IconButton
          sx={{ color: (theme) => theme.palette.secondary.main }}
          onClick={toggleCart}
        >
          <Badge color="success" badgeContent={totalInCart}>
            <ShoppingBagOutlinedIcon />
          </Badge>
        </IconButton>
        {isMobile && (
          <>
            <IconButton
              sx={{ color: (theme) => theme.palette.secondary.main }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableMobileDrawer open={open} setOpen={setOpen} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
