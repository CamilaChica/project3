import React,{Component} from 'react';


class House1 extends Component {
  
  constructor(props){
    super(props);
      this.addOne = this.addOne.bind(this);
        this.state = {
          count : 0 ,
          money: 10,
          currentMoney: ''
        }
     }

  
    handleMoneyInputChange = ({target}) => {
      const { value: currentMoney } = target;
      this.setState({ currentMoney })
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
      return  <a onClick={this.props.action}>
      <div class="item_house_cont">

      <img src="./images/house1.png" alt=""/>

      <div class="date_cont">
          <h3>House</h3>
          <img src="./images/dollar.png" alt=""/>
          <p>{this.props.moneyDisplay}</p>
      </div>
      <h2>{this.props.quantity}</h2>
      </div>
      </a>
    }
  }

  export default House1;