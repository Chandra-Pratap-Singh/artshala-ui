import { TextField } from "@material-ui/core";
import { MarginProperty } from "@material-ui/styles/node_modules/csstype";
import React, { Component } from "react";

type Props = {
  label: string;
  defaultValue: string;
  helperText: string;
  margin: MarginProperty<2>;
  variant: "outlined";
};

export default class TextInput extends Component<Props> {
  render() {
    return <></>;
  }
}
