import logo from './logo.svg';
import './App.css';
import Counter from './components/day01/Counter';
import Forms from './components/day01/Forms';
import ToggleBtn from './components/day02/ToggleBtn';
import HideImage from './components/day02/HideImage';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
     {/* <Counter/>
     <Forms/> */}

     <ToggleBtn/>
     <HideImage/>
    </div>
  );
}

export default App;
