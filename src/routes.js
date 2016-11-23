import React from 'react';
import  {Route, IndexRoute} from 'react-router';

import App from './components/app';


const Greeting = () => {
  return <h1>Hey there!</h1>;
};

export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
)