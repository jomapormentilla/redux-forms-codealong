import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <p>
            <label>Add Todo</label>
            <input type="text" name="text" onChange={ this.handleOnChange } />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
