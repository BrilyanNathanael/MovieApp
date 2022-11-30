import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewRelease from './component/NewRelease';
import HomeContainer from './container/HomeContainer';
import Navigationbar from './component/Navigationbar';
import MovieContainer from './container/MovieContainer';
import ListMovieContainer from './container/ListMovieContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navigationbar/>
          <Routes>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/list' element={<ListMovieContainer/>}/>
            <Route path='/detail/:id' element={<MovieContainer/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
