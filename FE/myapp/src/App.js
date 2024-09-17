import './App.css'
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import NotFoundPage from './pages/NotFoundPage';
import PostsPage from './pages/PostsPage';


function App() {
  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/posts' element={<PostsPage />}/>
      </Routes>
    </div>
  );
}

export default App;