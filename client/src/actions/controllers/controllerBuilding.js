import React,{Component} from 'react';
import Building from '../../components/properties/building'

class BuildingCtrl extends Component {
  constructor(props){
          super(props);
            this.buildingHandler = this.buildingHandler.bind(this);
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
                      this.props.currentPerSecond + 12
                  );
              }                     
             };
              
             render()
             {
             return <Building action={this.buildingHandler} moneyDisplay={this.props.buildingWorth} buildingQuantity={this.props.buildingQuantity}></Building>
             }
     
       }

export default BuildingCtrl;

