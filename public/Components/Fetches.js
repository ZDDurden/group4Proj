import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Fetches extends Component {
  constructor() {
    super();
    this.state = {
      bands: [],
      users: [],
      events: [],
      isLoaded: true
    };
  }
  componentDidMount() {
    fetch("https://localhost:3000/bands")
      .then(response => response.json())
      .then(result => this.setState({ bands: result }));
    fetch("https://localhost:3000/users")
      .then(response => response.json())
      .then(result => this.setState({ users: result }));
    fetch("https://localhost:3000/events")
      .then(response => response.json())
      .then(result => this.setState({ events: result }));
  }
  render() {
    const { userInfo } = this.state.users
    return (
      <UserProfileMain userInfo = {this.state.users} />
    );
  }
  catch(err) {
    console.log(err);
  }
}
