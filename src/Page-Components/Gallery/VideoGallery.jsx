import React, { useState } from 'react';
import { videosData } from './videosData';
import VideoPlayer from './VideoPlayer';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      {selectedVideo ? (
        <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {videosData.map((video) => (
            <div
              key={video.id}
              className="cursor-pointer border border-gray-300 rounded-lg overflow-hidden shadow-lg"
              onClick={() => handleVideoClick(video)}
            >
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-2">
                <div className="text-lg font-semibold">{video.title}</div>
                <div className="text-gray-600 text-sm">{video.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
