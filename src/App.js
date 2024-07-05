import React from "react";
import { Container, Grid, Typography, TextField, IconButton } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import videoData from "./videoData";

const App = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [urlInput, setUrlInput] = React.useState("");

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
  };

  const playUrlVideo = () => {
    const newVideo = {
      id: videoData.length + 1,
      name: "Custom Video",
      url: urlInput,
      thumbnail: "", // You can add a default thumbnail or fetch it from metadata
      description: "Custom video added via URL input."
    };
    videoData.push(newVideo);
    setCurrentVideoIndex(videoData.length - 1);
    setUrlInput("");
  };

  const handleInputChange = (event) => {
    setUrlInput(event.target.value);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videoData.length - 1 : prevIndex - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videoData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
       Bindu Patil React Assessment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <VideoPlayer video={videoData[currentVideoIndex]} />
          <TextField
            label="Enter URL to play video"
            variant="outlined"
            fullWidth
            value={urlInput}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={playUrlVideo} aria-label="play">
                  Play
                </IconButton>
              )
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <VideoList videos={videoData} playVideo={playVideo} />
        </Grid>
      </Grid>
      <div>
        <IconButton onClick={handlePrevVideo} aria-label="previous">
          Prev Video
        </IconButton>
        <IconButton onClick={handleNextVideo} aria-label="next">
          Next Video
        </IconButton>
      </div>
      <VideoDetails video={videoData[currentVideoIndex]} />
    </Container>
  );
};

export default App;
