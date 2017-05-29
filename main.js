import Expo from 'expo';
import React from 'react';
import {StyleSheet, View, Navigator, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import TaskList from './taskList';
import TaskFormScreen from './taskForm';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Welcome',
        headerStyle: {
            paddingLeft: 110,
            paddingTop:20,
            justifyContent: 'center',
            backgroundColor: '#e00822'
        }
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                }, {
                    task: 'Learn Redux'
                }
            ]
        }
    }

    onAddStarted() {
        this.props.navigation.navigate('TaskForm');
    }

    renderScene(route, nav) {
        switch (route.name) {
            case 'taskform':
                return (
                    <Text>Add form comes from Here!</Text>
                );
                break;
            default:

        }
    }

    render() {
        return (<TaskList todos={this.state.todos} onAddStarted={this.onAddStarted.bind(this)}/>);
    }
}

const ToDoApp = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    TaskForm: {
        screen: TaskFormScreen
    }
});

const styles = StyleSheet.create({
    header: {
        padding: 20
    }
});

Expo.registerRootComponent(ToDoApp);
