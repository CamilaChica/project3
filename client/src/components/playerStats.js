import React,{Component, useEffect} from 'react';




class Player extends Component {

    constructor(props){
        super(props);
          this.toggleHover = this.toggleHover.bind(this);
            this.state = {
              //currentMoney : 0 ,
              hovered: false
            }
         }

    
      toggleHover() {
        this.setState({hovered: !this.state.hovered})
      }

    render() {
      return <div  class="col-md-3 p-0 back_coin">
        <div class="namePlayer">
            <p>Name Player</p>
            <h3>You have earned</h3>
            <br></br>
            <h3><a>{this.props.moneyDisplay}</a> coins</h3>
            <h5>You're earning {this.props.currentPerSecond} per second</h5>
        </div>
        
            <div class="coin">
                <a onClick={this.props.action}>
                    <img onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}   style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`}} src="./images/dollar.png" alt=""/>
            </a>
        
        </div>
        <div class="level">
            <h3>Level {this.props.currentLevel}</h3>
            <img src={this.props.currentMedal} alt=""/>
        </div>
    </div>
    
    }
  }

  export default Player;