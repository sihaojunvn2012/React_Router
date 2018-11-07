import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../components/Home';
import Contact from '../components/Contact';
import News from '../components/News';
import DetailNew from '../components/DetailNew';



class DirectionalURL extends Component {
    render() {
        return (
            
                <div>
                     <Route exact path="/" component={Home}/>
                     <Route path="/Contact" component={Contact}/>
                     <Route path="/News" component={News}/>
                     <Route path="/Detail-New/:slug.:id.html" component={DetailNew}/>                 
                </div>
            
        );
    }
}

export default DirectionalURL;