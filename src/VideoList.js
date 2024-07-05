import React from "react";
import { List, ListItem, ListItemText, ListItemIcon, Tooltip, CardMedia } from "@mui/material";

const VideoList = ({ videos, playVideo }) => {
  return (
    <List>
      {videos.map((video) => (
        <ListItem key={video.id} button onClick={() => playVideo(video.id - 1)}>
          <ListItemIcon>
            <Tooltip title={video.name}>
              <CardMedia component="img" src={video.thumbnail} alt={video.name} style={{ width: 50 }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={video.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default VideoList;
