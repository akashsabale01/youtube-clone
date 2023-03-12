import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { MagnifyingGlass } from "react-loader-spinner";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { demoBannerUrl } from "../utils/constants";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        if (data?.error) {
          console.error(data.error);
          return;
        }

        setChannelDetail(data?.items[0]);
        setLoading(false);
      })
      .catch((error) => console.error(error));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&type=video`)
      .then((data) => {
        if (data?.error) {
          console.error(data.error);
          return;
        }

        setVideos(data?.items);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const bannerUrl = channelDetail?.brandingSettings?.image?.bannerExternalUrl;
  console.log(bannerUrl);
  console.log("dd", channelDetail);

  if (!loading) {
    return (
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              backgroundImage: `url(${bannerUrl || demoBannerUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop={"-60px"} />
        </Box>

        <Box display="flex" p="2" sx={{ mt: "70px" }}>
          <Box sx={{ mr: { sm: "10px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    );
  } else {
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
  }
};

export default ChannelDetail;
