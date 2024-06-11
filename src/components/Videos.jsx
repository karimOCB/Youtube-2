import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import { useState, useEffect } from 'react'

const Videos = ({ videos, direction }) => {
  const [videosFiltered, setVideosFiltered] = useState([]);

  useEffect(()=> {
    setVideosFiltered(videos.filter((item) => (item.id.videoId || item.id.channelId) && !item.id.playlistItem));
  }, [videos])


  if(!videos?.length) return "Loading...";
  if(!videosFiltered?.length) return "Loading...";

  return (
    <Stack direction={direction || "row" } flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videosFiltered.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos