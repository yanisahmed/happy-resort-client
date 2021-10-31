import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header'
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Rooms from './Pages/Rooms/Rooms';
import './App.css';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Services from './Pages/Services/Services';
import RoomDetails from './Pages/RoomDetails/RoomDetails';
import AuthProvider from "./context/AuthProvider";
import BookingPage from './Pages/BookingPage/BookingPage';
import PrivateRoute from './component/PrivateRoute/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route exact path="/rooms">
            <Rooms></Rooms>
          </Route>
          <Route path="/rooms/:id">
            <RoomDetails></RoomDetails>
          </Route>
          <PrivateRoute path="/booking/:id">
            <BookingPage></BookingPage>
          </PrivateRoute>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
