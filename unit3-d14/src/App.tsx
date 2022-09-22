import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import GetArticles from './components/GetArticles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/ArticleDetails';

 

function App() {
  return (

    <BrowserRouter>
        <div className="App">
        <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<GetArticles />} />
              <Route path="/ArticleDetails/:articleID" element={<ArticleDetails />} />
            </Routes> 
        </div>
    </BrowserRouter>
  );
}

export default App;
