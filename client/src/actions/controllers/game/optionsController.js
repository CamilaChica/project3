import React,{Component} from 'react';
import Options from "../../../components/options"


class OptionsCtrl extends Component {

  constructor(props){
    super(props);
      this.state = {
        messageTitle: ["Buyer Demand Growing in Every Region", "Homeownership Rate Remains on the Rise",
        "Millennials: Here's Why the Process is Well Worth It","Planning on Buying a Home? Be Sure You Know Your Options.",
        "The #1 Reason to List Your House in the Winter","Taking the Fear Out of the Mortgage Process",
        "How to Determine If You Can Afford to Buy Home","Thinking of Selling Your Home? The Waiting Is The Hardest Part.", 
        "4 Reasons to Buy a Home This Fall"],
        
        messageBody:["Buyers are out in full force this fall, increasing the demand for homebuying in all four regions of the Country.",
      "In the third quarter of 2019, the U.S. homeownership rate rose again, signaling another strong indicator of the current housing market.",
      "Millennials have waited longer than any other generation to become homeowners, but the wait for this cohort is just about over.",
      "When you're ready to buy, you'll need to determine if you prefer the charm of an existing home or the look and feel of a newer build. With limited existing home inventory available today, especially in the starter and middle-level markets, many buyers are considering a new home that's recently been constructed, or they're building the home of their dreams.",
      "Many sellers believe spring is the best time to put their homes on the market because buyer demand traditionally increases at that time of year. What they don't realize is if every homeowner believes the same thing, then that's when they'll have the most competition.",
      "A considerable number of potential buyers shy away from the real estate market because they're uncertain about the buying process - particularly when it comes to qualifying for a mortgage.",
      "The gap between the increase in personal income and residential real estate prices has been used to defend the concept that we are experiencing an affordability crisis in housing today.",
      "Tom Petty famously penned the words, 'the waiting is the hardest part' in his early 80's hit song The Waiting, and his thought process can surprisingly also be applied to individuals considering selling their homes today. Traditional thinking would suggest it may be best to wait until the spring to sell when there is a flood of buyers in the market, but right now may in fact be an even better time to list your home.",
      "Here are four great reasons to consider buying a home today, instead of waiting. The Mansion Owned by: Billy Joel He may no longer be singing about supermodels, but music icon Billy Joel has done quite OK for himself. His Miami Beach estate is valued at $35 million and is located on exclusive La Gorce Island. The estate features its own pier and boat slip (of course!), swimming pool and a full outdoor kitchen. And because it's Florida, a patio is de rigueur. The fourth-largest contractor in the country set a new revenue record overall despite a net loss as it continued to move away from some at-risk, self-perform construction work, exit countries and divest some business segments"],

      messageTitleShow: "Welcome to real estate clicker!",
      messageBodyShow: "Lets see how successful you become."

      }
    }

    componentDidMount() {
      this.interval = setInterval(() =>
      this.setState((prevState, props) => {
          let messageToShow = Math.floor(Math.random() * 10);
            this.setState({messageTitleShow:prevState.messageTitle[messageToShow], messageBodyShow:prevState.messageBody[messageToShow]});
            })
          , 30000);
    }

render()
{
  return <Options showTitle={this.state.messageTitleShow} showBody={this.state.messageBodyShow} currentMoney={this.props.currentMoney} playerName={this.props.playerName} playerLevel={this.props.playerLevel} propertyTotal={this.props.propertyTotal} currentPerSecond={this.props.currentPerSecond}></Options>
}

}

export default OptionsCtrl;