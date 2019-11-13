import React,{Component} from 'react';


class Building extends Component {

  constructor(props){
    super(props);

    this.state = {
      toolTip:"Building <br> Produces: "+this.props.buildingProductionPercent + "<br> Production per second: " + this.props.buildingCoinPerSecond 
  }

}

  componentDidMount() {
    this.interval = setInterval(() => 
    this.setState(
      this.setState(preState =>{
        return {toolTip:"Building <br> Produces: "+this.props.buildingProductionPercent + " of Total <br> Production per second: " + this.props.buildingCoinPerSecond }
      })
        ), 1000);
  }
    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img data-tip={this.state.toolTip} src="./images/building.png" alt=""/>
      <div class="date_cont">
          <h3>Building</h3>
          <img  src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
          </div>
              <h2>{this.props.buildingQuantity}</h2>
          </div>
      </a>
    }
  }

  export default Building;