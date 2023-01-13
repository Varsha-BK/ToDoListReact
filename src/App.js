import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import ViewTodo from './Components/ViewTodo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ViewTodo/>}/>
        <Route path='/addtodo' exact element={<Add/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
