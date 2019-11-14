import React,{Component} from 'react';
import Condo from '../../../components/properties/condo'

class CondoCtrl extends Component {
  constructor(props){
    super(props);
      this.condoHandler = this.condoHandler.bind(this);
      this.state = {
        condoPerSecond: 0,
        percentageTotal: 0
      }
       }

  condoHandler() {
        if (this.props.currentMoney >= this.props.condoWorth){
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.condoWorth);

             
                  this.props.updateInfo(
                      "condoAmount",
                      "condoQuantity",
                      this.props.condoWorth * 1.5,
                      this.props.condoQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 12
                  );

                  this.setState(preState =>{
                    return {condoPerSecond: preState.condoPerSecond + 12}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: (((preState.condoPerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
                  
              }}

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    return {percentageTotal: (((preState.condoPerSecond/this.props.currentPerSecond)*100)+"%") }
                    })
                    ), 1000);
  }
   
                  
                  render()
             {
              return <Condo currentMoney={this.props.currentMoney} condoProductionPercent={this.state.percentageTotal} condoCoinPerSecond={this.state.condoPerSecond} action={this.condoHandler} moneyDisplay={this.props.condoWorth} condoQuantity={this.props.condoQuantity}></Condo>
             }
     
       }

export default CondoCtrl;

