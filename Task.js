import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.tasks}>
        <Text>{this.props.task.text} | {this.props.task.date}</Text>
        <Button title="X" onPress={() => this.props.deleteTask(this.props.task.id)} />
        <Button
          title={this.props.task.completed ? 'C' : 'U'}
          onPress={() => this.props.toggleCompleted(this.props.task)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tasks: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aqua',
    width: '90%',
    height: 50,
    margin: 17,
    justifyContent: 'center',
    alignItems:'center'
  }
});
