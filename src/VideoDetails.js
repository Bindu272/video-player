import React from "react";
import { Card, CardContent, Typography, Tooltip } from "@mui/material";

const VideoDetails = ({ video }) => {
  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {video.name}
        </Typography>
        <Typography color="text.secondary">
          {video.description}
        </Typography>
        <Tooltip title="More Info">
          <Typography color="primary">
            Hover here for more details
          </Typography>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default VideoDetails;
