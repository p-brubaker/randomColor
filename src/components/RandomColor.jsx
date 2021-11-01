import React, { Component } from 'react';

export class RandomColor extends Component {
    render() {
        return (
            <div
                className="colorful-square"
                style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: this.props.color,
                }}
            ></div>
        );
    }
}
