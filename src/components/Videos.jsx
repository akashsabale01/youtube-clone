import { Box, Stack } from "@mui/material";
import { MagnifyingGlass } from "react-loader-spinner";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction, justifyContentForFeed }) => {
  if (!videos?.length)
    return (
      <Stack
        direction="column"
        sx={{
          height: "calc(100vh - 78px)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MagnifyingGlass
          visible={true}
          height="150"
          width="150"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#FC1503"
        />
      </Stack>
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
