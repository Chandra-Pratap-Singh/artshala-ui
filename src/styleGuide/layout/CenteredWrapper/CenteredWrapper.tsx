import React, { Component } from "react";

type Props = {
  height?: string;
  width?: string;
};

export default class CenteredWrapper extends Component<Props> {
  style = {
    minHeight: this.props.height || "100vh",
    width: this.props.width || "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: '32px',
    paddingBottom: '32px'
  };
  render() {
    return <div style={this.style}>{this.props.children}</div>;
  }
}
