import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.tasks}>
        <Text>{this.props.task.text} | {this.props.task.date}</Text>
        <Button 
          icon={{name: 'times-circle' , type:'font-awesome'}}
          onPress={() => this.props.deleteTask(this.props.task.id)} 
          buttonStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
        />

        <Button
          icon={this.props.task.completed ? {name: 'check-circle' , type:'font-awesome'} : {name: 'circle' , type:'font-awesome'}}
          onPress={() => this.props.toggleCompleted(this.props.task)}
          buttonStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
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
