import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData});
    this.setState({cards: cardData});
  }

  changeSelected = tab => {
    this.setState({selected: tab})
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
   if (this.state.selected === 'all') { 
     return this.state.cards;
   } else {
     const filteredCards = this.state.cards.filter( card =>
      card.tab.includes(this.state.selected)
      );
      return filteredCards;
   }

  };

  render() {
    return (
      <div className="content-container">
        <Tabs
        tabs={this.state.tabs}
        selectedTab={this.state.selectedTab}
        selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
