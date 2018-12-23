import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#FFD549" },
  secondary: { main: "#342d34" }
};
const themeName = "Bright Sun Thunder Chickens";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette,
  themeName
});

export default theme;
