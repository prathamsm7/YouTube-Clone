import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import MainSidebar from './MainSidebar';

const MainContainer = () => {
  return (
    <div className='flex mt-24'>
      <MainSidebar />
      <div className='px-5 ml-20'>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
