import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        if (data?.error) {
          console.error(data.error);
          return;
        }
        setVideos(data.items);
      })
      .catch((error) => console.error(error));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "calc(100vh - 78px)" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
          overflow: "auto",
          position: "sticky",
          top: "78px",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: { xs: "auto", md: "calc(100vh - 110px)" },
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos
          videos={videos}
          justifyContentForFeed={{
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
