import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landing';
import AboutMe from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

export default class extends React.Component {
    render() {
        return(
            <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        )
    }
}
