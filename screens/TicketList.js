import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";

export default class TicketList extends Component {
  state = {
    isLoading: true,
    tickets: []
  };
  componentDidMount() {
    return fetch("/tickets")
      .then(res => res.json())
      .then(data => this.setState({ tickets: data, isLoading: false }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator style={{ alignSelf: "center", top: 200 }} />;
    }

    return (
      <View>
        <Text>Ticket List</Text>
      </View>
    );
  }
}
