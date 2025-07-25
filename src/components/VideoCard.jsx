import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='w-72 p-2 m-2 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/> 
      <ul>
         <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
