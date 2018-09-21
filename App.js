import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Task from './Task'
import firebase from './firebase';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputText: ''
    }
  }

  componentDidMount() {
    firebase.firestore().collection('tasks').onSnapshot(snapshot => {
      let tasks = [];
      snapshot.forEach(doc => {
        console.log(doc.data());
        tasks.push(doc.data());
      })
      tasks = tasks.map(task => {
        task['key'] = task.id.toString()
        task.date = task.date.toDate().getTime()
        return task
      })
      this.setState({ tasks: tasks });
    })
  }

  toggleCompleted = (task) => {
    task.completed = !task.completed
    this.updateTask(task)
  }

  updateTask(task) {
    task.date = new Date(task.date)
    firebase.firestore().collection('tasks').doc(task.id).set(task).then(() => {
      console.log("Document updated successfully");
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  }

  onChangeText = (text) => this.setState({inputText: text})

  addTask = () => {
    let id = new Date().getTime().toString()
    firebase.firestore().collection('tasks').doc(id).set({
      text: this.state.inputText,
      date: new Date(),
      completed: false,
      id: id,
      user: 'mobile device',
      dueDate: new Date()
    }).then(() => {
      this.setState({
        inputText: "",
        dueDate: new Date(),
        open: false
      })
    }).catch((error) => {
      console.log("error adding document", error)
    })
  }

  deleteTask = (taskId) => {
    firebase.firestore().collection('tasks').doc(taskId).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
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
          <Button style={styles.addButton} 
            title="add task"
            icon={{name: 'plus' , type:'font-awesome'}}
            onPress={this.addTask}
          />
        </View>
        <View styles={styles.tasksContainer}>
          <FlatList
            style={{width: 350 }}
            data={this.state.tasks}
            renderItem={({item}) =>
              <Task
                key={item.key}
                task={item}
                deleteTask={this.deleteTask}
                toggleCompleted={this.toggleCompleted}
              />
            }
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
  },
  addButton: {
    marginTop: 10
  }
});
