import { Transition } from '@headlessui/react';
import React from 'react';
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
                        className='h-full border-2 border-dashed border-gray-200 dark:border-gray-700 transition-colors duration-500 p-5'
                        aria-hidden='true'
                      >
                        <SettingsContainer/>
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
