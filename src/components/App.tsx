import React from 'react';
import Main from './Main';

const App: React.FC = () => {
    return (
        <div data-test="component-app" className="container mx-auto">
            <Main />
        </div>
    );
};

export default App;
