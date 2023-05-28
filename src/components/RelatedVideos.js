import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RelatedVideos = () => {
  const [searchParams] = useSearchParams();

  const [relatedVideos, setRelatedVideos] = useState([]);

  return (
    <div className='flex flex-col gap-4 p-4'>
      {relatedVideos &&
        relatedVideos.length > 0 &&
        relatedVideos.map((video) => (
          <Link to={'/watch?v=' + video.id.videoId}>
            <div
              className='flex flex-col gap-3 text-black w-80'
              key={video.id.videoId}
            >
              <img
                className='rounded-lg'
                alt='thumbnails'
                src={video?.snippet?.thumbnails?.medium?.url}
              />
              <ul className='flex flex-col '>
                <li className='font-semibold py-1'>{video?.snippet?.title}</li>
                <li className='text-sm text-slate-400'>
                  {video?.snippet?.channelTitle}
                </li>
                <li className='text-sm text-slate-400'>
                  {video?.statistics?.viewCount}
                </li>
              </ul>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RelatedVideos;
