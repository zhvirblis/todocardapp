import React from 'react'
import Home from '../components/Home'
import Details from '../containers/Details'
import PageNotFound from '../components/PageNotFound'
import { Route, Switch } from 'react-router-dom'
import '../styles/index.css';

const App = () => (
    <div>
        <h1 className="app-name">Todo List App</h1>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/details/:number' component={Details}/>
            <Route path='/*' component={PageNotFound}/>
        </Switch>
    </div>
)

export default App