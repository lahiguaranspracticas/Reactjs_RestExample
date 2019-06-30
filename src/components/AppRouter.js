import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from './Welcome.js'

class AppRouter extends Component {
    render(){
    return(
    <BrowseRouter>
        <Route path= "/hello" component ={Welcome}/>
    </BrowseRouter>
    );
    }
}
export default AppRouter;
