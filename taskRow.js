import React from 'react';
import {Text} from 'react-native'

class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Text>{this.props.todo.task}..</Text>
        );
    }
}

TaskRow.propTypes = {
    todo: React.PropTypes.shape({task: React.PropTypes.string.isRequired}).isRequired
};

export default TaskRow;
