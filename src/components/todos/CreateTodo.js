import React, { Component } from 'react'
import { connect } from 'react-redux';
import manageTodo from '../../reducers/manageTodo';
import { createTodoAction } from '../../actions';

class CreateTodo extends Component {
  state = { text: '' };

  renderTodos = () => {
    return this.props.todos.map(t => 
      <li key={t}>{t}</li>
    );
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.createTodoAction(e.target.todo.value);
    this.setState({ text: '' })
  }

  render() {
    const {text} = this.state;
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>add todo</label>
            <input name="todo" type="text" value={text} onChange={e => this.setState({ text: e.target.value })} />
          </div>
          <input type="submit" />
        </form>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
};

export default connect(mapStateToProps, { createTodoAction })(CreateTodo);
