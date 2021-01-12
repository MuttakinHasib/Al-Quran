import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import chaptersList from '../../data/chaptersList';
import convertStartCase from 'lodash.startcase';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

const SearchBar = ({ isDarkTheme }) => {
  const history = useHistory();
  
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .ant-select-selector { 
        background-color: ${
          isDarkTheme ? 'rgb(20,33,46)' : '#eee'
        } !important; transition: background-color .5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        border:none !important;
      }
      .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{
        box-shadow:none !important;
      }
      .ant-select-arrow {display:none !important;}
      .ant-select-selection-placeholder{color: ${
        isDarkTheme ? '#aaa' : 'rgba(17, 24, 39,.6)'
      }!important; transition: color .5s cubic-bezier(0.4, 0, 0.2, 1) !important;}
    `,
        }}
      />
      <div className='relative'>
        <Select
          showSearch
          className='font-semibold dark:text-gray-300'
          style={{ width: 200 }}
          autoFocus
          placeholder='Select a surah'
          optionFilterProp='children'
          onChange={val => {
            history.push(val);
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value='/'>Home</Option>
          {chaptersList.map(({ name }, i) => (
            <Option key={name} value={`/${i + 1}`}>
              {convertStartCase(name)}
            </Option>
          ))}
        </Select>
        <button
          type='submit'
          className='absolute right-0 top-0 mt-2 mr-4 focus:outline-none'
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
      </div>
    </>
  );
};

export default SearchBar;
