import './App.css';

import Introduction from './components/Introduction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/personal-website/' exact element={<Introduction />}/>
      </Routes>
    </Router>
  );
}

export default App;