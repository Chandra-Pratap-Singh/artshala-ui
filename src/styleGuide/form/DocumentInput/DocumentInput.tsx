import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

export default class DocumentInput extends Component {
  style = {
    border: "1px solid black",
  };
  render() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        // style={this.style}
        p={1}
      >
        <fieldset
          style={{
            borderWidth: "1px",
            borderColor: "rgba(0,0,0,0.23)",
            borderRadius: "4px",
          }}
        >
          <input type="file" style={{ display: "none" }} />
          <Box textAlign="center">
            <Icon color="action">cloud_upload</Icon>
          </Box>
          <Box textAlign="center">
            <Typography>Drag and Drop files here</Typography>
          </Box>
          <Box textAlign="center" width={1} mt={1}>
            <Button
              // onClick={onButtonClick}
              color="inherit"
              variant="contained"
              disableElevation={true}
              size="small"
              // disabled={disabled}
            >
              Browse
            </Button>
          </Box>
        </fieldset>
      </Box>
    );
  }
}
