import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ITrack } from '../../interface/tracks'

interface TrackDetailsProps {
  track: ITrack
}

const TrackDetail: React.FC<TrackDetailsProps> = ({track}) => {
  return (
    <>
    <Grid container>
        <img alt={track.name} width={200} height={200} />
        <Box>
          <Typography variant="h5"> Track name: {track.name}</Typography>
          <Typography variant="h6"> Artist: {track.artist}</Typography>
          <Typography variant="h6"> Listens count: {track.listens}</Typography>
        </Box>
      </Grid>
      <Box>
        <Typography variant="caption">Song text</Typography>
        <Typography variant="body2">{track.text}</Typography>
      </Box>
    </>
  )
}

export default TrackDetail