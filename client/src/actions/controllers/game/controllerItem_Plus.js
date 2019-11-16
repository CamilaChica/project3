import React,{Component} from 'react';
import ItemPlus from "../../../components/item_plus"


class ItemPlusCtrl extends Component {
  constructor(props){
    super(props);
    this.item1Press = this.item1Press.bind(this);
    this.item2Press = this.item2Press.bind(this);
    this.item3Press = this.item3Press.bind(this);
    this.item4Press = this.item4Press.bind(this);
    this.item5Press = this.item5Press.bind(this);
    this.item6Press = this.item6Press.bind(this);
    this.item7Press = this.item7Press.bind(this);
    this.item8Press = this.item8Press.bind(this);
    this.item9Press = this.item9Press.bind(this);
    this.item10Press = this.item10Press.bind(this);
    this.item11Press = this.item11Press.bind(this);
    this.item12Press = this.item12Press.bind(this);
    this.item13Press = this.item13Press.bind(this);
    this.item14Press = this.item14Press.bind(this);
    this.item15Press = this.item15Press.bind(this);
    this.item16Press = this.item16Press.bind(this);
    this.item17Press = this.item17Press.bind(this);
    this.item18Press = this.item18Press.bind(this);
    
        this.state = {
          bonusTotal: 0,

          bonus1:.003,
          bonus2:.003,
          bonus3:.003,
          bonus4:.003,
          bonus5:.006,
          bonus6:.006,
          bonus7:.006,
          bonus8:.007,
          bonus9:.008,
          bonus10:.009,
          bonus11:.009,
          bonus12:.01,
          bonus13:.01,
          bonus14:.01,
          bonus15:.013,
          bonus16:.013,
          bonus17:.016,
          bonus18:.02,

          bonus1CurrentColor:"grayscale",
          bonus2CurrentColor:"grayscale",
          bonus3CurrentColor:"grayscale",
          bonus4CurrentColor:"grayscale",
          bonus5CurrentColor:"grayscale",
          bonus6CurrentColor:"grayscale",
          bonus7CurrentColor:"grayscale",
          bonus8CurrentColor:"grayscale",
          bonus9CurrentColor:"grayscale",
          bonus10CurrentColor:"grayscale",
          bonus11CurrentColor:"grayscale",
          bonus12CurrentColor:"grayscale",
          bonus13CurrentColor:"grayscale",
          bonus14CurrentColor:"grayscale",
          bonus15CurrentColor:"grayscale",
          bonus16CurrentColor:"grayscale",
          bonus17CurrentColor:"grayscale",
          bonus18CurrentColor:"grayscale",

          bonus1Cost:100,
          bonus2Cost:100,
          bonus3Cost:100,
          bonus4Cost:100,
          bonus5Cost:1000,
          bonus6Cost:1000,
          bonus7Cost:3000,
          bonus8Cost:7000,
          bonus9Cost:8000,
          bonus10Cost:10000,
          bonus11Cost:10000,
          bonus12Cost:20000,
          bonus13Cost:20000,
          bonus14Cost:20000,
          bonus15Cost:30000,
          bonus16Cost:30000,
          bonus17Cost:35000,
          bonus18Cost:50000,


        }
      }

      item1Press(){
        
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal + this.state.bonus1);

          return {bonus1CurrentColor: "color",
                  bonusTotal: preState.bonusTotal + preState.bonus1}
        })
      }

      item2Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal + this.state.bonus2);

          return {bonus2CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus2}
        })
      }
      item3Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus3);

          return {bonus3CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus3}
        })
      }
      item4Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus4);

          return {bonus4CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus4}
        })
      }
      item5Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus5);

          return {bonus5CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus5}
        })
      }
      item6Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus6);

          return {bonus6CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus6}
        })
      }
      item7Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus7);

          return {bonus7CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus7}
        })
      }
      item8Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus8);
          return {bonus8CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus8}
        })
      }
      item9Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus9);
          return {bonus9CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus9}
        })
      }
      item10Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus10);
          return {bonus10CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus10}
        })
      }
      item11Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus11);
          return {bonus11CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus11}
        })
      }
      item12Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus12);
          return {bonus12CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus12}
        })
      }
      item13Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus13);
          return {bonus13CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus13}
        })
      }
      item14Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus14);
          return {bonus14CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus14}
        })
      }
      item15Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus15);
          return {bonus15CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus15}
        })
      }
      item16Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus16);
          return {bonus16CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus16}
        })
      }
      item17Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus17);
          return {bonus17CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus17}
        })
      }
      item18Press(){
        this.setState(preState =>{
          this.props.currentBonus(preState.bonusTotal +this.state.bonus18);
          return {bonus18CurrentColor: "color",
          bonusTotal: preState.bonusTotal + preState.bonus18}
        })
      }
  
    

 


   render()
   {
     return <ItemPlus item1Press={this.item1Press} item1Color={this.state.bonus1CurrentColor} item2Press={this.item2Press} item2Color={this.state.bonus2CurrentColor} item3Press={this.item3Press} item3Color={this.state.bonus3CurrentColor} item4Press={this.item4Press} item4Color={this.state.bonus4CurrentColor} item5Press={this.item5Press} item5Color={this.state.bonus5CurrentColor} item6Press={this.item6Press} item6Color={this.state.bonus6CurrentColor} item7Press={this.item7Press} item7Color={this.state.bonus7CurrentColor} item8Press={this.item8Press} item8Color={this.state.bonus8CurrentColor} item9Press={this.item9Press} item9Color={this.state.bonus9CurrentColor} item10Press={this.item10Press} item10Color={this.state.bonus10CurrentColor} item11Press={this.item11Press} item11Color={this.state.bonus11CurrentColor} item12Press={this.item12Press} item12Color={this.state.bonus12CurrentColor} item13Press={this.item13Press} item13Color={this.state.bonus13CurrentColor} item14Press={this.item14Press} item14Color={this.state.bonus14CurrentColor} item15Press={this.item15Press} item15Color={this.state.bonus15CurrentColor} item16Press={this.item16Press} item16Color={this.state.bonus16CurrentColor} item17Press={this.item17Press} item17Color={this.state.bonus17CurrentColor} item18Press={this.item18Press} item18Color={this.state.bonus18CurrentColor}></ItemPlus>
   }
  
  }

export default ItemPlusCtrl;