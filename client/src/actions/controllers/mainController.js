import React,{Component} from 'react';
import ReactTooltip from 'react-tooltip'
//import '../../css/App.css';

import MoneyCtrl from './controllerMoney'
import Options from "../../components/options"
import ItemsCtrl from "./game/itemsController"
import ItemPlus from "../../components/item_plus"
import BuyAndSellCtrl from "./game/controllerBuySell"

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
                buyOrSell: "buy",
                
                playerName: "",
                playerLevel: "",

                propertyTotal: 0,
                propertyPuchased: 0,
                propertySold: 0,

                clickAmount: 1,
                moneyPerSecond: 0,

                plotAmount: 1,
                plotQuantity: 0,

                house1Amount: 1,
                house1Quantity: 0,

                house2Amount: 1,
                house2Quantity: 0,

                condoAmount: 1,
                condoQuantity: 0,

                buildingAmount: 1,
                buildingQuantity: 0,

                mansionAmount: 1,
                mansionQuantity: 0,
                
                
            }
         
         }
    
          
        componentDidMount() {
            this.interval = setInterval(() => 
           
            this.setState(
                {currentMoney:this.state.currentMoney+this.state.moneyPerSecond}
                ), 1000);
          }
        componentWillUnmount() {
            clearInterval(this.interval);
          }

        updateCoins= amount => {
            this.setState({currentMoney:amount})
          };

        buyOrSell= purchase => {
            this.setState({buyOrSell:purchase})
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
              <MoneyCtrl house1Quantity={this.state.house1Quantity} condoQuantity={this.state.condoQuantity} mansionQuantity={this.state.mansionQuantity} returnCurrentMoney={this.updateCoins} giveCurrentMoney={this.state.currentMoney} currentPerSecond={this.state.moneyPerSecond}></MoneyCtrl>
                  
              <div class="col-md-6 p-0">
                  <Options></Options>
                  <ItemsCtrl plotQuantity={this.state.plotQuantity} house1Quantity={this.state.house1Quantity} house2Quantity={this.state.house2Quantity} condoQuantity={this.state.condoQuantity} buildingQuantity={this.state.buildingQuantity} mansionQuantity={this.state.mansionQuantity}></ItemsCtrl>
              </div>
              <div class="col-md-3 p-0">
                  <div class="row">
                      <ItemPlus></ItemPlus>
                  </div>
                  <BuyAndSellCtrl buyOrSell={this.buyOrSell}></BuyAndSellCtrl>
                  <div class="items_count">
                     <PlotCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} plotWorth={this.state.plotAmount} plotQuantity={this.state.plotQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></PlotCtrl>
                     
                     <House1Ctrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house1Worth={this.state.house1Amount} house1Quantity={this.state.house1Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></House1Ctrl>

                     <House2Ctrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house2Worth={this.state.house2Amount} house2Quantity={this.state.house2Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></House2Ctrl>

                     <CondoCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} condoWorth={this.state.condoAmount} condoQuantity={this.state.condoQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></CondoCtrl>

                     <BuildingCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} buildingWorth={this.state.buildingAmount} buildingQuantity={this.state.buildingQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></BuildingCtrl>

                     <MansionCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} mansionWorth={this.state.mansionAmount} mansionQuantity={this.state.mansionQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecond}></MansionCtrl>           
                  </div>
              </div>
              <ReactTooltip multiline={true} place="left" type="dark" effect="float"/>
          </div>
          }
    }
 
 export default MainCtrl;