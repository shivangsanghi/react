import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
const Dashboard = React.lazy(() => import("../../features/dashboard/Dashboard"));
const Repository = React.lazy(() => import("../../features/repository/Repository"));

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Suspense fallback="Loading...">
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/repository" component={Repository} />
                </Suspense>
            </div>
        );
    }
}