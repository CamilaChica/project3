import React,{Component} from 'react';
import Options from "../../../components/options"


class OptionsCtrl extends Component {

render()
{
  return <Options currentMoney={this.props.currentMoney} playerName={this.props.playerName} playerLevel={this.props.playerLevel} propertyTotal={this.props.propertyTotal} currentPerSecond={this.props.currentPerSecond}></Options>
}

}

export default OptionsCtrl;