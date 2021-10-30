import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header'
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Rooms from './Pages/Rooms/Rooms';
import './App.css';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Services from './Pages/Services/Services';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/rooms">
          <Rooms></Rooms>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="*">
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
