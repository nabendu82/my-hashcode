import './App.css';
import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="JavaScript">Language of the web</Greet>
      <Greet name="Golang" />
      <Welcome name="JavaScript">Language of the web</Welcome>
      <Welcome name="Golang" /> */}
      <Counter />
    </div>
  );
}

export default App;
