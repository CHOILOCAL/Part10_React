import React from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";
import useWindowWidth from "./hooks/useWindowWidth"
import withHasMounted from "./hocs/withHasMounted"
import useHasMounted from "./hooks/useHasMounted";

const isLogin = false;

function App({ hasMounted }) {

    const width = useWindowWidth();
    // const hasMountedFromHooks = useHasMounted();

    // console.log(hasMounted, hasMountedFromHooks);

    return (
        <BrowserRouter>
            {width}
            <Links />
            <NavLinks />
            <Switch>
                <Route path="/login" render={() =>
                    (isLogin ? <Redirect to="/" /> : <Login />)}
                />
                <Route path="/profile" component={Profile}></Route>
                <Route path="/profile/:id" component={Profile}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/" exact component={Home}></Route>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default withHasMounted(App);
