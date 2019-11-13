import React,{Component} from 'react';
import Building from '../../../components/properties/building'

class BuildingCtrl extends Component {
  constructor(props){
    super(props);
      this.buildingHandler = this.buildingHandler.bind(this);
      this.state = {
        buildingPerSecond: 0,
        percentageTotal: 0
      }
       }



  buildingHandler() {
    if (this.props.currentMoney >= this.props.buildingWorth){
      this.props.returnCurrentMoney(this.props.currentMoney - this.props.buildingWorth);

                  this.props.updateInfo(
                      "buildingAmount",
                      "buildingQuantity",
                      this.props.buildingWorth * 1.5,
                      this.props.buildingQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 15
                  );

                  this.setState(preState =>{
                    return {buildingPerSecond: preState.buildingPerSecond + 12}
                  })

                  

                  this.setState(preState =>{
                    return {percentageTotal: (((preState.buildingPerSecond/this.props.currentPerSecond)*100)+"%")}
                  })
              }}

              componentDidMount() {
                this.interval = setInterval(() => 
                this.setState(
                  this.setState(preState =>{
                    return {percentageTotal: (((preState.buildingPerSecond/this.props.currentPerSecond)*100)+"%") }
                    })
                    ), 1000);
  }
              
      
                                  
             
              
             render()
             {
              return <Building buildingProductionPercent={this.state.percentageTotal} buildingCoinPerSecond={this.state.buildingPerSecond} action={this.buildingHandler} moneyDisplay={this.props.buildingWorth} buildingQuantity={this.props.buildingQuantity}></Building>
             }
     
       }
      

export default BuildingCtrl;


