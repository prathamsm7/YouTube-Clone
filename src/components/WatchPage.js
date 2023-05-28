import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const WatchPage = () => {
  const { creator, comment, reaction, submission } = useSelector(
    (state) => state.app.selectedVideo
  );

  return (
    <div className='px-5 w-9/12 2xl:px-4 my-5'>
      <div className='px-5 flex flex-col text-black'>
        <iframe
          height='500'
          src={submission?.mediaUrl}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='w-full'
        ></iframe>
        <div className='py-2 px-1 '>
          <h2 className='text-xl font-bold'>{submission?.title}</h2>
          <div className='flex gap-3 my-2'>
            <img src={creator?.pic} alt='' className='h-10 w-10 rounded-full' />
            <h2 className='text-base font-bold'>{creator?.handle}</h2>
          </div>
          <div className='bg-slate-100 p-2 rounded-xl'>
            <span className='mx-2 font-semibold'>{reaction?.count} Views</span>
            <span className='mx-2 font-semibold'>
              {comment?.count} Comments
            </span>
            <p>{submission?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
