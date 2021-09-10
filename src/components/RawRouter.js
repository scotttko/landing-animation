import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from './RawContainer';

const RawRouter = () => {
    return (
        <Router>
            <Switch>
                <Route>
                   <Container />
                </Route>
            </Switch>
        </Router>
    );
};

export default RawRouter;