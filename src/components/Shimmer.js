import React from 'react';

const Shimmer = () => {
  return (
    <div className='flex flex-col w-[360px] rounded-lg mb-10 animate-pulse space-x-4'>
      <div className='h-52 w-full bg-slate-100 rounded-lg'></div>

      <div className='flex py-2 gap-2'>
        <div className='rounded-full h-11 w-12 bg-slate-100'></div>
        <ul className='flex flex-col w-full gap-2'>
          <li className='font-semibold py-1 h-1 w-full bg-slate-100 rounded-lg'></li>
          <li className='font-semibold py-1 h-1 w-full bg-slate-100 rounded-lg'></li>
          <li className='font-semibold py-1 h-1 w-full bg-slate-100 rounded-lg'></li>
        </ul>
      </div>
    </div>
  );
};

export default Shimmer;
