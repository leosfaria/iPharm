import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    //this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  // handleFilterTextChange(e) {
  //   this.props.onFilterTextChange(e.target.value);
  // }

  // <TextInput style={{width: 200}} placeholder="Remédio ou Farmácia" value={this.props.filterText}
  //   // onChange={this.handleFilterTextChange}
  //   onChangeText={(text) => this.setState({text})}
  // />

  teste(e) {
    console.log("Leo");
  }

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          inputStyle={{ width: 200 }}
          onChangeText={this.teste}
          onClear={this.teste}
          placeholder='Remédio ou Farmácia' />
      </View>
    );
  }
}
