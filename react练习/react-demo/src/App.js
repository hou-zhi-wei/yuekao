import React from 'react';
import "./mock/mock"
import {BrowserRouter} from "react-router-dom"
import Routerview from "./Router/Routerview"
import config  from "./Router/Router.config"
import {Provider} from "react-redux"
import store from "./store/store"
function App() {
  return (
    <div className="App">
    <Provider store={store}> 
        <BrowserRouter>
          <Routerview routes={config.routes}></Routerview>
        </BrowserRouter>
    </Provider>
      
    </div>
  );
}

export default App;
