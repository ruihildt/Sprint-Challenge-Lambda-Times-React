import React from 'react';
import Tab from './Tab';
import pt from 'prop-types';
// import { tabData } from '../../data';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {
              props.tabs.map(tab =>
                <Tab
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

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes = {
  tabs: pt.arrayOf(pt.string).isRequired,
}