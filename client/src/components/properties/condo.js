import React,{Component} from 'react';


class Condo extends Component {
    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img src="./images/condo.png" alt=""/>
      <div class="date_cont">
          <h3>Condo</h3>
          <img src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
          </div>
              <h2>{this.props.condoQuantity}</h2>
          </div>
      </a>
    }
  }

  export default Condo;