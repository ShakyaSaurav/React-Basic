import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         Topic:'',
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
     
    render(){
    return (
      <form>
        <div>
            <label>Username</label>
            <input type='text' value= {this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Faculty</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='Vue'>Vue</option>
            </select>
        </div>
      </form>
    )
  }
}

export default Form