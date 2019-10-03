import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button
} from "@material-ui/core";

class Ishan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };
  }

  onListClick = index => {
    this.setState({ index: index }, () => {
      // console.log(this.state.index);
    });
  };

  render() {
    const classes = this.props.classes;

    return (
      <>
        <Grid xs={12} lg={5} md={5}>
          <Paper className={classes.paper}>
            <List className={classes.root}>
              {this.props.items.map((item, index) =>
                index == this.state.index ? (
                  <ListItem
                    key={index}
                    onClick={() => this.onListClick(index)}
                    button
                    style={{ backgroundColor: "grey" }}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <img src={item.image} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ) : (
                  <ListItem
                    key={index}
                    onClick={() => this.onListClick(index)}
                    button
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <img src={item.image} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                  </ListItem>
                )
              )}
            </List>
          </Paper>
        </Grid>
        <Grid
          xs={6}
          lg={1}
          md={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
            // marginRight: "5px"
          }}
        >
          <Button
            style={{
              backgroundColor: "#1e88e5"
              // width: "100px"
            }}
            onClick={() => this.props.onListClick(this.state.index)}
          >
            Invoke
          </Button>
        </Grid>
      </>
    );
  }
}

const styles = theme => ({
  paper: {
    marginTop: "10vh",
    marginBottom: "10vh",
    marginLeft: "10%",
    marginRight: "10%",
    height: "50vh",
    overflowY: "scroll"
  }
});
export default withStyles(styles)(Ishan);
