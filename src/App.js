// import { PureComponent } from 'react';
import './App.css';
import HocData from './reacthandson5/Hocdata';
import Hocfunction1 from './reacthandson5/Hocfunction1';
import Hocfunction2 from './reacthandson5/Hocfunction2';
import { Purecomponent } from './reacthandson5/Purecomponent';


function App() {
  return (
    <div className="App">
      <Hocfunction1 val={HocData}/>
      <Hocfunction2 val={HocData}/>
      <Purecomponent/>
    </div>
  );
}

export default App;
