import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TaskList from './TaskList'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["hello", "GoodBye"],
      inputText: ''
    }
  }

  addTask = () => {
    let tasks = this.state.tasks
    tasks.push(this.state.inputText)
    this.setState({tasks: tasks, inputText: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>GITRDUN</Text>
        </View>
          <View>
            {this.state.tasks.map((task, index) =>  
                (<Text key={index} style={styles.tasks}>{task}</Text>)
              )}
              <TextInput style={{height: 40}} 
              value={this.state.inputText}
              placeholder='addTask'
              onChangeText={(text) => {
                this.setState({inputText: text})
              }}>
              
            </TextInput>
              <Button onPress={this.addTask} title="add task">
                
              </Button>
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
    alignSelf: 'flex-start'
  },
  bannerText: {
    lineHeight: 100,
    textAlign: 'center'
  },
  tasks: {
    backgroundColor: 'grey',
    width: 100,
    height: 100,
    margin: 10
  }
});
