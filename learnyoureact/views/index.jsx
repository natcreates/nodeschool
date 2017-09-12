import React, { Component } from 'react';

export default class TodoBox extends Component {
      render() {
        // note that components must return a single root element
        // hence the div wrapping the heading and todo elements
        return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
      }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }
  }

  handleChange() {
    this.setState((prevState, props) => {
      if (prevState.checked === false) {
        return { checked: true };
      } else {
        return { checked: false };
      }
    })
  }
  render() {
    return (
      <tr>
        <td style={style.tableContent}>
                        <input type="checkbox"
                          checked={this.state.checked} onChange={this.handleChange.bind(this)}/></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    )
  }
}
Todo.propTypes = {
      title: React.PropTypes.string.isRequired
};

class TodoList extends Component {
  render() {
    return (
    <div className="todoList">
        <table style={{border: "2px solid black"}}>
            <tbody>
              <Todo title="Shopping">Milk</Todo>
              <Todo title="Hair cut">13:00</Todo>
              <Todo title="Learn React">15:00</Todo>
            </tbody>
          </table>
    </div>

    )
  }
}

class TodoForm extends Component {
  render() {
    return <div className="todoForm">I am a TodoForm.</div>
  }
}

let style = {
  tableContent: {
      border: "1px solid black"
  }
};
