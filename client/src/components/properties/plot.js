import React,{Component} from 'react';



class Plot extends Component {
  
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"Plot <br> Produces: "+this.props.plotProductionPercent + "<br> Production per second: " + this.props.plotCoinPerSecond 
        }
  
  }

  componentDidMount() {
    this.interval = setInterval(() => 
    this.setState(
      this.setState(preState =>{
        return {toolTip:"Plot <br> Produces: "+this.props.plotProductionPercent + " of Total <br> Production per second: " + this.props.plotCoinPerSecond }
      })
        ), 1000);
  }

    render() {
      return  <a onClick={this.props.action}>
      <div class="item_house_cont">
      
      <img data-tip={this.state.toolTip} src="./images/plot.png" alt=""/>
      
      <div class="date_cont">
          <h3>Plot</h3>
          <img src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
      </div>
          <h2>{this.props.plotQuantity}</h2>
      </div>
  </a>
    }
  }

  export default Plot;