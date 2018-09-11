import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // inputValue: '',
      // dueDate: new Date(),
      // filterValue: '',
      // showCompleted: false,
      // showAllTasks: true,
      tasks: ["hello", "GoodBye"]
      // open: false, 
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>GITRDUN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
