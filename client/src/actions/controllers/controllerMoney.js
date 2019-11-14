import React,{Component} from 'react';
import PlayerStats from "../../components/playerStats"


class MoneyCtrl extends Component {
  constructor(props){
     super(props);
       this.moneyHandler = this.moneyHandler.bind(this);
       this.state = {
         currentLevel: 0,
         medalImage:"./images/medal.png"
       }
       
        }
       

  moneyHandler() {
     this.props.returnCurrentMoney(this.props.giveCurrentMoney+1);
   }

   componentDidMount() {
    this.interval = setInterval(() => 
    
    this.setState((prevState, props) => {
      
      if(this.props.house1Quantity == 20){
          
          this.setState({
          currentLevel:1,
          medalImage:"./images/bronce_medal.png"
        })
      }else if(this.props.condoQuantity == 20){
        this.setState({
          currentLevel:2,
          medalImage:"./images/silver_medal.png"
        })
      }else if(this.props.mansionQuantity == 20){
        this.setState({
          currentLevel:3,
          medalImage:"./images/e0524.png"
        })
      }else{
        this.setState({
          currentLevel:0,
          medalImage:"./images/medal.png"
        })
      }
      
      
      }), 1000);
    }



   render()
   {
     return <PlayerStats currentLevel={this.state.currentLevel} currentMedal={this.state.medalImage} action={this.moneyHandler} moneyDisplay={this.props.giveCurrentMoney} currentPerSecond={this.props.currentPerSecond} ></PlayerStats>
   }
  
  }

export default MoneyCtrl;