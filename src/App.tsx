import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AudioPlayer from './components/AudioPlayer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/' exact component={AudioPlayer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
