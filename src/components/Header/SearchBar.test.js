import React from 'react';

const SearchBar = () => {
  return (
    <div class='relative text-gray-600'>
      <input
        type='text'
        placeholder='Search'
        class='bg-gray-200 dark:hover:border-indigo-900 border-2 border-transparent text-gray-900 font-semibold dark:bg-darkNavSearch transition-colors duration-500 dark:text-gray-300 h-8 px-5 pr-10 rounded-sm text-sm focus:outline-none'
      />
      <button
        type='submit'
        class='absolute right-0 top-0 mt-2 mr-4 focus:outline-none'
      >
        <svg
          className='h-4 w-4 fill-current dark:text-gray-400 transition-colors duration-500'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 56.966 56.966'
          width='1em'
          height='1em'
        >
          <path d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z' />
        </svg>
      </button>
      <div class='absolute shadow top-8 z-40 w-full lef-0 rounded max-h-select overflow-y-auto'>
        <div class='flex flex-col w-full'>
          <div class='cursor-pointer w-full border-gray-100 dark:border-gray-700 rounded-t border-b hover:bg-indigo-100'>
            <div class='flex w-full items-center p-2 pl-2 border-transparent bg-white dark:bg-darkNav border-l-2 relative dark:hover:bg-gray-700 hover:bg-gray-50'>
              <div class='w-full items-center flex'>
                <div class='mx-2 leading-6'>C++</div>
              </div>
            </div>
          </div>
          <div class='cursor-pointer w-full border-gray-100 dark:border-gray-700 rounded-t border-b hover:bg-indigo-100'>
            <div class='flex w-full items-center p-2 pl-2 border-transparent bg-white dark:bg-darkNav border-l-2 relative dark:hover:bg-gray-700 hover:bg-gray-50'>
              <div class='w-full items-center flex'>
                <div class='mx-2 leading-6'>Python </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
