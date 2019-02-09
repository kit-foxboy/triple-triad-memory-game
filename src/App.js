import React, { Component } from "react";
import shortid from "shortid";
import { StatusBar, GameCard } from "./components";
import './App.css';

class App extends Component {

    state = {
        message: "Click to Start",
        currentScore: 0,
        topScore: 0,
        cards: []
    }

    componentDidMount() {
        
        this.setState({
            message: this.state.message,
            currentScore: this.state.currentScore,
            topScore: this.state.topScore,
            cards: this.renderCards()
        });
    }

    render = () => {

        return (
            <div>
                <StatusBar message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore} />
                {this.state.cards.map(element => element)}
            </div>
        );
    }

    cardClickHandler = clicked => {

        const currentScore = (clicked) ? 0 : this.state.currentScore + 1;
        const topScore = (currentScore > this.state.topScore) ? currentScore : this.state.topScore;

        this.setState({
            message: (clicked) ? "Incorrect! You lose..." : "Correct!",
            currentScore: currentScore,
            topScore: topScore,
            cards: (clicked) ? this.renderCards() : this.shuffleArray(this.state.cards)
        });
    }

    renderCards = () => {

        const cardData = [];
        for(let idx = 0; idx < this.props.images.length; idx++) {
            cardData.push(<GameCard key={shortid.generate()} cardName={this.props.images[idx]} onClick={this.cardClickHandler} />);
        }

        return cardData;
    }

    shuffleArray = arr => {
        for(let idx = arr.length - 1; idx > 0; idx--) {

            const randomIdx = Math.floor(Math.random() * idx);
            const temp = arr[idx];
            arr[idx] = arr[randomIdx];
            arr[randomIdx] = temp;
        }
        return arr;
    }
}

export default App;
