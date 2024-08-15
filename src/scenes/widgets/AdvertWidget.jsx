import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrappper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrappper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="400"
        height="auto"
        alt="advert"
        src="http://localhost:6001/assets/info11.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Mikeys Pizza</Typography>
        <Typography color={medium}>mikeypizza.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Craving the Perfect Slice? 🍕 Our pizzas are crafted with the freshest
        ingredients, mouthwatering toppings, and our signature hand-tossed
        dough. Whether you're a fan of classic flavors or bold new creations,
        every bite is a taste of pizza perfection. Hungry? Grab a slice at
        Mikeys Pizza today!
      </Typography>
    </WidgetWrappper>
  );
};

export default AdvertWidget;
