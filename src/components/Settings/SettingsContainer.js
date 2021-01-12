import React from 'react';
import { Collapse, Divider, Select, Slider, Switch } from 'antd';
import { ReadOutlined, FontSizeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  arabicFontHandler,
  banglaFontHandler,
  transitionMode,
  mushafMode,
} from '../../Redux/_actions/settingsActions';

const { Panel } = Collapse;
const SettingsContainer = () => {
  const isDarkTheme = useSelector(({ theme }) => theme.dark);
  const {
    isMushaf,
    isTransition,
    arabicFontSize,
    banglaFontSize,
  } = useSelector(state => state.settings);
  const dispatch = useDispatch();

  return (
    <Collapse
      ghost
      accordion
      bordered={true}
      defaultActiveKey={['1']}
      className='site-collapse-custom-collapse'
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .ant-collapse-header{color: ${
        isDarkTheme ? '#aaa' : '#333'
      }!important; transition: color .5s ease-in-out !important;}
      .ant-select-selection-item{color: ${
        isDarkTheme ? '#aaa' : 'rgba(17, 24, 39,.6)'
      }!important; transition: color .5s ease-in-out !important;}
    `,
        }}
      />
      <Panel
        extra={<ReadOutlined style={{ color: '#4EB862', fontSize: '25px' }} />}
        header='Reading Settings'
        key='1'
        className='site-collapse-custom-panel text-base text-gray-50 font-semibold'
      >
        {/* <Divider volume={15} y={3}>
          <span className='text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500'>
            Transition
          </span>
        </Divider> */}
        <div className='flex items-center ml-4 mb-3'>
          <h6 className='mr-4 mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500'>
            Mushaf Mode
          </h6>
          <Switch
            defaultChecked={isMushaf}
            onChange={value => dispatch(mushafMode(value))}
          />
        </div>
        <Divider volume={15} y={3}>
          <span className='text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500'>
            Transition
          </span>
        </Divider>
        <div className='flex items-center ml-4 mb-3'>
          <h6 className='mr-4 mb-0 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500'>
            Translation Mode
          </h6>
          <Switch
            defaultChecked={isTransition}
            onChange={value => dispatch(transitionMode(value))}
          />
        </div>
        {/* <div className='d-flex align-items-center ml-4 mb-3'>
          <Select
            placeholder='Select Language'
            initialValue='bangla'
            disabled={!isTransition}
            // onChange={handleLanguage}
            style={{ fontSize: '15px' }}
          >
            <Select.Option style={{ fontSize: '15px' }} value='english'>
              English
            </Select.Option>
            <Select.Option style={{ fontSize: '15px' }} value='bangla'>
              Bangla
            </Select.Option>
          </Select>
        </div> */}
        {/* <div className='ml-4 mb-3 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500'>
          <h6 className='my-3 text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-500'>
            Select Bangla Transition
          </h6>
          <Select
            placeholder='Select Transition'
            initialValue='Taisirul'
            // disabled={
            //   !isTransition || (transitionLanguage === 'english' && true)
            // }
            // onChange={handleTransition}
            style={{ fontSize: '15px' }}
          >
            <Select.Option style={{ fontSize: '15px' }} value='taisirul_quran'>
              Taisirul Quran
            </Select.Option>
            <Select.Option style={{ fontSize: '15px' }} value='mujibur_rahman'>
              Mujibur Rahman
            </Select.Option>
          </Select>
        </div> */}
      </Panel>
      <Panel
        extra={<FontSizeOutlined style={{ color: '#f56', fontSize: '25px' }} />}
        header='Font Settings'
        key='2'
        className='site-collapse-custom-panel text-base text-gray-50 font-semibold'
      >
        <div className='px-5'>
          <div>
            <h3 className='text-gray-600 mb-3 dark:text-gray-300 font-semibold transition-colors duration-500'>
              Arabic font size
            </h3>
            <Slider
              min={35}
              max={70}
              defaultValue={arabicFontSize}
              onChange={value => dispatch(arabicFontHandler(value))}
            />
          </div>
          <div>
            <h3 className='text-gray-600 mb-3 dark:text-gray-300 font-semibold transition-colors duration-500'>
              Bangla font size
            </h3>
            <Slider
              min={20}
              max={60}
              defaultValue={banglaFontSize}
              onChange={value => dispatch(banglaFontHandler(value))}
            />
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default SettingsContainer;
