import React from "react";

export default class Page extends React.Component {
  render() {
    return (
      <section className="blackbg is-fullheight">
        {this.props.children}
      </section>
    );
  }
}