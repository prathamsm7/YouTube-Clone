import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className='px-3 rounded-xl hover:text-white hover:bg-black active:bg-black py-1 bg-gray-100'>
        {name}
      </button>
    </div>
  );
};

export default Button;
