import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }) => {
  return (
    <div>
      <ReactPlayer
        url={video.url}
        controls={true}
        width="100%"
        height="auto"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};

export default VideoPlayer;
