import React from 'react';

class TodoForm extends React.Component {
  state = { word: '' }

  handleChange = (e) => {
    this.setState({ word: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addItem(this.state.word)
    this.setState({ word: '' })
  }

  render() {
    const {word} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='word'
          value={word}
          required
          placeholder='Add Item'
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default TodoForm;