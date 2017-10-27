import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp, composeWithDevTools(
    
));

render(
    <Provider store={store}>
        <Router basename="/todocardapp/#">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)