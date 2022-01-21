// Export stitches configuration
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
// During development, render test pages to test components.
if (process.env.mode === 'development') {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root'),

    );
}
