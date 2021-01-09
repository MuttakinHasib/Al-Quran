import React from 'react';
// import { app } from 'electron';
// import * as electron from 'electron';

import { Transition } from '@headlessui/react';
import SettingsContainer from './SettingsContainer';

const Settings = props => {
  return (
    <Transition show={props?.isOpen || false}>
      <div className='fixed inset-0 overflow-hidden z-30'>
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='absolute inset-0 bg-gray-600 bg-opacity-75 transition-opacity'
              aria-hidden='true'
              onClick={() => props?.setIsOpen(!props?.isOpen)}
            ></div>
          </Transition.Child>
          <section
            className='absolute inset-y-0 right-0 pl-10 max-w-full flex'
            aria-labelledby='slide-over-heading'
          >
            <Transition.Child
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='relative w-screen max-w-md h-screen'>
                <div className='h-full flex flex-col py-6 bg-white dark:bg-darkNav transition-colors duration-500 shadow-xl overflow-y-auto'>
                  <div className='mt-16 pt-2 relative flex-1 px-4 sm:px-6'>
                    {/* Replace with your content */}
                    <div className='absolute inset-0 px-4 sm:px-6'>
                      <div
                        className='h-full flex justify-between flex-col border-2 border-dashed border-gray-200 dark:border-gray-700 transition-colors duration-500 p-5'
                        aria-hidden='true'
                      >
                        <SettingsContainer />
                        <div className='pb-5'>
                          <div className='uppercase font-semibold flex items-center justify-center text-center text-sm text-gray-600 dark:text-gray-200 transition-colors duration-500'>
                            Designed & Developed with &nbsp;
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='#f36'
                              className='w-5 h-5'
                            >
                              <path
                                fillRule='evenodd'
                                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                                clipRule='evenodd'
                              />
                            </svg>
                            &nbsp; By&nbsp;
                            <a
                              href='http://facebook.com/hasibmolla28/'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-500 hover:text-blue-700'
                            >
                              Hasib
                            </a>
                          </div>
                          <h1 className='font-headTitle text-lg text-center font-bold mt-3 text-gray-600 dark:text-gray-200 transition-colors duration-500'>
                            Al Quran
                          </h1>
                          {/* <span className='font-light'>{getVersion()}</span> */}
                        </div>
                      </div>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </section>
        </div>
      </div>
    </Transition>
  );
};

export default Settings;
