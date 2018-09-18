import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.tasks}>
        <Text>{this.props.task.text} | {this.props.task.date}</Text>
        <Button title="X" onPress={() => this.props.deleteTask(this.props.task.key)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tasks: {
    backgroundColor: 'grey',
    width: '90%',
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems:'center'
  }
});
