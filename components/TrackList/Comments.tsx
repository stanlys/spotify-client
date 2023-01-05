import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ITrack } from "../../interface/tracks";

interface CommentsProps {
  track: ITrack;
}

const Comments: React.FC<CommentsProps> = ({ track }) => {
  return (
    <>
      <Grid container gap={1}>
        <TextField label="Name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button fullWidth>Add Comment</Button>
      </Grid>
      <Box>
        {track.comments.map((comment) => (
          <Box key={comment._id} m={1}>
            <Typography variant="body1">{comment.username}</Typography>
            <Typography variant="caption">{comment.text}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Comments;
