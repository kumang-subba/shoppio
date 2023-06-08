import { styled } from "@mui/system";
import {
  Drawer,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Toolbar,
  Container,
  InputLabel,
  IconButton,
  Input,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CloseIcon from "@mui/icons-material/Close";

const NumberInputContainer = styled("div")`
  display: flex;
  align-items: center;
  position: relative;
`;

const ItemDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "100vw",
    maxWidth: "100%",
  },
  zIndex: 999,
});
const ImageContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const ItemImage = styled("img")`
  height: 500px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

const DetailsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 45%;
  word-break: break-all;
`;

const SizeSelectionContainer = styled("div")`
  display: flex;
  align-items: center;
`;
const InputBox = styled(Input)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 35px;
  height: 35px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #4c8bf5;
    box-shadow: 0 0 0 2px #4c8bf5;
  }
`;

const ShopItemDrawer = ({ selectedItem }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleInputChange = (event) => {
    setValue(parseInt(event.target.value) || 0);
  };

  const [error, setError] = useState(false);
  const { increaseQuantity, handleCloseItemDetails, itemDetails } =
    useContext(CartContext);
  const closeDrawer = () => {
    setValue(0);
    setError(false);
    setSelectedSize("");
    handleCloseItemDetails();
  };
  return (
    <ItemDrawer anchor="right" open={itemDetails} onClose={closeDrawer}>
      <Toolbar />

      {selectedItem && (
        <Container
          style={{
            marginTop: "50px",
            display: "flex",
            gap: 20,
            position: "relative",
          }}
        >
          <ImageContainer>
            <ItemImage src={selectedItem.src} alt={selectedItem.name} />
          </ImageContainer>
          <DetailsContainer>
            <Typography variant="h4" fontWeight={"bold"} mb={5}>
              {selectedItem.name}
            </Typography>
            <Typography fontWeight={"bold"} variant="h4">
              €{selectedItem.price}
            </Typography>
            <SizeSelectionContainer>
              <FormControl variant="outlined">
                <InputLabel>Select Size</InputLabel>
                <Select
                  value={selectedSize}
                  label="Select Size"
                  onChange={handleSizeChange}
                  sx={{ width: "150px" }}
                  error={error && selectedSize === ""}
                >
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                </Select>
                {error && selectedSize === "" && (
                  <FormHelperText
                    sx={{
                      position: "absolute",
                      right: "-90%",
                      bottom: 20,
                      color: "red",
                    }}
                  >
                    Please select a size
                  </FormHelperText>
                )}
              </FormControl>
            </SizeSelectionContainer>
            <NumberInputContainer>
              <IconButton onClick={handleDecrease}>
                <RemoveIcon />
              </IconButton>
              <InputBox
                type="text"
                value={value}
                onChange={handleInputChange}
                error={error && value === 0}
              />
              {error && value === 0 && (
                <FormHelperText
                  sx={{
                    position: "absolute",
                    right: "-120%",
                    bottom: 10,
                    color: "red",
                  }}
                >
                  Please enter a number
                </FormHelperText>
              )}
              <IconButton onClick={handleIncrease}>
                <AddIcon />
              </IconButton>
            </NumberInputContainer>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2b8519" }}
              onClick={() => {
                if (selectedSize == "" || value === 0) {
                  setError(true);
                  return;
                } else {
                  setError(false);
                  setSelectedSize("");
                  setValue(0);
                  increaseQuantity(selectedItem.id, selectedSize, value);
                }
              }}
            >
              Add to Cart
            </Button>
            <Typography fontWeight={"bold"} variant="h6">
              Product Details
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              atque quibusdam, optio nobis, beatae laborum sunt quaerat,
              necessitatibus culpa cumque fugiat quam dolores. Nesciunt, dolores
              corporis exercitationem, vitae a atque dolorem distinctio iure,
              laudantium adipisci placeat maxime itaque. Maxime error magni
              veritatis aut architecto quas magnam atque minus, dignissimos
              quam!
            </Typography>
          </DetailsContainer>
          <IconButton
            sx={{ position: "absolute", right: "10%", top: 0 }}
            onClick={closeDrawer}
          >
            <CloseIcon />
          </IconButton>
        </Container>
      )}
    </ItemDrawer>
  );
};
export default ShopItemDrawer;
