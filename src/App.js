import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //, Route, Link 
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Content from './components/Content';
// import Swiper from './components/Swiper';
import Movie from './routes/Movie';
import './index.css';
import './Common.css';
import MovieDetail from './routes/MovieDetail';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route path="/detail/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/detail">
                        <Movie />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Content />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
        // $ npm i gh-pages
        // $ npm run build
    );
}

export default App;
