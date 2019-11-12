import React,{Component} from 'react';


class House2 extends Component {
    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img src="./images/house2.png" alt=""/>
      <div class="date_cont">
          <h3>House</h3>
          <img src="./images/dollar.png" alt=""/>
      <p>{this.props.moneyDisplay}</p>
      </div>
      <h2>{this.props.house2Quantity}</h2>
      </div>
      </a>
    }
  }

  export default House2;