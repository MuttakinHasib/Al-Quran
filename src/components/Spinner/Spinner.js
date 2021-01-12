import React from 'react';
import { ReactComponent as Loader } from '../../assets/images/Loader.svg';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='view'>
      <Loader width='300px' />
    </div>
  );
};

export default Spinner;
