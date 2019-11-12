import React,{Component} from 'react';

class House1 extends Component {
  
  render() {
    return  <a onClick={this.props.action}>
    <div class="item_house_cont">

    <img src="./images/house1.png" alt=""/>

    <div class="date_cont">
        <h3>House</h3>
        <img src="./images/dollar.png" alt=""/><p>{this.props.moneyDisplay}</p>
    </div>
    <h2>{this.props.house1Quantity}</h2>
      
    </div>
    </a>
  }
}

export default House1;

