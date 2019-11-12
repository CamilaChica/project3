import React,{Component} from 'react';
import Mansion from '../../../components/properties/mansion'

class MansionCtrl extends Component {
  constructor(props){
          super(props);
            this.mansionHandler = this.mansionHandler.bind(this);
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
                      this.props.currentPerSecond + 15
                  );
              }                     
             };
              
             render()
             {
             return <Mansion action={this.mansionHandler} moneyDisplay={this.props.mansionWorth} mansionQuantity={this.props.mansionQuantity}></Mansion>
             }
     
       }

export default MansionCtrl;

