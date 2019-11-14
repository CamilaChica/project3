import React,{Component} from 'react';
import Mansion from '../../../components/properties/mansion'

class MansionCtrl extends Component {
  constructor(props){
    super(props);
      this.mansionHandler = this.mansionHandler.bind(this);
      this.state = {
        mansionPerSecond: 0,
        percentageTotal: 0
      }
       }

mansionHandler() {
        if (this.props.currentMoney >= this.props.mansionWorth){
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.mansionWorth);

                  this.props.updateInfo(
                      "mansionAmount",
                      "mansionQuantity",
                      this.props.mansionWorth * 1.5,
                      this.props.mansionQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 18
                  );

                  this.setState(preState =>{
                    return {mansionPerSecond: preState.mansionPerSecond + 18}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: (((preState.mansionPerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
                  
              }}

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    return {percentageTotal: (((preState.mansionPerSecond/this.props.currentPerSecond)*100)+"%") }
                    })
                    ), 1000);
  }
     
             render()
             {
              return <Mansion currentMoney={this.props.currentMoney} mansionProductionPercent={this.state.percentageTotal} mansionCoinPerSecond={this.state.mansionPerSecond} action={this.mansionHandler} moneyDisplay={this.props.mansionWorth} mansionQuantity={this.props.mansionQuantity}></Mansion>
             }
     
       }

export default MansionCtrl;

