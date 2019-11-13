import React,{Component} from 'react';
import ReactTooltip from 'react-tooltip'
//import '../../css/App.css';

import MoneyCtrl from './controllerMoney'
import Options from "../../components/options"
import Items from "../../components/items"
import ItemPlus from "../../components/item_plus"
import BuyAndSell from "../../components/buyandsell"

//properties

import PlotCtrl from './properties/controllerPlot'
import House1Ctrl from './properties/controllerHouse1'
import House2Ctrl from './properties/controllerHouse2'
import CondoCtrl from './properties/controllerCondo'
import BuildingCtrl from './properties/controllerBuilding'
import MansionCtrl from './properties/controllerMansion'

class MainCtrl extends Component {
 

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

                plotAmount: 50,
                plotQuantity: 0,

                house1Amount: 250,
                house1Quantity: 0,

                house2Amount: 1000,
                house2Quantity: 0,

                condoAmount: 5000,
                condoQuantity: 0,

                buildingAmount: 25000,
                buildingQuantity: 0,

                mansionAmount: 125000,
                mansionQuantity: 0,
                
                
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

                     <CondoCtrl returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} condoWorth={this.state.condoAmount} condoQuantity={this.state.condoQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></CondoCtrl>

                     <BuildingCtrl returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} buildingWorth={this.state.buildingAmount} buildingQuantity={this.state.buildingQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></BuildingCtrl>

                     <MansionCtrl returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} mansionWorth={this.state.mansionAmount} mansionQuantity={this.state.mansionQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></MansionCtrl>           
                  </div>
              </div>
              <ReactTooltip multiline={true} place="left" type="dark" effect="float"/>
          </div>
          }
    }
 
 export default MainCtrl;