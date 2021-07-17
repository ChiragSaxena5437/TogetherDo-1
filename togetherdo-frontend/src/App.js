import React from "react";

import { LeftPanel } from './Components/Layout/LeftPanel';
import { MainArea } from './Components/Layout/MainArea';

export const App = () => {
    return (
        <div className="App">
            <LeftPanel />
            <MainArea />
        </div>
    );
};
