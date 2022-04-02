import React from "react";
import ReactDOM from "react-dom";

// App //
import App from './app'

// Service Worker //
import * as serviceWorker from './serviceWorker'

// Render //
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    document.getElementById('root') 
)

// Unregister //
serviceWorker.unregister()