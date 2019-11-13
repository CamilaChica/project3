import React,{Component} from 'react';


class House2 extends Component {
  
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"House2 <br> Produces: "+this.props.house2ProductionPercent + "<br> Production per second: " + this.props.house2CoinPerSecond 
        }
  
  }

  componentDidMount() {
    this.interval = setInterval(() => 
    this.setState(
      this.setState(preState =>{
        return {toolTip:"House2 <br> Produces: "+this.props.house2ProductionPercent + " of Total <br> Production per second: " + this.props.house2CoinPerSecond }
      })
        ), 1000);
  }

    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img data-tip={this.state.toolTip} src="./images/house2.png" alt=""/>
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