import React, { Component } from "react";
import { default as B } from "@material-ui/core/Box";

type Props = {
  borderWidth?: string;
  borderColor?: string;
};

export default class Box extends Component<Props> {
  style = {
    border: `${this.props.borderWidth || "1px"} solid ${
      this.props.borderColor || "black"
    }`,
  };
  render() {
    return (
      <B style={this.style} {...this.props}>
        {this.props.children}
      </B>
    );
  }
}
