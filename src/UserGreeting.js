import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    return this.state.isLoggedIn && <div> welcome Saurav</div>
    // return this.state.isLoggedIn?(
    //     <div>Welcome Saurav</div>
    // ):(
    //     <div>Welcome guest</div>
    // )
    // let Message
    // if(this.state.isLoggedIn){
    //     Message=<div>Welcome Saurav</div>
    // }
    // else{
    //     Message=<div>Welcome guest</div>
    // }
    // return <div>{Message}</div>
//     if(this.state.isLoggedIn){
//         return (
//             <div>
//               <div>Welcome Saurav</div>
//             </div>
//         )
//     }
//     else{
//     return (
//     <div>
//       <div>Welcome Guest</div>
//     </div>
//     )
//   }
}
 }
export default UserGreeting