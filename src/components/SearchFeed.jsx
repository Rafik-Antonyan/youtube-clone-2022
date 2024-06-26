import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  // excel file
  // const handleFile = (e) => {
  //   ExcelRenderer(e.target.files[0], (err, resp) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(resp, "------resp");
  //     }
  //   });
  // };

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
