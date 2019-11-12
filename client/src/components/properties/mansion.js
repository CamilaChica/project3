import React,{Component} from 'react';


class Mansion extends Component {
    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img src="./images/mansion.png" alt=""/>
      <div class="date_cont">
          <h3>Mansion</h3>
          <img src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
          </div>
              <h2>{this.props.mansionQuantity}</h2>
          </div>
      </a>
    }
  }

  export default Mansion;