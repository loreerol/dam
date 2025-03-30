import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import theme from "./theme";
import App from "./pages/App";
import { FilterProvider } from "./features/filtering/contexts/FilterContext";
import { FavoritesProvider } from "./features/filtering/contexts/FavoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilterProvider>
      <FavoritesProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </FavoritesProvider>
    </FilterProvider>
  </React.StrictMode>
);
