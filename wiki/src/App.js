import logo from './logo.svg';
import Sidebar from './sidebar';
import Home from './home';
import Iteration from './iteration';
import Tryit from './tryit';
import "./style.css"
import "/node_modules/highlight.js/styles/atom-one-light.css"

import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
  
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='iteration' element={<Iteration></Iteration>}></Route>
        <Route path="sandbox" element={<Tryit></Tryit>}></Route>
      </Routes>
      
    </>
      
  )
}

export default App;
