import React from 'react';

const VideoCard = ({ info }) => {
  const { creator, comment, reaction, submission } = info;

  return (
    <div className='flex flex-col w-[360px] rounded-lg mb-10'>
      <img
        className='rounded-lg h-52 w-full'
        alt='thumbnails'
        src={submission.thumbnail}
      />
      <div className='flex p-2 gap-2'>
        <img
          src={creator.pic}
          alt=''
          className='rounded-full max-h-12 max-w-12'
        />
        <ul className='flex flex-col '>
          <li className='font-semibold py-1'>{submission.title}</li>
          <li className='text-sm text-slate-400'>{creator.handle}</li>
          <li className='text-sm text-slate-400'>{reaction.count} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
