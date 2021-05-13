import React from 'react';
import { ReactComponent as Loader } from '/images/Loader.svg';

const Spinner = () => {
  return (
    <div className='flex w-full justify-center items-center' style={{height:'90vh'}}>
      <Loader width='300px' />
    </div>
  );
};

export default Spinner;
