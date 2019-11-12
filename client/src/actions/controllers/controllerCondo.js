import React,{Component} from 'react';
import Condo from '../../components/properties/condo'

class CondoCtrl extends Component {
  constructor(props){
          super(props);
            this.condoHandler = this.condoHandler.bind(this);
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
                      this.props.currentPerSecond + 3
                  );
              }                     
             };
              
             render()
             {
             return <Condo action={this.condoHandler} moneyDisplay={this.props.condoWorth} condoQuantity={this.props.condoQuantity}></Condo>
             }
     
       }

export default CondoCtrl;

