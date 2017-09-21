
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './component/App';
import Help from './routes/Help';
import DevCategory from './routes/DevCategory';
import DevSubclass from './routes/DevSubclass';
import '../static/style.less';

const container = document.querySelector('#root');
const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/help" component={Help}/>
        <Route path="/category" component={DevCategory}/>
        <Route path="/subclass" component={DevSubclass}/>
    </Router>
);

render(router,container);
