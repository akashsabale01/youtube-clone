import React from "react";
import { Box, Stack, Button } from "@mui/material";
import pageNotFound from "../assets/pageNotFound.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#000", height: "calc(100vh - 78px)" }}
    >
      <Box>
        <img
          src={pageNotFound}
          alt="page not found"
          style={{
            width: "50vw",
            height: "50vh",
          }}
        />
      </Box>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          padding: "8px 51px",
          marginTop: "30px",
          color: "#FFF",
          backgroundColor: "#FC1503",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "none",
            backgroundColor: "#FC1503",
            transform: "scale(1.05)",
            boxShadow: "5px 4px 44px #fd4c3e",
          },
        }}
      >
        Go To Homepage
      </Button>
    </Stack>
  );
};

export default ErrorPage;
