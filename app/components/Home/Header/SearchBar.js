import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  // handleFilterTextChange(e) {
  //   this.props.onFilterTextChange(e.target.value);
  // }

  render() {
    return (
      <View>
        <TextInput style={{width: 200}} placeholder="Remédio ou Farmácia" value={this.props.filterText}
          // onChange={this.handleFilterTextChange}
        />
      </View>
    );
  }
}
