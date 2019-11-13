import React,{Component} from 'react';

class House1 extends Component {

    
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"House1 <br> Produces: "+this.props.house1ProductionPercent + "<br> Production per second: " + this.props.house1CoinPerSecond 
        }
  
  }

  componentDidMount() {
    this.interval = setInterval(() => 
    this.setState(
      this.setState(preState =>{
        return {toolTip:"House1 <br> Produces: "+this.props.house1ProductionPercent + " of Total <br> Production per second: " + this.props.house1CoinPerSecond }
      })
        ), 1000);
  }

  
  render() {
    return  <a onClick={this.props.action}>
    <div class="item_house_cont">

    <img data-tip={this.state.toolTip} src="./images/house1.png" alt=""/>

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

