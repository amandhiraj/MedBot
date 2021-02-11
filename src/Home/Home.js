import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import TextField from '@material-ui/core/TextField';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Login</h1>
          <p>Please login to your Med Account</p>
          <form>

            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Username"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ margin: 8 }}
              placeholder="Password"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="btn btn-success" onClick={() => history.push('/Contact')}>Login</Button>
          </form>
        </div>
      </div>
    );
  }
}
