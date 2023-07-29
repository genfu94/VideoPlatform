import styled from "@emotion/styled";
import React, { useRef } from "react";

export interface VideoInfo {
  thumbnailURL: string;
  title: string;
  videoURL?: string;
  duration: string;
}

const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  background: #333;
  width: 12rem;
  height: 8rem;
  border-radius: 0.6rem;
`;

const VideoThumbnail = styled.video`
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const DurationTag = styled.span`
  position: absolute;
  right: 5%;
  bottom: 5%;

  padding: 0.2rem 0.4rem;
  color: white;
  font-size: 0.5rem;
  background: black;
  border-radius: 0.4rem;
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 0.7rem;
  color: #333;
  font-weight: 700;
  text-align: left;
  padding: 0.6rem 0rem;
  width: 90%;
  margin-left: 5%;
`;

const playVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef !== null && videoRef.current !== null) {
    videoRef.current.play();
  }
};

const resetVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef !== null && videoRef.current !== null) {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }
};

export const VideoEntry = ({thumbnailURL, title, videoURL, duration}: VideoInfo) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <Thumbnail>
        <VideoThumbnail
          ref={videoRef}
          onMouseEnter={() => playVideo(videoRef)}
          onMouseLeave={() => resetVideo(videoRef)}
          muted
          loop
        >
          <source src={thumbnailURL} />
        </VideoThumbnail>
        <DurationTag>{duration}</DurationTag>
      </Thumbnail>
      <Title>{title}</Title>
    </div>
  );
};
