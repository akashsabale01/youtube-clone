import { Box, Stack, Typography } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction, justifyContentForFeed }) => {
  if (!videos?.length)
    return (
      <Typography color="#fff" variant="h4" fontWeight="bold">
        Loading..
      </Typography>
    );

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={
        justifyContentForFeed || {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }
      }
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}

          {item.id.channelId && <ChannelCard channelDetail={item} />}

        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
