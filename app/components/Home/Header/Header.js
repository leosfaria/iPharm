import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Greeting from './Greeting.js';
import Search from './Search.js';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Greeting username={this.props.username} />
        <Search />
      </View>
    );
  }
}
