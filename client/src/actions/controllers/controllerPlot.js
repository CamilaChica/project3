import React,{Component} from 'react';
import Plot from '../../components/properties/plot'

class PlotCtrl extends Component {
        constructor(props){
                super(props);
                  this.plotHandler = this.plotHandler.bind(this);
                    this.state = {
                        currentMoney: 0,
                        plotAmount : 0,
                        plotQuantity: 0,
                        propertyTotal: 0
          
                    }
                   }

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
              
        render()
              {
                return <Plot action={this.plotHandler} moneyDisplay={this.state.plotAmount} quantity={this.state.plotQuantity}></Plot>
              }
      
        }

export default PlotCtrl;

