import React from 'react';
import {BrowserRouter,Route, Switch, Router} from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profiles from './pages/profiles';
import NewIncident from './pages/newincidents';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path ='/' exact component={Logon} />
            <Register path='/register' component={Register} />
            <Profiles path = '/profiles' component={Profiles}/>
            <NewIncident path='/newincident' component={NewIncident}/>
        </Switch>
        </BrowserRouter>
    );
}