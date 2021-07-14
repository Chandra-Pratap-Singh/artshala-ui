import { Paper, Box } from "@material-ui/core";
import React, { Component } from "react";
import CenteredWrapper from "../CenteredWrapper";
import ResponsiveWidth from "../ResponsiveWidth";

type Props = {
  responsiveWidth?: boolean;
  size?: "sm" | "md" | "lg";
};

export default class SmallWindow extends Component<Props> {
  container = (
    <Paper variant="outlined">
      <Box p={3}>
        <img src="artshala logo.png" alt="ArtShala" />
        <hr />
        <Box>{this.props.children}</Box>
      </Box>
    </Paper>
  );
  render() {
    return (
      <CenteredWrapper>
        {this.props.responsiveWidth ? (
          <ResponsiveWidth size={this.props.size}>
            {this.container}
          </ResponsiveWidth>
        ) : (
          this.container
        )}
      </CenteredWrapper>
    );
  }
}
