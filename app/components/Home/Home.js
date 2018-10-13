import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './Header/Header.js';

export default class Home extends Component {
  render() {
    return (
      <Header username={this.props.username} />
    );
  }
}
