import React,{Component} from 'react';
import House1 from '../../../components/properties/house1'

class House1Ctrl extends Component {
  constructor(props){
          super(props);
            this.house1Handler = this.house1Handler.bind(this);
             }

  house1Handler() {
              if (this.props.currentMoney >= this.props.house1Worth){
                  this.props.returnCurrentMoney(this.props.currentMoney - this.props.house1Worth);

                  this.props.updateInfo(
                      "house1Amount",
                      "house1Quantity",
                      this.props.house1Worth * 1.5,
                      this.props.house1Quantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 6
                  );
              }                     
             };
              
             render()
             {
             return <House1 action={this.house1Handler} moneyDisplay={this.props.house1Worth} house1Quantity={this.props.house1Quantity}></House1>
             }
     
       }

export default House1Ctrl;

