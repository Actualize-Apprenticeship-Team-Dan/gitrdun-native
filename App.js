import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Task from './Task'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{text: "hello", key: '1', date: new Date('December 17, 1995').getTime()}, {text: "GoodBye", key: '2', date: new Date('December 25, 2017').getTime()}],
      inputText: ''
    }
  }

  onChangeText = (text) => this.setState({inputText: text})

  addTask = () => {
    let tasks = this.state.tasks.slice()
    let newKey = tasks.length + 1
    tasks.push({
      text: this.state.inputText,
      key: newKey.toString(),
      date: new Date().getTime()
    })
    this.setState({tasks: tasks, inputText: ''})
  }

  deleteTask = (key) => {
    let tasks = this.state.tasks.filter(task => task.key !== key)
    console.log('delete')
    this.setState({tasks: tasks})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>GITRDUN</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            value={this.state.inputText}
            placeholder='addTask'
            onChangeText={this.onChangeText}
          />
          <Button onPress={this.addTask} title="add task" />
        </View>
        <View styles={styles.tasksContainer}>
          <FlatList
            style={{width: 350 }}
            data={this.state.tasks}
            renderItem={({item}) => <Task key={item.key} task={item} deleteTask={this.deleteTask} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  tasksContainer: {
    margin: 10
  },
  inputContainer: {
    marginTop: 10,
    height: 100,
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "aqua",
    padding: 10
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
  }
});
