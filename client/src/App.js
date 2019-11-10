import React,{Component} from 'react';

//functions
import propertyData from "./actions/data.json"

import PlayerStats from "./components/playerStats"
import Options from "./components/options"
import Items from "./components/items"
import ItemPlus from "./components/item_plus"
import BuyAndSell from "./components/buyandsell"

//properties

import Plot from "./components/properties/plot"
import House1 from "./components/properties/house1"
import House2 from "./components/properties/house2"
import Condo from "./components/properties/condo"
import Building from "./components/properties/building"
import Mansion from "./components/properties/mansion"


import './App.css';
class App extends Component{
    

    constructor(props){
        super(props);
          this.moneyHandler = this.moneyHandler.bind(this);
          this.plotHandler = this.plotHandler.bind(this);
          
            this.state = {
                currentMoney : 0 ,
                
                playerName: "",
                playerLevel: "",

                propertyTotal: 0,
                propertyPuchased: 0,
                propertySold: 0,

                clickAmount: 1,
                moneyPerSecond: 0,

                plotAmount: 0,
                plotQuantity: 0,

                house1Amount: 0,
                house2Amount: 0,
                condoAmount: 0,
                buidingAmount: 0,
                mansionAmount: 0,  
                
                dataJSONLoaded: false
            }
         }
    /*      moneyPerSecond
            timer each 1000 cambia coin
            plotQuantity= moneyPerSecond * 1.5
            Per Second x coins 
            */



         plotHandler() {
            this.setState((preState) => {

                if (preState.currentMoney >= preState.plotAmount){
                    return {
                        currentMoney: preState.currentMoney - preState.plotAmount,
                        plotAmount : preState.plotAmount * 1.5,
                        plotQuantity: preState.plotQuantity + 1,
                        propertyTotal: preState.propertyTotal +1
                        };
                }
                
                
               });
          }

          getJSONProperties() {
            if(this.state.dataJSONLoaded === false){
                let plotGetAmount;
                let house1GetAmount;
                let house2GetAmount;
                let condoGetAmount;
                let buildingGetAmount;
                let mansionGetAmount;
                propertyData.Properties.map((houseDetails)=>{  
                        if (houseDetails.Name === "Plot"){
                            plotGetAmount =houseDetails.Amount;
                        }
                        if (houseDetails.Name === "House1"){
                            house1GetAmount =houseDetails.Amount;
                        }
                        if (houseDetails.Name === "House2"){
                            house2GetAmount =houseDetails.Amount;
                        }
                        if (houseDetails.Name === "Condo"){
                            condoGetAmount =houseDetails.Amount;
                        }
                        if (houseDetails.Name === "Building"){
                            buildingGetAmount =houseDetails.Amount;
                        }
                        if (houseDetails.Name === "Mansion"){
                            mansionGetAmount =houseDetails.Amount;
                        }
                });
                this.setState(() => {
                return{
                    plotAmount: plotGetAmount,
                    house1Amount: house1GetAmount,
                    house2Amount: house2GetAmount,
                    condoAmount: condoGetAmount,
                    buildingAmount: buildingGetAmount,
                    mansionAmount: mansionGetAmount,
                    dataJSONLoaded: true
                }
            });
            
            }else{

            }
        }
        

         moneyHandler() {
            this.setState((preState) => {
                return {
                  currentMoney : preState.currentMoney + 1
                  };
               });
          }

          buyProperty() {
            this.setState((preState) => {
                return {
                  currentMoney : preState.currentMoney + 1
                  };
               });
          }
    
  
               
    render()
{   
    this.getJSONProperties();
    
    return <div class="row general">
        <PlayerStats action={this.moneyHandler} moneyDisplay={this.state.currentMoney}></PlayerStats>
        
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
           <Plot action={this.plotHandler} moneyDisplay={this.state.plotAmount} quantity={this.state.plotQuantity}></Plot>
           <House1></House1>
           <House2></House2>
           <Condo></Condo>
           <Building></Building>
           <Mansion></Mansion>            
        </div>
    </div>
</div>
}
}



export default App;
