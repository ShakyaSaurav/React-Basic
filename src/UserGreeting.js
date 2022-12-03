import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
              <div>Welcome Saurav</div>
            </div>
        )
    }
    else{
    return (
    <div>
      <div>Welcome Guest</div>
    </div>
    )
  }
}
 }
export default UserGreeting