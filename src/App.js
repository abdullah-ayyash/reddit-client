import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePosts from './features/homePosts/HomePosts';
import { Routes } from 'react-router-dom';
import Popular from './features/popular/Popular'
import SearchPage from './features/search/SearchPage';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/popular' element={<Popular />} >
        </Route>

        <Route path='/search-page' element={<SearchPage />}>

        </Route>
        <Route path='/' element={<HomePosts />} >
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
