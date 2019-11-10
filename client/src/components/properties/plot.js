import React,{Component} from 'react';
import Player from '../playerStats';


class Plot extends Component {
  
  constructor(props){
    super(props);
      //this.addOne = this.addOne.bind(this);
      this.plotHandler = this.plotHandler.bind(this);
      //this.sendData = this.sendData.bind(this);
        this.state = {
          currentMoney : this.props.currentMoney ,
          plotAmount: this.props.plotAmount,
          plotQuantity: this.props.plotQuantity,
          propertyTotal: this.props.propertyTotal
        }
     }

    plotHandler() {
      this.setState((preState) => {
        let money =this.props.currentMoney;
        let  landMoney = this.props.plotAmount
        console.log(this.props.currentMoney);
          
          if (money >= landMoney){
              return {
                  currentMoney: this.props.currentMoney - this.props.plotAmount,
                  plotAmount : this.props.plotAmount * 1.5,
                  plotQuantity: this.props.plotQuantity + 1,
                  propertyTotal: this.props.propertyTotal +1
                  
                };
                
          }else {
            return {
              currentMoney: this.props.currentMoney
            }
          }
          
          
         });
    }

  sendData = () => {
    console.log(this.state.plotAmount + " " + this.state.plotQuantity + " " +this.state.currentMoney + " " + this.state.propertyTotal);

      this.props.action(this.state.plotAmount, this.state.plotQuantity, 
        this.state.currentMoney, this.state.propertyTotal);
 }

 
    

     addOne() {                             
      this.setState((preState) => {
        return {
          count : preState.count + 1,
          money : preState.money * 1.5
          };
       });
     }

    render() {
     
      return  <a onClick={this.plotHandler} >
      
      <div onClick={this.sendData} class="item_house_cont">
      
      <img src="./images/plot.png" alt=""/>
      
      <div class="date_cont">
          <h3>Plot</h3>
          <img src="./images/dollar.png" alt=""/><p>{this.props.plotAmount}</p>
      </div>
      <h2>{this.props.plotQuantity}</h2>
      
  </div>
  
  </a>
    }
  }

  export default Plot;