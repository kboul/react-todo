import React, { FC } from 'react';
import Main from '../Todos';

const App: FC = () => {
    return (
        <div data-test="component-app" className="container mx-auto mt-4">
            <Main />
        </div>
    );
};

export default App;
