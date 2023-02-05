import { Box, Stack, Typography } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
// import { motion } from "framer-motion";

const Videos = ({ videos, direction, justifyContentForFeed }) => {
  if (!videos?.length)
    return (
      <Typography color="#fff" variant="h4" fontWeight="bold">
        Not Found...
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
          {/* {item.id.videoId && (
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <VideoCard video={item} />
            </motion.div>
          )} */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {/* {item.id.channelId && (
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ChannelCard channelDetail={item} />
            </motion.div>
          )} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
