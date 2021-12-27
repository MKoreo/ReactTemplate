import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

// Stitches
export {
    styled,
    css,
    theme,
    createTheme,
    darkTheme,
    getCssText,
    globalCss,
    keyframes,
    config,
} from '../stitches.config';

if (process.env.mode === 'development') {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root'),
    );
}
