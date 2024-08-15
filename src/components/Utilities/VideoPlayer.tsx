import React, { useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = {
    width: '300',
    height: '250',
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const ShowVideo = () => {
    return (
      <>
        <button
          className="relative top-4 left-[-0.6rem] mr-1 px-2 rounded-full bg-color-secondary text-color-accent transition-all cursor-pointer"
          onClick={handleClose}
        >
          x
        </button>
        <YouTube
          videoId={id}
          onReady={(event: any) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert(`Video isn't Available`)}
        />
      </>
    );
  };

  const ButtonShowVideo = () => {
    return (
      <button
        onClick={handleOpen}
        className="transition-all px-2 py-1 bg-color-secondary text-color-accent cursor-pointer rounded-lg mr-2 mb-2 hover:text-color-primary hover:bg-color-accent"
      >
        Tonton Trailer
      </button>
    );
  };

  return (
    <div className="fixed xl:right-7 xl:bottom-3 right-1 bottom-1">
      {isOpen ? <ShowVideo /> : <ButtonShowVideo />}
    </div>
  );
};

export default VideoPlayer;
