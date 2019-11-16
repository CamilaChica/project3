import React,{Component} from 'react';
import ReactTooltip from 'react-tooltip'
//import '../../css/App.css';

import MoneyCtrl from './controllerMoney'
import OptionsCtrl from "./game/optionsController"
import ItemsCtrl from "./game/itemsController"
import ItemPlusCtrl from "./game/controllerItem_Plus"
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
                currentBonus: 0,
                
                playerName: "",
                playerLevel: "",

                propertyTotal: 0,
                propertyPuchased: 0,
                propertySold: 0,

                clickAmount: 1,
                moneyPerSecond: 0,
                moneyPerSecondWithBonus: 0,

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
                {currentMoney:this.state.currentMoney+(this.state.moneyPerSecond *(1+this.state.currentBonus)),
                    moneyPerSecondWithBonus:(this.state.moneyPerSecond *(1+this.state.currentBonus))}
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

        currentBonus= bonus => {
            this.setState({currentBonus:bonus})
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
              <MoneyCtrl house1Quantity={this.state.house1Quantity} condoQuantity={this.state.condoQuantity} mansionQuantity={this.state.mansionQuantity} returnCurrentMoney={this.updateCoins} giveCurrentMoney={this.state.currentMoney} currentPerSecond={this.state.moneyPerSecondWithBonus}></MoneyCtrl>
                  
              <div class="col-md-6 p-0">
                  <OptionsCtrl currentMoney={this.state.currentMoney} playerName={this.state.playerName} playerLevel={this.state.playerLevel} propertyTotal={this.state.propertyTotal} currentPerSecond={this.state.currentPerSecond}></OptionsCtrl>
                  <ItemsCtrl buyOrSell={this.state.buyOrSell} plotQuantity={this.state.plotQuantity} house1Quantity={this.state.house1Quantity} house2Quantity={this.state.house2Quantity} condoQuantity={this.state.condoQuantity} buildingQuantity={this.state.buildingQuantity} mansionQuantity={this.state.mansionQuantity}></ItemsCtrl>
              </div>
              <div class="col-md-3 p-0">
                  <div class="row">
                      <ItemPlusCtrl currentBonus={this.currentBonus}></ItemPlusCtrl>
                  </div>
                  <BuyAndSellCtrl buyOrSell={this.buyOrSell}></BuyAndSellCtrl>
                  <div class="items_count">
                     <PlotCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} plotWorth={this.state.plotAmount} plotQuantity={this.state.plotQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></PlotCtrl>
                     
                     <House1Ctrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house1Worth={this.state.house1Amount} house1Quantity={this.state.house1Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></House1Ctrl>

                     <House2Ctrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} house2Worth={this.state.house2Amount} house2Quantity={this.state.house2Quantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></House2Ctrl>

                     <CondoCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} condoWorth={this.state.condoAmount} condoQuantity={this.state.condoQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></CondoCtrl>

                     <BuildingCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} buildingWorth={this.state.buildingAmount} buildingQuantity={this.state.buildingQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></BuildingCtrl>

                     <MansionCtrl buyOrSell={this.state.buyOrSell} returnCurrentMoney={this.updateCoins} updateInfo={this.updateInfo} currentMoney={this.state.currentMoney} mansionWorth={this.state.mansionAmount} mansionQuantity={this.state.mansionQuantity} purchaseTotal={this.state.propertyTotal} currentPerSecond={this.state.moneyPerSecondWithBonus}></MansionCtrl>           
                  </div>
              </div>
              <ReactTooltip multiline={true} place="left" type="dark" effect="float"/>
          </div>
          }
    }
 
 export default MainCtrl;