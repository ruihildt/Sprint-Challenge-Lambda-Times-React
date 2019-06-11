import React from 'react';
import Tab from './Tab';
import pt from 'prop-types';
// import { tabData } from '../../data';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {
              props.tabs.map((tab, index) =>
                <Tab
                key={index}
                tab={tab}
                selectedTab={props.selectedTab}
                selectTabHandler={props.selectTabHandler}
                />
              )
            }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: pt.arrayOf(pt.string).isRequired,
}

export default Tabs;
