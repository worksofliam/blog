import React from "react";

export default class Special extends React.Component {
  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-1">
          <i className={'subtitle is-1 fas ' + this.props.icon}></i>
        </div>
        <div className="column">
          <p className="title is-5 is-spaced">{this.props.title}</p>
          <p className="subtitle is-6">{this.props.text}</p>
        </div>
      </div>
    );
  }
}