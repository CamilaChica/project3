import React,{Component} from 'react';
import House2 from '../../components/properties/house2'

class House2Ctrl extends Component {
  constructor(props){
          super(props);
            this.house2Handler = this.house2Handler.bind(this);
             }

  house2Handler() {
              if (this.props.currentMoney >= this.props.house2Worth){
                  this.props.returnCurrentMoney(this.props.currentMoney - this.props.house2Worth);

                  this.props.updateInfo(
                      "house2Amount",
                      "house2Quantity",
                      this.props.house2Worth * 1.5,
                      this.props.house2Quantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 3
                  );
              }                     
             };
              
             render()
             {
             return <House2 action={this.house2Handler} moneyDisplay={this.props.house2Worth} house2Quantity={this.props.house2Quantity}></House2>
             }
     
       }

export default House2Ctrl;

