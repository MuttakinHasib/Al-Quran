import React from 'react';

const ButtonWithIcon = ({ icon, name, onClick, className, ...props }) => {
  return (
    <button
      className={`focus:outline-none hover:text-gray-700 dark:hover:text-gray-300 stroke-current text-gray-500 transition duration-500 ease-in-out ${className}`}
      {...{ onClick }}
    >
      <div className='flex justify-center items-center'>
        <div className='w-6 h-6 mr-2'>{icon}</div>
        <span className='font-semibold'>{name}</span>
      </div>
    </button>
  );
};

export default ButtonWithIcon;
