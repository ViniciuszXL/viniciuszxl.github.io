import React from "react"
import ReactDOM from "react-dom"
import AOS from 'aos'

// Bootstrap and CSS //
import 'bootstrap/dist/css/bootstrap.css'
import './components/style.css'
import 'aos/dist/aos.css'

// App //
import App from './app'

// Service Worker //
import * as serviceWorker from './serviceWorker'

// Init Aos //
AOS.init({
    duration: 1300
})

// Render //
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    document.getElementById('root') 
)

// Unregister //
serviceWorker.unregister()