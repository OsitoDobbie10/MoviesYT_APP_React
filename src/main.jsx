import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProviderContextoGlobal } from './Context/ContextoGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProviderContextoGlobal>
    <App />
    </ProviderContextoGlobal>
)
