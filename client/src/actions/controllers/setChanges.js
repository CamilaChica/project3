cardClicked=(card)=>{

    if(this.state.clickedCards.includes(card.id))
    {
        this.resetGame();
    }
    else if((this.state.clickedCards.length+1)===this.state.cards.length)
    {
        this.resetGame(true);
    }

    else
    {
        this.setState({
            cards:randomizeArray(this.state.cards),
            clickedCards:[...this.state.clickedCards,card.id],
            score:this.state.score+1,
            highestScore:Math.max(this.state.score+1,this.state.highestScore)})
    }
}
