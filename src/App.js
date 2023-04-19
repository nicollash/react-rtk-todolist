import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import AccountMenu from "./AccountMenu";
import { BasicForm } from "./views";

import store from "./store/reducer";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="sm">
          <AccountMenu />
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              React Skills test
            </Typography>
          </Box>
          <Routes>
            <Route path="/todo" element={<BasicForm />} />
            <Route path="*" element={<></>} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}
