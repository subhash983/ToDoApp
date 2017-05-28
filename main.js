import Expo from 'expo';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TaskList from './taskList';

class ToDoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                },
                {
                    task: 'Learn Redux'
                }
            ]
        }
    }

    render() {
        return (<TaskList todos={this.state.todos}/>);
    }
}

Expo.registerRootComponent(ToDoApp);
