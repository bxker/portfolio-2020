import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)