import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  ErrorPage,
  TechnicalIssue,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/technicalissue" element={<TechnicalIssue />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

/*
Issues to fix:
1) increase sidebar zindex --done
2) horizotal scroll bar on mobile on videodetail page in related videos one of those are overflowing
3) after clicking on video loading is not display correctly it should have all black but only text background color is black it should have calculated height like other loading
4) transform scale card should be disable on mobile because it causes overflow problem --done

*/
