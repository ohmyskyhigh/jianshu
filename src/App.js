import react, {Component, Fragment} from 'react';
import Header from './common/Header'
import { Globalstyle } from './style';
import { GlobalstyleFont } from './resource/iconfont/iconfont.js'

class App extends Component{
  render(){
    return (
      <Fragment>
        <div>
          <Globalstyle/>
          <GlobalstyleFont/>
          <Header/>
        </div>
      </Fragment>
    )
  }
}

export default App;
