import React from 'react';
// import Task from './Task'
import { StyleSheet, Text, ListView } from 'react-native';

const TaskList=(props) => {
    return (
          <ListView dataSource={props.tasks} renderRow={(rowData) => <Text>{rowData}</Text>}/>
            //   <Task 
                // task={task}
                // key={task.id} 
                // removeTask={props.removeTask}
                // toggleCompleted={props.toggleCompleted}
                // moveTask={props.moveTask}
                // direction={task.direction}
                // order={index}
                // length={props.tasks.length}
                // index={index}
            //   /> 
    );
  }

export default TaskList;