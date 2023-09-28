import React from 'react';
import './App.css';
import {RedocStandalone} from 'redoc';
import bundle from './bundle.json'

// The RedocStandalone can use a URL or a JSON object :
// <RedocStandalone specUrl="http://petstore.swagger.io/v2/swagger.json" />
// or
// <RedocStandalone spec={bundle} />

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <RedocStandalone
                    spec={bundle}
                    options={{
                        // nativeScrollbars: true,
                    }}
                />
            </header>
        </div>
    );
}

export default App;
