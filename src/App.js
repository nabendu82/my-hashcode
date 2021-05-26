import './App.css';
import ParentComponent from './components/ParentComponent';
// import ClassEvent from './components/ClassEvent';
// import FunctionEvent from './components/FunctionEvent';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <FunctionEvent /> */}
      {/* <ClassEvent /> */}
      {/* <Greet name="JavaScript">Language of the web</Greet>
      <Greet name="Golang" />
      <Welcome name="JavaScript">Language of the web</Welcome>
      <Welcome name="Golang" /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
