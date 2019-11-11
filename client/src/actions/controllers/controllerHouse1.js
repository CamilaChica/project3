import React,{Component} from 'react';
import House1 from '../../components/properties/house1'

class House1Ctrl extends Component {
        constructor(props){
                super(props);
                  this.house1Handler = this.house1Handler.bind(this);
                    this.state = {
                        currentMoney: 0,
                        house1Amount : 0,
                        house1Quantity: 0,
                        propertyTotal: 0
          
                    }
                   }

        house1Handler() {
                this.setState((preState) => {
    
                    if (preState.currentMoney >= preState.house1Amount){
                        return {
                            currentMoney: preState.currentMoney - preState.house1Amount,
                            house1Amount : preState.house1Amount * 1.5,
                            house1Quantity: preState.house1Quantity + 1,
                            propertyTotal: preState.propertyTotal +1
                            };
                    }              
                   });
              }
              
        render()
              {
                return <House1 action={this.house1Handler} moneyDisplay={this.state.house1Amount} quantity={this.state.house1Quantity}></House1>
              }
      
        }

export default House1Ctrl;

