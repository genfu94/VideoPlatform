import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

import { ContentGrid } from "../../components/ContentGrid/ContentGrid";
import { VideoEntry, VideoInfo } from "../../components/VideoEntry/VideoEntry";
import { fetchLatest } from "../../apis/ContentAPI";

export const Home = () => {
  const [content, setContent] = useState<VideoInfo[]>([]);

  useEffect(() => {
    const fetchedContent = fetchLatest();
    setContent(fetchedContent);
  }, [])

  return (
    <>
      <ContentGrid>
        {content.map((video: VideoInfo) => (
          <VideoEntry
            thumbnailURL={video.thumbnailURL}
            videoURL={video.videoURL}
            title={video.title}
            duration={video.duration}
          />
        ))}
      </ContentGrid>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </>
  );
};
