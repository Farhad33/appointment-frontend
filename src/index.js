import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Services from './Services'
import Progress_bar from './Progress_bar'

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Services } />
  </Router>),
  document.getElementById( 'root' )
);
