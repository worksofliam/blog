import React from "react";

export default class Project extends React.Component {
  render() {
    return (
      <div className="column project">
        <div className="container has-text-centered">
          <h4 className="title is-4">{this.props.title}</h4>
          <h6 className="subtitle is-6">{this.props.subtitle}</h6>
          {this.props.children}
        </div>
      </div>
    );
  }
}