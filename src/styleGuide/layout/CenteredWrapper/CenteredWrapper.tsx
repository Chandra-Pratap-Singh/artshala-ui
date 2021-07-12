import React, { Component } from "react";

type Props = {
  height?: string;
  width?: string;
};

export default class CenteredWrapper extends Component<Props> {
  style = {
    height: this.props.height || "100vh",
    width: this.props.width || "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  render() {
    return <div style={this.style}>{this.props.children}</div>;
  }
}
