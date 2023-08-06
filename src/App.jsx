import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Newsletter from "./components/Newsletter";
import HomeFooter from "./components/HomeFooter";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#696764",
      },
    },
    typography: {
      allVariants: {
        fontFamily: `'Open Sans', 'sans-serif'`,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <CartDrawer />
          <Newsletter />
          <HomeFooter />
        </CartProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
