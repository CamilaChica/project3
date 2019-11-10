import React from 'react';


const moneyHandler = function(money) {
    this.setState((preState) => {
        return {
          currentMoney : preState.money + 1
          };
       });
    
    }



export default moneyHandler;