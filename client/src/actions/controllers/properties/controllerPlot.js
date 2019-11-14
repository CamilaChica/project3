import React,{Component} from 'react';
import Plot from '../../../components/properties/plot'

class PlotCtrl extends Component {
  constructor(props){
    super(props);
      this.plotHandler = this.plotHandler.bind(this);
      this.state = {
        plotPerSecond: 0,
        percentageTotal: 0
      }
       }

plotHandler() {
  if(this.props.buyOrSell== "buy"){
        if (this.props.currentMoney >= this.props.plotWorth){
            this.props.returnCurrentMoney(this.props.currentMoney - this.props.plotWorth);

                  this.props.updateInfo(
                      "plotAmount",
                      "plotQuantity",
                      this.props.plotWorth * 1.5,
                      this.props.plotQuantity + 1,
                      this.props.purchaseTotal + 1,
                      this.props.currentPerSecond + 3
                  );

                  this.setState(preState =>{
                    return {plotPerSecond: preState.plotPerSecond + 3}
                  })

                  
                  
                    this.setState(preState =>{
                      return {percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%")}
                    })
     
                  }} else{
                    if (this.props.plotQuantity != 0){
                      this.props.returnCurrentMoney(this.props.currentMoney + (this.props.plotWorth*.8));
      
                   
                      this.props.updateInfo(
                          "plotAmount",
                          "plotQuantity",
                          this.props.plotWorth * .8,
                          this.props.plotQuantity - 1,
                          this.props.purchaseTotal - 1,
                          this.props.currentPerSecond - 3
                      );
      
                      this.setState(preState =>{
                        return {condoPerSecond: preState.plotPerSecond - 12}
                      })
      
                      
                      
                        this.setState(preState =>{
                          return {percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%")}
                        })
                    }}
                  }

              componentDidMount() {
                this.interval = setInterval(() => 
                
                this.setState(
                  
                  this.setState(preState =>{
                    console.log(this.state.plotQuantity)
                    return {percentageTotal: (((preState.plotPerSecond/this.props.currentPerSecond)*100)+"%") }
                    })
                    ), 1000);
  }
   
             render()
             {
              return <Plot currentMoney={this.props.currentMoney} plotProductionPercent={this.state.percentageTotal} plotCoinPerSecond={this.state.plotPerSecond} action={this.plotHandler} moneyDisplay={this.props.plotWorth} plotQuantity={this.props.plotQuantity}></Plot>
             }
     
       }

export default PlotCtrl;
