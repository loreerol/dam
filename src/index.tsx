import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import theme from "./theme";
import App from "./pages/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./features/filtering/contexts/FilterContext";
import { FavoritesProvider } from "./features/filtering/contexts/FavoritesContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <FavoritesProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </FavoritesProvider>
      </FilterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
