const React =require('react');
const AddTodo = require('./AddTodo');
const TodoList = require('./TodoList');
const Foo = require('./Foo');

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <TodoList/>
                <AddTodo/>
                <Foo/>
            </div>
        );
    }
}
