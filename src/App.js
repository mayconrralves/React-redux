import React from 'react';
import {Provider} from 'react-redux';
import  Print  from './Print'
import Main from './Main';
import store from './store'



function App() {


  return (
          <Provider store={store}>
			<Print />
    		<Main />
			      
    	 </Provider>
  );
}

export default App;
