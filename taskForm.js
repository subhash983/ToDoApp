import {Text} from 'react-native';
import React from 'react';

class TaskFormScreen extends React.Component {
    static navigationOptions = {
      headerTitle: 'TaskForm',
      headerStyle: {
          paddingLeft: 110,
          paddingTop:20,
          justifyContent: 'center',
          backgroundColor: '#e00822'
      }
    };

    constructor() {
        super();
    }

    render() {
        return (
            <Text>From TaskForm Screen</Text>
        );
    }
}

export default TaskFormScreen;
