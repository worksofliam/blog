import React from "react";
import {
  Link
} from "react-router-dom";

export default class NavItem extends React.Component {
  render() {
    console.log(this.props.to);
    return (<Link onClick={this.props.onClick} className="navbar-item" to={this.props.to}>{this.props.children}</Link>);
  }
}