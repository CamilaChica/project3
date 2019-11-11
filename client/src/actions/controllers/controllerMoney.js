import React,{Component} from 'react';
import PlayerStats from "../../components/playerStats"

class MoneyCtrl extends Component {
   constructor(props){
      super(props);
        this.moneyHandler = this.moneyHandler.bind(this);
          this.state = {
            currentMoney: this.props.giveCurrentMoney
          }
         }

   moneyHandler() {
      this.setState((preState) => {
          return {
            currentMoney : preState.currentMoney + 1
            };
         });
    }
    render()
    {
      return <PlayerStats action={this.moneyHandler} moneyDisplay={this.state.currentMoney}></PlayerStats>
    }
   
   }

export default MoneyCtrl;