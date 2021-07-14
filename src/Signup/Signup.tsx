import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SmallWindow from "../styleGuide/layout/SmallWindow";

export default class Signup extends Component {
  render() {
    return (
      <SmallWindow responsiveWidth size="sm">
        <Box>
          <Typography variant="caption" color="textSecondary">
            Click on{" "}
            <Link to="/login">
              <Typography variant="caption" color="primary" component="span">
                Login
              </Typography>{" "}
            </Link>
            if you already have an account
          </Typography>
          <Box mt={2}>
            <TextField label="Name" margin="normal" variant="outlined" />
            <TextField label="Email" margin="normal" variant="outlined" />
          </Box>
        </Box>
      </SmallWindow>
    );
  }
}
