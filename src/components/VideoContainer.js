import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setSelectedVideo } from '../utils/appSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const { page, videos } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    if (videos.length <= 0) {
      dispatch(fetchPosts(page));
    }
  }, []);

  return (
    <div className='mt-8'>
      {videos.length <= 0 ? (
        <div className='w-full flex flex-wrap justify-evenly'>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={videos.length} //This is important field to render the next data
          next={() => {
            dispatch(fetchPosts(page));
          }}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className='w-full flex flex-wrap justify-evenly'
        >
          {videos.map((video, index) => {
            let url = video.submission.mediaUrl.split('/');
            let id = url[url.length - 1];
            return (
              <Link
                to={'/watch?id=' + id}
                key={video.postId}
                onClick={() => {
                  dispatch(setSelectedVideo(video));
                }}
              >
                <VideoCard info={video} />
              </Link>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default VideoContainer;
