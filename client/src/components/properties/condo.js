import React,{Component} from 'react';


class Condo extends Component {
  
  constructor(props){
    super(props);
    
        this.state = {
            toolTip:"Condo <br> Produces: "+this.props.condoProductionPercent + "<br> Production per second: " + this.props.condoCoinPerSecond 
        }
  
  }

  componentDidMount() {
    this.interval = setInterval(() => 
    this.setState(
      this.setState(preState =>{
        return {toolTip:"Condo <br> Produces: "+this.props.condoProductionPercent + " of Total <br> Production per second: " + this.props.condoCoinPerSecond }
      })
        ), 1000);
  }


    render() {
      return <a onClick={this.props.action}>
      <div class="item_house_cont">
      <img data-tip={this.state.toolTip} src="./images/condo.png" alt=""/>
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