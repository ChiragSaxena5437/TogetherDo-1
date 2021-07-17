import React from 'react';

import { GreetingsArea } from './GreetingsArea';
import { Header } from './Header';
import { RightPanel } from './RightPanel';
import { TaskArea } from './TaskArea';

export const MainArea = () => {

    return(
        <div className="main-area">
            <div className="header">
                <Header />
            </div>
            <div>
                <GreetingsArea />
                <TaskArea />
                <RightPanel />
            </div>
        </div>
    );
}
