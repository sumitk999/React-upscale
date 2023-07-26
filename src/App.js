import logo from './logo.svg';
import './App.css';
import Counter from './components/day01/Counter';
import Forms from './components/day01/Forms';
import ToggleBtn from './components/day02/ToggleBtn';
import HideImage from './components/day02/HideImage';
import ChangeTitle from './components/day02/ChangeTitle';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
     {/* <Counter/>
     <Forms/> */}
      <ChangeTitle/>
     <ToggleBtn/>
     <HideImage/>
    </div>
  );
}

export default App;
