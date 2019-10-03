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

  onListClick2 = index => {
    this.setState({ index: index }, () => {
      console.log(this.state.index);
    });
  };
  render() {
    const classes = this.props.classes;

    return (
      <>
        <Grid
          xs={6}
          lg={1}
          md={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Button
            style={{
              backgroundColor: "#1e88e5"
            }}
            onClick={() => this.props.onListClick2(this.state.index)}
          >
            Revoke
          </Button>
        </Grid>

        <Grid xs={12} lg={5} md={5}>
          <Paper className={classes.paper}>
            <List className={classes.root}>
              {this.props.items.map((item, index) =>
                index == this.state.index ? (
                  <ListItem
                    key={index}
                    onClick={() => this.onListClick2(index)}
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
                    onClick={() => this.onListClick2(index)}
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
      </>
    );
  }
}

const styles = theme => ({
  paper: {
    height: "50vh",
    marginTop: "10vh",
    marginBottom: "10vh",

    marginLeft: "10%",
    marginRight: "10%",
    overflowY: "scroll"
  }
});
export default withStyles(styles)(Ishan);
