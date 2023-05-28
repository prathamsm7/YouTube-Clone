import React from 'react';
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex gap-3'>
      <Button name='All' />
      <Button name='Music' />
      <Button name='Melodies' />
      <Button name='Jukebox' />
      <Button name='Cricket' />
      <Button name='Live' />
      <Button name='News' />
      <Button name='Gadgets' />
      <Button name='Trailers' />
    </div>
  );
};

export default ButtonList;
