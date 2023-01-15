import './App.css';

import Introduction from './components/Introduction';
import WIP from './components/WIP';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div id='root'>
      {/* <Introduction /> */}
      <Router>
        <Routes>
          <Route path='/personal-website/' exact element={<Introduction />} />
          <Route path='/personal-website/wip/' exact element={<WIP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;