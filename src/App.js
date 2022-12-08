import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';
function App() {
  return (
    <div className="App">
      <NameList/>
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
       {/* <Message/> */}
     {/* <Greet name="saurav" heroName= "ME"><p>this is a test </p></Greet>
     <Greet name="aman" heroName= "Bro" />
     <button>Action</button>
     <Greet name="vishma" heroName= "Next bro"/>
     <Welcome name="saurav" heroName= "ME"/>
     <Welcome name="aman" heroName= "Bro"/>
     <Welcome name="vishma" heroName= "Next bro"/> */}
    </div>
   
  );
}

export default App;
