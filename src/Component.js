import React from "react";

export class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.greeting}</h1>;
    }
}

export class Lorem extends React.Component {
    render () {
        return (
            <p>{this.props.lorem}</p>
        );
    }
}