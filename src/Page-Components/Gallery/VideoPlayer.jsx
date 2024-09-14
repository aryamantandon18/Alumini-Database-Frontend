import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoPlayer.module.css'; // Import the CSS module

const VideoPlayer = ({ video, onClose }) => {
  return (
    <div className={styles.videoPlayer}>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
      <iframe
        className={styles.videoFrame}
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
      <div className={styles.videoDetails}>
        <h3 className={styles.videoTitle}>{video.title}</h3>
        <p className={styles.videoDescription}>{video.description}</p>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    youtubeId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoPlayer;
