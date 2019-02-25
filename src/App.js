import React, { Component } from 'react';
import { Globalstyle } from'./style';
import { Provider} from 'react-redux'
import Header from './common/header'
import store from './store'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Globalstyle />
          <Header />
       </Provider>
       </React.Fragment>
    );
  }
}

export default App;
