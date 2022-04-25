import './App.css';
import Calendar from './calendar';
import Stream from './stream';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          exact activeStyle={{ textDecoration: 'underline' }}
          to="/"
        >
          Stream
        </NavLink>
        <NavLink
          exact activeStyle={{ textDecoration: 'underline' }}
          to="/calendar"
        >
          Calendar
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Stream} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
