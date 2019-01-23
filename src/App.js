import React, { Component } from "react";
import { navigate } from "@reach/router";

class App extends Component {
  state = {
    token: null
  };

  beginAuth() {
    let authUrl = `https://accounts.spotify.com/authorize?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&redirect_uri=${
      process.env.REACT_APP_SPOTIFY_CALLBACK
    }&response_type=token`;

    navigate(authUrl);
  }

  componentDidMount() {
    let returnValues = window.location.hash.substr(1);
    this.setState({
      token: returnValues.split("&")[0].split("=")[1]
    });
  }

  render() {
    const { token } = this.state;
    return (
      <React.Fragment>
        <h1>Please Authorise Spotify</h1>
        <button onClick={this.beginAuth}>Click Here</button>
        <h1>{token}</h1>
      </React.Fragment>
    );
  }
}

export default App;
