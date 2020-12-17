import react, {Component, Fragment} from 'react';
import Header from './common/Header'
import { Globalstyle } from './style';
import { GlobalstyleFont } from './resource/iconfont/iconfont.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  render(){
    return (
      <Fragment>
        <Router>
          <Globalstyle/>
          <GlobalstyleFont/>
          <Header/>
          <switch>
            <Route exact path="/">
              home
            </Route>
            <Route path="/detail">
              detail
            </Route>
            <Route path="/insight">
              insight
            </Route>
          </switch>
        </Router>
      </Fragment>
    )
  }
}

export default App;
