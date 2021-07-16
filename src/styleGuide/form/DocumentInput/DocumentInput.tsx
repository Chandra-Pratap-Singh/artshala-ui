import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

export default class DocumentInput extends Component {
  inputRef: any;
  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    files: [],
  };

  onButtonClick() {
    this.inputRef.current.click();
  }

  onSelectFile(event: any) {
    event.preventDefault();
    event.stopPropagation();
    let index = 0;
    const fileReader: any = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        files: [...this.state.files, fileReader.result.toString()],
      });
      if (event.target.files[index + 1]) {
        index = index + 1;
        fileReader.readAsDataURL(event.target.files[index]);
      } else {
        this.inputRef.current.value = null;
      }
    };
    fileReader.readAsDataURL(event.target.files[index]);
  }

  deleteDocument(index: number) {
    this.setState({
      files: this.state.files.filter((_, i) => i !== index) || [],
    });
    console.log(this.state.files);
  }

  render() {
    return (
      <Box display="flex" justifyContent="center" flexDirection="column">
        <fieldset
          style={{
            borderWidth: "1px",
            borderColor: "rgba(0,0,0,0.23)",
            borderRadius: "4px",
          }}
        >
          <input
            type="file"
            style={{ display: "none" }}
            ref={this.inputRef}
            onChange={(v) => this.onSelectFile(v)}
            multiple
          />
          <Box textAlign="center">
            <Icon color="action">cloud_upload</Icon>
          </Box>
          <Box textAlign="center">
            <Typography variant="body2">Drag and Drop files here</Typography>
          </Box>
          <Box textAlign="center" width={1} mt={1}>
            <Button
              onClick={() => this.onButtonClick()}
              color="inherit"
              variant="contained"
              disableElevation={true}
              size="small"
              // disabled={disabled}˝
            >
              Browse
            </Button>
          </Box>
          <Box display="flex">
            {this.state.files?.map((file, index) => (
              <Box
                m={1}
                style={{ position: "relative", border: `1px solid #39c2d7` }}
                key={index}
              >
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    backgroundColor: "red",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => this.deleteDocument(index)}
                >
                  <Icon color="action">close</Icon>
                </div>
                <img src={file} alt="" height="100px" width="100px" />
              </Box>
            ))}
          </Box>
        </fieldset>
      </Box>
    );
  }
}
