import logo from './logo.svg';
import './App.css';
import Counter from './components/day01/Counter';
import Forms from './components/day01/Forms';
import ToggleBtn from './components/day02/ToggleBtn';
import HideImage from './components/day02/HideImage';
import ChangeTitle from './components/day02/ChangeTitle';
import { Outlet, Route, Routes } from 'react-router-dom';
import StopWatch from './components/stopwatch/StopWatch';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <ul>
        <li>Page1</li>
        <li>Page2</li>
      </ul>
      {/* <Counter/>
     <Forms/> */}
      <Routes>
        <Route index element={<HideImage />} />
        <Route path='/toggle' element={<ToggleBtn />}>
          <Route path='counter' element={<Counter />} />
        </Route>
        <Route path='/stopwatch' element={<StopWatch />} />
        {/* <ChangeTitle/> */}
        {/* <ToggleBtn/>
     <HideImage/> */}
      </Routes>

    </div>
  );
}

export default App;
