import React, { Component } from 'react';
import { RandomColor } from '../RandomColor';

export default class App extends Component {
    state = { color: 'white' };

    componentDidMount() {
        setInterval(
            () => this.setState({ color: this.getRandomColor() }),
            1000
        );
    }

    getRandomColor() {
        const rand255 = () => Math.floor(Math.random() * 256);
        return `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
    }

    render() {
        return <RandomColor color={this.state.color} />;
    }
}
