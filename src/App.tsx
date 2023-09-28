import React from 'react';
import './App.css';
import {RedocStandalone} from 'redoc';
import bundle from './bundle.json'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <RedocStandalone
                    spec={bundle}
                    options={{
                        nativeScrollbars: true,
                    }}
                />
            </header>
        </div>
    );
}

export default App;
