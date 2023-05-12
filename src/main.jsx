import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import mainManager from './state/main/mainManager.js';
window.mainManager = mainManager

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
