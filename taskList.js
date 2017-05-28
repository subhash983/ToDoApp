import {Text, ListView, View, StyleSheet} from 'react-native';
import React from 'react';
import TaskRow from './taskRow';

class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        };
    }

    renderRow(todo) {
        return (<TaskRow todo={todo}/>);
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView style={styles.listview} key={this.props.todos} dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
            </View>
        );
    }
}

TaskList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor:'#F7F7F7',
        flex:1,
        justifyContent:'flex-start'
    },
    listview: {
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default TaskList;
