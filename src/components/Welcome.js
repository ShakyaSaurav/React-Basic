import React,{Component, component} from "react";
class Welcome extends Component{
    render(){
        const{name,heroName}= this.props
        return <h1>welcome {name} a.k.a{heroName}</h1>
    }
}
export default Welcome;