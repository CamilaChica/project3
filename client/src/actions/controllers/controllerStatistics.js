import React,{Component} from 'react';
//import '../../css/App.css';

import MoneyCtrl from '../controllers/controllerMoney'
import Options from "../../components/options"
import Items from "../../components/items"
import ItemPlus from "../../components/item_plus"
import BuyAndSell from "../../components/buyandsell"

//properties

import PlotCtrl from '../controllers/controllerPlot'
import House1Ctrl from '../controllers/controllerHouse1'
import House2 from "../../components/properties/house2"
import Condo from "../../components/properties/condo"
import Building from "../../components/properties/building"
import Mansion from "../../components/properties/mansion"

class Statistics extends Component {
 

    constructor(props){
        super(props);
        
            this.state = {
                currentMoney : 0 ,
                
                playerName: "",
                playerLevel: "",

                propertyTotal: 0,
                propertyPuchased: 0,
                propertySold: 0,

                clickAmount: 1,
                moneyPerSecond: 0,

                plotAmount: 20,
                plotQuantity: 0,

                house1Amount: 30,
                house1Quantity: 0,

                house2Amount: 45,
                house1Quantity: 0,

                condoAmount: 67.5,
                buidingAmount: 101.25,
                mansionAmount: 151.875,
                
                
            }
         
         }
    
          
        componentDidMount() {
            this.interval = setInterval(() => 
            this.setState({currentMoney:this.state.currentMoney+this.state.moneyPerSecond}
                ), 1000);
          }
        componentWillUnmount() {
            clearInterval(this.interval);
          }

        updateCoins= amount => {
            this.setState({currentMoney:amount})
          };

        updateInfo = (propertyWorth, propertyQuantity, worth, amount, ptotal, perSecond) =>{
            this.setState(
                {   
                    [propertyWorth]:worth,
                    [propertyQuantity]:amount,
                    propertyTotal: ptotal,
                    moneyPerSecond: perSecond
                })
          }

          render()
          {
              return <div class="row general">
              <MoneyCtrl returnCurrentMoney={this.updateCoins} giveCurrentMoney={this.state.currentMoney} currentPerSecond={this.state.moneyPerSecond}></MoneyCtrl>
                  
              <div class="col-md-6 p-0">
                  <Options></Options>
                  <Items></Items>
              </div>
              <div class="col-md-3 p-0">
                  <div class="row">
                      <ItemPlus></ItemPlus>
                  </div>
                  <BuyAndSell></BuyAndSell>
                  <div class="items_count">
                     <PlotCtrl returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} plotWorth={this.state.plotAmount} plotQuantity={this.state.plotQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></PlotCtrl>
                     
                     <House1Ctrl returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house1Worth={this.state.house1Amount} house1Quantity={this.state.house1Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></House1Ctrl>

                     <House2Ctrl returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house2Worth={this.state.house2Amount} house2Quantity={this.state.house2Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></House2Ctrl>

                     <Condo></Condo>
                     <Building></Building>
                     <Mansion></Mansion>            
                  </div>
              </div>
          </div>
          }
    }
 
 export default Statistics;