import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { CheckCircle } from "@mui/icons-material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        if (data?.error) {
          console.error(data.error);
          return;
        }
        setVideoDetail(data.items[0]);
      })
      .catch((error) => console.error(error));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        if (data?.error) {
          console.error(data.error);
          return;
        }
        setVideos(data.items);
      })
      .catch((error) => console.error(error));
  }, [id]);

  // if (!videoDetail?.snippet) return "Loading...";
  if (!videos?.length)
    return (
      <Typography color="#fff" variant="h4" fontWeight="bold">
        Not Found...
      </Typography>
    );

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} sx={{ m: 2 }}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "75px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={1}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                {/* <Stack direction="row" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    <ThumbUpRoundedIcon
                      sx={{ fontSize: "15px", color: "white", ml: "5px" }}
                    />{" "}
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack> */}
                <Chip
                  variant="outline"
                  icon={<ThumbUpAltOutlinedIcon color="#fff" />}
                  label={parseInt(likeCount).toLocaleString()}
                  sx={{
                    color: "#fff",
                    backgroundColor: "#212121",
                    fontSize: "1rem",
                  }}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Related Videos  */}
        <Box
          px={2}
          py={{ xs: 5, md: 1 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
