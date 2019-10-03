import React, { Component } from "react";
import { withStyles, Paper, Grid } from "@material-ui/core";
import A from "./a";
import B from "./b";

class Ishan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      A: [
        { name: "ishan", image: "https://source.unsplash.com/user/ishan" },
        { name: "piyush", image: "https://source.unsplash.com/user/piyush" },
        { name: "raman", image: "https://source.unsplash.com/user/erondu" },
        { name: "sonaksh", image: "https://source.unsplash.com/user/john" },
        { name: "hritik", image: "https://source.unsplash.com/user/tom" },
        { name: "roshan", image: "https://source.unsplash.com/user/ishan" },
        { name: "kunal", image: "https://source.unsplash.com/user/piyush" },
        { name: "bheji", image: "https://source.unsplash.com/user/erondu" },
        { name: "monaksh", image: "https://source.unsplash.com/user/john" },
        { name: "tarun", image: "https://source.unsplash.com/user/tom" }
      ],
      B: [
        { name: "daspa", image: "https://source.unsplash.com/user/ishan" },
        { name: "rawat", image: "https://source.unsplash.com/user/piyush" },
        { name: "negi", image: "https://source.unsplash.com/user/raman" },
        { name: "mayank", image: "https://source.unsplash.com/user/john" },
        { name: "phantom", image: "https://source.unsplash.com/user/rhino" }
      ]
    };
  }

  onListClick = index => {
    let l = index;
    if (index >= this.state.A.length) {
      l = 0;
    }
    if (this.state.A.length < 1) {
      window.alert("There are no more resources to allocate");
      return;
    }
    console.log(index);
    if (l != null) {
      this.setState(
        {
          B: [...this.state.B, this.state.A[l]]
        },
        () => {
          this.state.A.splice(l, 1);

          this.setState({
            A: this.state.A
          });
        }
      );
    } else {
      l = 0;
      this.setState(
        {
          B: [...this.state.B, this.state.A[l]]
        },
        () => {
          this.state.A.splice(l, 1);

          this.setState({
            A: this.state.A
          });
        }
      );
    }
  };
  onListClick2 = index => {
    let l = index;
    if (index >= this.state.B.length) {
      l = 0;
    }
    if (this.state.B.length < 1) {
      window.alert("there are no more resources to un-allocate");
      return;
    }
    if (l != null) {
      this.setState(
        {
          A: [...this.state.A, this.state.B[l]]
        },
        () => {
          this.state.B.splice(l, 1);
          this.setState({
            B: this.state.B
          });
        }
      );
    } else {
      l = 0;
      this.setState(
        {
          A: [...this.state.A, this.state.B[l]]
        },
        () => {
          this.state.B.splice(l, 1);
          this.setState({
            B: this.state.B
          });
        }
      );
    }
  };

  render() {
    const classes = this.props.classes;

    return (
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom right, blue, white)",
          paddingTop: "5vh",
          paddingBottom: "2vh"
        }}
      >
        <h1 style={{ color: "white", fontFamily: "italic" }}>
          Resource Allocator
        </h1>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid xs={12} lg={12} md={12} container>
              <A items={this.state.A} onListClick={this.onListClick} />

              <B items={this.state.B} onListClick2={this.onListClick2} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  paper: {
    height: "70%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15vh"
  }
});
export default withStyles(styles)(Ishan);
