import { Button, Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocumentInput from "../styleGuide/form/DocumentInput";
import SmallWindow from "../styleGuide/layout/SmallWindow";

export default class Signup extends Component {
  signupButtonStyle = {
    color: "white",
  };
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
          <Box>
            <Box m={2}>
              <DocumentInput />
            </Box>
            <Grid container spacing={2} justifyContent="space-evenly">
              <Grid item sm={6}>
                <TextField
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  type="email"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  type="password"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  label="Confirm Password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  type="password"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  label="Phone"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  type="tel"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  label="Confirm Password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tell us something about yourself"
                  margin="normal"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                  type="text"
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                color="primary"
                variant="contained"
                style={this.signupButtonStyle}
              >
                Signup
              </Button>
            </Box>
          </Box>
        </Box>
      </SmallWindow>
    );
  }
}
