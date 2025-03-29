import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import App from "./components/App";
import { FilterProvider } from "./contexts/FilterContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
