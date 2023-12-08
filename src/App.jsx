import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='' element={<Main/>}/>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
