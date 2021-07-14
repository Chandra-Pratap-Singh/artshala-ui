import { Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SmallWindow from "../styleGuide/layout/SmallWindow";

export default class Login extends Component {
  loginButtonStyle = {
    color: "white",
  };
  render() {
    return (
      <SmallWindow>
        <Typography variant="caption" color="textSecondary">
          Click on{" "}
          <Link to="/signup">
            <Typography variant="caption" color="primary" component="span">
              Signup
            </Typography>{" "}
          </Link>
          to create new account
        </Typography>
        <Box pt={2}>
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box pt={2}>
          <TextField
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Box>
        <Box pt={2}>
          <Box display="flex" justifyContent="space-between">
            <Button color="primary" variant="text" size="small">
              <Typography variant="caption">Forgot Password</Typography>
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={this.loginButtonStyle}
            >
              Login
            </Button>
          </Box>
        </Box>
      </SmallWindow>
    );
  }
}
