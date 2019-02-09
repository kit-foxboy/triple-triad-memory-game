import React, { Component } from "react";


class GameCard extends Component {

    state = {
        hasBeenClicked: false
    }

    render = () => {
        return (
            <div className="card" onClick={() => this.clickCard(this.props.onClick)}>
                <img src={this.props.cardName} alt={this.props.cardName.replace(".png", "") + " card"} />
            </div>
        );
    }

    clickCard = clickHandler => {
        this.setState({hasBeenClicked: !this.state.hasBeenClicked})
        clickHandler(this.state.hasBeenClicked);
    }
}

export default GameCard;