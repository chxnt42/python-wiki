import logo from './logo.svg';
import Sidebar from './sidebar';
import Home from './home';
import Iteration from './iteration';
import Tryit from './tryit';
import Comments from './comments';
import Variables from './Variables';
import DataTypes from './DataTypes';
import List from './List';
import Dictionarys from './Dictionarys';
import "./style.css"
import "/node_modules/highlight.js/styles/atom-one-light.css"

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='iteration' element={<Iteration></Iteration>}></Route>
        <Route path="sandbox" element={<Tryit></Tryit>}></Route>
        <Route path="comments" element={<Comments></Comments>}></Route>
        <Route path="variables" element={<Variables></Variables>}></Route>
        <Route path="datatypes" element={<DataTypes></DataTypes>}></Route>
        <Route path="lists" element={<List></List>}></Route>
        <Route path="dictionaries" element={<Dictionarys></Dictionarys>}></Route>
      </Routes>

    </>

  )
}

export default App;
