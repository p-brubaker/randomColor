import React, { Component } from 'react';

export class RandomColor extends Component {
    render() {
        const { color, babyMeme } = this.props;
        return (
            <div
                className="colorful-square"
                style={
                    this.props.color[4] !== '9'
                        ? {
                              width: '500px',
                              height: '500px',
                              backgroundColor: color,
                          }
                        : {
                              width: '500px',
                              height: '500px',
                              backgroundImage: `url(${babyMeme})`,
                          }
                }
            ></div>
        );
    }
}
