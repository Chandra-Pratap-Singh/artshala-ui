import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import CenteredWrapper from "../styleGuide/layout/CenteredWrapper";

export default class Login extends Component {
  loginButtonStyle = {
    color: "white",
  };
  render() {
    return (
      <CenteredWrapper>
        <Paper variant="outlined">
          <Box p={2}>
            <img src="artshala logo.png" alt="ArtShala" />
            <hr />
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
              <Box display="flex" justifyContent="space-around">
                <Button color="primary" variant="text" size="small">
                  Forgot Password
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
          </Box>
        </Paper>
      </CenteredWrapper>
    );
  }
}
