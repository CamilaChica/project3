import React,{Component} from 'react';


class Building extends Component {
    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img src="./images/building.png" alt=""/>
      <div class="date_cont">
          <h3>Building</h3>
          <img src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
          </div>
              <h2>{this.props.buildingQuantity}</h2>
          </div>
      </a>
    }
  }

  export default Building;