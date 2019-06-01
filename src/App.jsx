import React from 'react';
import {Route} from 'react-router-dom';
import SimpleFormComponent from './SimpleFormComponent/SimpleFormComponent';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="router">
                    <Route exact path="/"/>
                    <Route path="/simple-form" component={SimpleFormComponent}/>
                </div>
            </React.Fragment>
        )
    }
}
