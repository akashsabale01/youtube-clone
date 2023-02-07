import React from "react";
import { Box, Stack } from "@mui/material";
import technicalDifficultyGif from "../assets/technicalDifficulty.gif";

const TechnicalIssue = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#000", height: "calc(100vh - 78px)" }}
    >
      <Box>
        <img
          src={technicalDifficultyGif}
          alt="page not found"
          style={{
            width: "60vw",
            height: "60vh",
          }}
        />
      </Box>

      {/* <Typography variant="h4" sx={{ color: "#fff" }}>
        Facing Technical Issue
      </Typography> */}
    </Stack>
  );
};

export default TechnicalIssue;
