const React = require('react');
const TodoStore = require('../stores/TodoStore');
const TodoItem = require('./TodoItem');

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TodoStore.getAll();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(TodoStore.getAll());
  }

  render() {
    const TodoItemList = this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} todo={todo}/>
      );
    });
    return (
      <ul>{TodoItemList}</ul>
    );
  }
}
