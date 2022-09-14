import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage.jsx';
import PostPage from './pages/PostPage.jsx';

function App() {
  return (
    <div className="App pageWrapper">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
