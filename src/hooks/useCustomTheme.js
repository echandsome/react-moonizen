import { createTheme } from "@mui/material";
import DarkStyle from "../theme/dark";
import WhiteStyle from "../theme/white";

const useCustomTheme = (darkMode) => {
  const customTheme = createTheme(
    darkMode
      ? DarkStyle
      : WhiteStyle
  );

  return { customTheme };
};

export default useCustomTheme;
