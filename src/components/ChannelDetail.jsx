import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date&type=video`
    ).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundColor: "#FFE53B",
            backgroundImage: "linear-gradient(239deg, #FFE53B 0%, #FF2525 74%)",
            zIndex: 10,
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-125px"} />
      </Box>

      <Box display="flex" p="2" sx={{ mt: "10px" }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
