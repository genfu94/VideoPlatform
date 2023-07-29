import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700,800,900"],
      },
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
